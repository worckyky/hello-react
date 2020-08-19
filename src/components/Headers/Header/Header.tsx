import React from 'react';
import classes from './Header.module.css'

import {ReactComponent as Logo} from "../../../img/logos/Logo.svg";

const Header = () => {
  return (
        <header className={classes.header}>
          <Logo/>
          <button className={classes.logout}>log out</button>
        </header>
  );
};

export default Header;
