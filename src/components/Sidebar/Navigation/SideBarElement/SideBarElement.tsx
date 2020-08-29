import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './sideBarElement.module.css'

type SideBarElementType = {
    text: string,
    link: string,
    icon: any,
    id: number
}

const SideBarElement: React.FC<SideBarElementType> = ({text, link,icon,id}) => {
    return (
        <li key={id}>
            <NavLink to={link} className={classes.navigation__link} activeClassName={classes.navigation__link_active}>
                {icon}
                <p className={classes.navigation__link_text}>{text}</p>
            </NavLink>
        </li>
    )
}

export default SideBarElement;