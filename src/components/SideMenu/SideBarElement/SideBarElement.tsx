import React from 'react';
import {NavLink} from "react-router-dom";
import {sideBarElementType} from "../Sidebar/Sidebar";
import classes from './sideBarElement.module.css'

const SideBarElement = (props: sideBarElementType) => {
    return (
        <li>
            <NavLink to={props.link} className={classes.sidebar__link} activeClassName={classes.sidebar__link_active}>
                {props.icon}
                <p className={classes.sidebar__link_text}>{props.text}</p>
            </NavLink>
        </li>
    )
}

export default SideBarElement