import React from 'react';
import style from './Header.module.css'

import {ReactComponent as Logo} from "../../../img/logos/Logo.svg";
import { NavLink } from 'react-router-dom';
import {Dispatch} from "redux";

type HeaderType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void
}


const Header: React.FC<HeaderType> = ({isAuth,login,logout}) => {
    return (
        <header className={style.header}>
            <Logo/>
            <div className={style.loginBlock}>
                {isAuth ? <div className={style.auth__block}>
                    <p className={style.login}>{login}</p>
                    <button className={style.logout} onClick={logout}>log out</button>
                </div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    );
};

export default Header;
