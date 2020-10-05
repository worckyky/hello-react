import React from 'react';
import './App.css';
import HeaderContainer from './components/Headers/Header/HeaderContainer';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderBg from './components/Headers/HeaderBg/HeaderBg';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
    return (
        <BrowserRouter>
            <HeaderBg/>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <SidebarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'}
                           render={() =>
                               <ProfileContainer />}/>
                    <Route path={'/dialogs'}
                           render={() =>
                               <DialogsContainer/>}/>
                    <Route path={'/users'}

                           render={() =>
                               <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
