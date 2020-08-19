import React from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    link: string,
    id: number,
    name: string,
}

const DialogItem: React.FC<DialogItemType> = ({link, id, name}) => {
    return (
        <div><NavLink className={classes.dialog}
                      activeClassName={classes.dialog_active}
                      to={`/${link}/${id}`}>{name}
            </NavLink>
        </div>
    )
};

export default DialogItem