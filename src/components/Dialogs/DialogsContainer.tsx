import React, {ChangeEvent} from 'react';
import {ActionsType} from "../../redux/store";
import {dialogPageType} from "../../redux/store";
import {addNewMessageAC, changeNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";


type DialogsType = {
    dialogs: dialogPageType
    dispatch: (action: ActionsType) => void
    newMessageText: string
}

const DialogsContainer: React.FC<DialogsType> = ({dialogs, dispatch, newMessageText}) => {


    const onClickHandler = () => {
        dispatch(addNewMessageAC())
    };

    const onChangeHandler = (text: string) => {
        dispatch(changeNewMessageBodyAC(text))
    };

    return <Dialogs dialogsUsers={dialogs.dialogData.users}
                    messagesUsers={dialogs.dialogData.messages}
                    newMessageText={newMessageText}
                    clickHandler={onClickHandler}
                    changeHandler={onChangeHandler}/>
};

export default DialogsContainer;