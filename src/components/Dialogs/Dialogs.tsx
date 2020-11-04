import React from 'react';
import classes from './Dialogs.module.css';
import {messagesType, usersType} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router";
import  {InjectedFormProps, reduxForm, Field} from "redux-form";
import {Textarea} from "../common/FormsControlls/FormsControlls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


type DialogsType = {
    dialogsUsers: Array<usersType>
    messagesUsers: Array<messagesType>
    sendMessage: (newMessageBody: string) => void
}

const Dialogs: React.FC<DialogsType> = ({
                                            sendMessage,
                                            dialogsUsers,
                                            messagesUsers,
                                        }) => {


    const addNewMessage = (values: AddMessageFormType) => {
        sendMessage(values.NewMessageBody)
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

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
        ;
};


type AddMessageFormType = {
    NewMessageBody: string
}


const maxlength30 = maxLengthCreator(30);

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'NewMessageBody'}
                       placeholder={'Enter some text'}
                       validate={[requiredField, maxlength30]}
                />
            </div>
            <div>
                <button type={"submit"}>Send</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm<AddMessageFormType>({
    form: 'DialogAddMessageForm'
})(AddMessageForm);


export default Dialogs;
