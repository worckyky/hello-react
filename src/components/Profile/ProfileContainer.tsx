import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {profileType, getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux';

type MapStateToPropsType = {
    profile: profileType | null
    status: string
}


type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void,
    getUserStatus: (userId: string) => void,
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string,
}

type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class InnerProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = '3';
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};


export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateStatus
    }),
    withRouter,
    WithAuthRedirectComponent
)(InnerProfileContainer) as React.ComponentClass;