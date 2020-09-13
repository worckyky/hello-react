import React, {Dispatch} from 'react';
import {addNewMessageAC, changeNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import {ActionsType, RootStateType} from "../../redux/store";



let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsUsers: state.dialogsPage.dialogData.users,
        messagesUsers: state.dialogsPage.dialogData.messages,
        newMessageText: state.dialogsPage.newMessageBody
    }
};

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        clickHandler: () => {
            dispatch(addNewMessageAC())
        },
        changeHandler: (text: string) =>  {
            dispatch(changeNewMessageBodyAC(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
