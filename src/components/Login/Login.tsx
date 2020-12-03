import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControlls/FormsControlls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/store";
import {Redirect} from "react-router";
import s from '../common/FormsControlls/FormControlls.module.css'

type FormDataType = {
    Email: string,
    Password: string,
    RememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div><Field placeholder={'Login'} name={'Email'} component={Input} validate={[requiredField]}/></div>
                <div>
                    <Field placeholder={'Password'} name={'Password'} component={Input} validate={[requiredField]}/></div>
                <div>
                    <Field component={'input'} type={'checkbox'} name={'RememberMe'}/>remember me
                </div>
                <div>
                    <button type={"submit"}>login</button>
                </div>
                {error && <div className={s.global_error}>
                    {error}
                </div>}
            </form>
        </>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);


type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void,
    isAuth: boolean
}

const Login: React.FC<LoginType> = ({login, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.Email, formData.Password, formData.RememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);