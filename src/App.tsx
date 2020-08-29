import React, {FC} from 'react';
import './App.css';
import Header from './components/Headers/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import HeaderBg from './components/Headers/HeaderBg/HeaderBg';
import {Route, BrowserRouter} from 'react-router-dom';
import {StoreType} from "./redux/state";


type AppType = {
    store: StoreType
}


const App: React.FC<AppType> = ({store}) => {

    const state = store.getState();

    return (
        <BrowserRouter>
            <HeaderBg/>
            <div className={'app-wrapper'}>
                <Header/>
                <Sidebar sidebar={state.sideBar}/>
                <div className={'app-wrapper-content'}>
                    <Route exact path={'/profile'} render={() => <Profile profile={state.profilePage}
                                                                          dispatch={store.dispatch.bind(store)}
                                                                          addPost={store.addPost.bind(store)}
                                                                          updatePost={store.updateNewPostText.bind(store)}
                                                                          newPostText={state.profilePage.postText}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
