import React, {FC} from 'react';
import './App.css';
import Header from './components/Headers/Header/Header';
import Sidebar from './components/SideMenu/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import HeaderBg from './components/Headers/HeaderBg/HeaderBg';
import {Route, BrowserRouter} from 'react-router-dom';
import {RootStateType} from "./redux/state";

type AppType = {
    state: RootStateType
}

const App: React.FC<AppType> = ({state}) => {
  return (
    <BrowserRouter>
      <HeaderBg/>
      <div className={'app-wrapper'}>
        <Header/>
        <Sidebar/>
        <div className={'app-wrapper-content'}>
          <Route exact path={'/profile'} render={ () => <Profile profile={state.profilePage}/>} />
          <Route path={'/dialogs'} render={ () => <Dialogs dialogs={state.dialogsPage}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
