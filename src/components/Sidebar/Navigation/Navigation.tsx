import React from 'react'
import classes from "./Navigation.module.css";
import SideBarElement from "./SideBarElement/SideBarElement";
import {NavigationElementType} from "../../../redux/store";
import Icons from "../../../img/NavigationIcons";
import '../Sidebar.css'

type NavigationBlockType = {
    Navigation: Array<NavigationElementType>
}

const Navigation: React.FC<NavigationBlockType> = ({Navigation}) => {
    return (
        <nav className={'navigation'}>
            <ul className={classes.navigation__list}>
                {Navigation.map(elem => {

                    const convertorData = (icon: string) => {
                        return Icons[`${icon}`]
                    }

                    return (
                        <SideBarElement
                            text={elem.text}
                            link={elem.link}
                            icon={convertorData(elem.icon)}
                            key={elem.id} id={elem.id}
                        />
                    )
                })}
            </ul>

        </nav>
    )
};


export default Navigation;