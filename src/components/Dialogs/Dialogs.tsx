import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import {ActionsType, messagesType, usersType} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {dialogPageType} from "../../redux/store";
import { addNewMessageAC, changeNewMessageBodyAC } from '../../redux/dialogs-reducer';


type DialogsType = {
    dialogsUsers: Array<usersType>
    messagesUsers: Array<messagesType>
    newMessageText: string
    clickHandler: () => void
    changeHandler: (text: string)=> void
}

const Dialogs: React.FC <DialogsType> = ({newMessageText,clickHandler, changeHandler, dialogsUsers, messagesUsers}) => {

        const textAreaRef = React.createRef<HTMLTextAreaElement>();

    const onClickHandler = () => {
        clickHandler();
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changeHandler(e.currentTarget.value);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsUsers.map(dialog => {
                    return <DialogItem link={dialog.link} id={dialog.id} name={dialog.name}/>
                })}
            </div>
            <div className={classes.messages}>
                {messagesUsers.map(message => {
                    return <MessageItem text={message.text}/>
                })}
                <div>
                    <textarea
                        value={newMessageText}
                        ref={textAreaRef}
                        onChange={onChangeHandler}
                        placeholder={'Enter some text'}/>
                </div>
                <div><button onClick={onClickHandler}>Send</button></div>
            </div>
        </div>
    );
};

export default Dialogs;
