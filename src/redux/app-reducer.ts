import {ActionsType, RootStateType} from "./store";
import {Dispatch} from "redux";
import {AuthAPI} from "../api/api";
import {ThunkDispatch} from "redux-thunk";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


enum CONS {
    INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'
}

let initialState = {
    initialized: false
};

export type AppStateType = typeof initialState





const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    const stateCopy = {...state};
    switch (action.type) {
        case CONS.INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
    }
    return stateCopy
}


export const InitializedSuccessAC = () => {
    return {
        type: CONS.INITIALIZED_SUCCESS,
    } as const
}

export default appReducer


export const initializeApp = () => (dispatch: ThunkDispatch<RootStateType, {}, ActionsType>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(InitializedSuccessAC());
        });

}


