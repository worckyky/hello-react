import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className={'app-wrapper'}>
        <Header />
        <Sidebar />
        <div className={'app-wrapper-content'}>
          <Route component={Profile} exact path={'/profile'} />
          <Route component={Dialogs} path={'/dialogs'} />
          {/*<Profile />*/}
          {/*<Dialogs />*/}
        </div>
      </div>
    </Router>
  );
};

export default App;
