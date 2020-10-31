import React, {DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import s from './FormControlls.module.css'


type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span className={s.errorMessage}>{error}</span>}
        </div>
    )
}


export const Textarea: React.FC<WrappedFieldProps> = (props) => {

    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}


export const Input: React.FC<WrappedFieldProps> = (props) => {
    //const {input, meta, child, ...restProps} = props;
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}