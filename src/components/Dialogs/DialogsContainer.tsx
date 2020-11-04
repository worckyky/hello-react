import React  from 'react';
import {addNewMessageAC, changeNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import {ActionsType, messagesType, RootStateType, usersType} from "../../redux/store";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose, Dispatch } from 'redux'


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsUsers: state.dialogsPage.dialogData.users,
        messagesUsers: state.dialogsPage.dialogData.messages,
    }
};



let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(addNewMessageAC(newMessageBody))
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent
)(Dialogs) as React.ComponentClass;
