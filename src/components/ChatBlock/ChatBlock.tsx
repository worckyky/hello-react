import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from './chatblock.module.css';
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControlls/FormsControlls";

type chatType = {
    addPost: (value: string) => void
};


type AddChatFormType = {
    ChatForm: string
}




const maxLength30 = maxLengthCreator(30);
const AddChatForm: React.FC<InjectedFormProps<AddChatFormType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'ChatForm'}
                   placeholder={'Write Some Words'}
                   component={Textarea}
                   validate={[requiredField, maxLength30]}/>
            <button type={'submit'}>Send</button>
        </form>
    )
}

const ChatBlock: React.FC<chatType> = ({addPost}) => {

    const addPostHandler = (value: AddChatFormType) => {
        addPost(value.ChatForm);
    };

    return (
        <div className={classes.content__chat}>
            <h2>My posts</h2>
            <ReduxAddChatForm onSubmit={addPostHandler}/>
        </div>
    )

};


const ReduxAddChatForm = reduxForm<AddChatFormType>({
    form: 'AddChatForm'
})(AddChatForm);


export default ChatBlock