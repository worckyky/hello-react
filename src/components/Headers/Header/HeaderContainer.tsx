import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {getAuthUserData} from "../../../redux/auth-reducer";


type HeaderContainerType = {
    getAuthUserData: () => void,
    isAuth: boolean,
    login: string | null
}


class InnerHeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount(){
        this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    };
};

const mapStateToProps = (state: RootStateType) => {
   return {
       isAuth: state.auth.isAuth,
       login: state.auth.login
   }
}

const HeaderContainer = connect(mapStateToProps, {getAuthUserData})(InnerHeaderContainer);


export default HeaderContainer;