import classes from './../Dialogs.module.css';
import React from "react";


type MessageItemType = {
    text: string
}


const MessageItem: React.FC<MessageItemType> = ({text}) => {
    return (
        <div className={classes.message}>{text}</div>
    )
};

export default MessageItem