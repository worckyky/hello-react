import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Profile} from "../../../img/icons/Navigation/ic_profile_24.svg";
import {ReactComponent as Message} from "../../../img/icons/Navigation/ic_message_24.svg";
import {ReactComponent as Settings} from "../../../img/icons/Navigation/ic_settings_24.svg";
import {ReactComponent as News} from "../../../img/icons/Navigation/ic_news_24.svg";
import {ReactComponent as Music} from "../../../img/icons/Navigation/ic_music_24.svg";
import SideBarElement from "../SideBarElement/SideBarElement";

export interface sideBarElementType {
    text: string,
    link: string,
    icon: any,
    id: number,
}

const listOfNavs: Array<sideBarElementType> = [{
    text: 'Profile',
    link: '/profile',
    icon: <Profile/>,
    id: 1,

}, {
    text: 'Dialogs',
    link: '/dialogs',
    icon: <Message/>,
    id: 2,
}, {
    text: 'News',
    link: '/news',
    icon: <News/>,
    id: 3,
}, {
    text: 'Music',
    link: '/music',
    icon: <Music/>,
    id: 4,
}, {
    text: 'Settings',
    link: '/settings',
    icon: <Settings/>,
    id: 5,
},]

const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul className={classes.sidebar__list}>
                {listOfNavs.map(elem => {
                    return (
                        <SideBarElement text={elem.text} link={elem.link} icon={elem.icon} key={elem.id} id={elem.id}/>
                    )
                })}
            </ul>

        </nav>
    );
};

export default Sidebar;
