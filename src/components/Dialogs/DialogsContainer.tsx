import React, {Dispatch} from 'react';
import {addNewMessageAC, changeNewMessageBodyAC} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
import {ActionsType, messagesType, RootStateType, usersType} from "../../redux/store";
import {Redirect} from "react-router";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux'







let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsUsers: state.dialogsPage.dialogData.users,
        messagesUsers: state.dialogsPage.dialogData.messages,
        newMessageText: state.dialogsPage.newMessageBody,
    }
};


// let AuthRedirectComponent = (props: StateToPropsType) => {
//     if (!props.isAuth) return <Redirect to={'/Login'}/>;
//     return <Dialogs {...props}/>
// }


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



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirectComponent
)(Dialogs) as React.ComponentClass;
