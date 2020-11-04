import React from 'react';
import './App.css';
import HeaderContainer from './components/Headers/Header/HeaderContainer';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderBg from './components/Headers/HeaderBg/HeaderBg';
import {Route, BrowserRouter, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from 'redux';


type AppType = {
    getAuthUserData: () => void,
}

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <BrowserRouter>
                <HeaderBg/>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <SidebarContainer/>
                    <div className={'app-wrapper-content'}>
                        <Route path={'/profile/:userId?'}
                               render={() =>
                                   <ProfileContainer/>}/>
                        <Route path={'/dialogs'}
                               render={() =>
                                   <DialogsContainer/>}/>
                        <Route path={'/users'}

                               render={() =>
                                   <UsersContainer/>}/>
                        <Route path={'/login'}
                               render={() =>
                                   <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default compose(
    connect(null, {getAuthUserData}))(App);

