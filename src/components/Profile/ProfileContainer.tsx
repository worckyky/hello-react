import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {setUserProfile, profileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";




type MapStateToPropsType = {
    profile: profileType | null
}

type MapDispathchPropsType = {
    setUserProfile: (profile: profileType) => void,
}

type PathParamsType = {
    userId: string
}

type OwnPropsType = MapStateToPropsType & MapDispathchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class InnerProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '2';
        }

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
       profile: state.profilePage.profile
    }
}


let withUrlDataContainerComponent = withRouter(InnerProfileContainer);

const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(withUrlDataContainerComponent);

export default ProfileContainer;