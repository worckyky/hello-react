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
    AuthorizedUserId:  string | null
    isAuth: boolean
}


type MapDispatchPropsType = {
    getUserProfile: (userId: string | undefined | null) => void,
    getUserStatus: (userId: string | undefined | null) => void,
    updateStatus: (status: string) => void
}

type PathParamsType = {
    userId: string | null & undefined,
}

type OwnPropsType = MapStateToPropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class InnerProfileContainer extends React.Component<PropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            //@ts-ignore
            userId = this.props.AuthorizedUserId;
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
        status: state.profilePage.status,
        AuthorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
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