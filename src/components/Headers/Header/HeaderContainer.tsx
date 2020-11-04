import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {getAuthUserData, logout} from "../../../redux/auth-reducer";
import {Dispatch} from "redux";


type HeaderContainerType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void
}


class InnerHeaderContainer extends React.Component<HeaderContainerType> {


    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    };
};

const mapStateToProps = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

const HeaderContainer = connect(mapStateToProps, {logout})(InnerHeaderContainer);


export default HeaderContainer;