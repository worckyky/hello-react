import React from 'react';
import style from './Header.module.css'

import {ReactComponent as Logo} from "../../../img/logos/Logo.svg";
import { NavLink } from 'react-router-dom';

type HeaderType = {
    isAuth: boolean,
    login: string | null
}


const Header: React.FC<HeaderType> = ({isAuth,login}) => {
    return (
        <header className={style.header}>
            <Logo/>
            <div className={style.loginBlock}>
                {isAuth ? <p className={style.login}>{login}</p> : <NavLink to={'/login'}>Login</NavLink>}
                <button className={style.logout}>log out</button>
            </div>

        </header>
    );
};

export default Header;
