import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {setUserProfile, profileType} from "../../redux/profile-reducer";


type InnerProfileContainerType = {
    setUserProfile: (profile: profileType) => void,
    profile: profileType | null
}


class InnerProfileContainer extends React.Component<InnerProfileContainerType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: RootStateType) => {
    return {
       profile: state.profilePage.profile
    }
}


const ProfileContainer = connect(mapStateToProps, {
    setUserProfile
})(InnerProfileContainer);

export default ProfileContainer;