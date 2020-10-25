import React, {ReactNode} from 'react'
import {Redirect, RouteComponentProps} from "react-router";
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";



export type RedirectPropType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state:RootStateType): RedirectPropType => {
    return {
        isAuth: state.auth.isAuth
    }
};
export const WithAuthRedirectComponent = (Component: React.ComponentType) => {

    class RedirectComponent extends React.Component<RedirectPropType> {
        render() {
            if(!this.props.isAuth) return <Redirect to={`/Login`}/>;
            return <Component {...this.props}/>
        }

    }
    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);


    return ConnectedRedirectComponent;

}
