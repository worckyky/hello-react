import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {profileType, getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux';

type MapStateToPropsType = {
    profile: profileType | null
}


type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void,
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
            userId = '2';
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
};


export default compose(
    connect(mapStateToProps, {
        getUserProfile
    }),
    withRouter,
    WithAuthRedirectComponent
)(InnerProfileContainer) as React.ComponentClass;