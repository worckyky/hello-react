import {ActionsType} from "./store";


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


