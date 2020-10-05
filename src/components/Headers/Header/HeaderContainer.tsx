import React from 'react';
import axios from "axios";

import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {authType, setAuthUserData} from "../../../redux/auth-reducer";


type HeaderContainerType = {
    setAuthUserData: (data: authType) => void,
    isAuth: boolean,
    login: string | null
}


class InnerHeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount(){
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then((response)=> {
                if (response.data.resultCode === 0) {

                    this.props.setAuthUserData(response.data.data)
                }
            })

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

const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(InnerHeaderContainer);


export default HeaderContainer;