import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";


type FormDataType = {
    Login: string,
    Password: string,
    RememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'} name={'Login'} component={'input'}/></div>
                <div>
                    <Field placeholder={'Password'} name={'Password'} component={'input'}/></div>
                <div>
                    <Field component={'input'} type={'checkbox'} name={'RememberMe'}/>remember me
                </div>
                <div>
                    <button type={"submit"}>login</button>
                </div>
            </form>
        </>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);


const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}


export default Login;