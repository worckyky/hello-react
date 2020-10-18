import {ActionsType} from "./store";
import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";


enum CONS {
    SET_USER_DATA = 'SET_USER_DATA'
}

interface authUserType {
    id: number | null,
    email: string | null,
    login: string | null
}


export interface authType extends authUserType {
    isAuth: boolean
}

let initialState: authType = {
    isAuth: false,
    id: null,
    email: null,
    login: null
};


export const setAuthUserData = (data: authUserType) => {
    return {
        type: CONS.SET_USER_DATA,
        data: {
            id: data.id,
            email: data.email,
            login: data.login
        }
    } as const
}


const authReducer = (state: authType = initialState, action: ActionsType) => {
    const stateCopy = {...state}
    switch (action.type) {
        case CONS.SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
    }
    return stateCopy
}

export default authReducer



export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        AuthAPI.me()
            .then((response)=> {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data))
                }
            })
    }
}


