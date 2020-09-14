import React from 'react';
import './App.css';
import Header from './components/Headers/Header/Header';
import UsersContainer from "./components/Users/UsersContainer";
import Profile from './components/Profile/Profile';
import HeaderBg from './components/Headers/HeaderBg/HeaderBg';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";

const App = () => {
    return (
        <BrowserRouter>
            <HeaderBg/>
            <div className={'app-wrapper'}>
                <Header/>
                <SidebarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/profile'}
                           render={() =>
                               <Profile/>}/>
                    <Route path={'/dialogs'}
                           render={() =>
                               <DialogsContainer/>}/>
                    <Route path={'/users'}

                           render={() =>
                               <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
