import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {profileType, getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";

type MapStateToPropsType = {
    profile: profileType | null
    isAuth: boolean
}

type MapDispathchPropsType = {
    getUserProfile: (userId: string) => void,
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
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
       profile: state.profilePage.profile,
       isAuth: state.auth.isAuth
    }
}


let withUrlDataContainerComponent = withRouter(InnerProfileContainer);

const ProfileContainer = connect(mapStateToProps, {
    getUserProfile
})(withUrlDataContainerComponent);

export default ProfileContainer;