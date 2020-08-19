import React from 'react';
import classes from './Dialogs.module.css';
import state from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {dialogPageType} from "../../redux/state";

type DialogsType = {
    dialogs: dialogPageType
}

const Dialogs: React.FC <DialogsType> = ({dialogs}) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogs.dialogData.users.map(dialog => {
                    return <DialogItem link={dialog.link} id={dialog.id} name={dialog.name}/>
                })}
            </div>
            <div className={classes.messages}>
                {dialogs.dialogData.messages.map(message => {
                    return <MessageItem text={message.text}/>
                })}
            </div>
        </div>
    );
};

export default Dialogs;
