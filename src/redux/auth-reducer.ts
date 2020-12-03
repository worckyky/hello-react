import { ActionsType, RootStateType } from './store';
import { Dispatch } from 'redux';
import { AuthAPI } from '../api/api';
import { ThunkDispatch } from 'redux-thunk';
import { stopSubmit } from 'redux-form';

enum CONS {
  SET_USER_DATA = 'SET_USER_DATA',
}

let initialState = {
  id: null as string | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};

export type AuthStateType = typeof initialState;

export const setAuthUserData = (
  id: string | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => {
  return {
    type: CONS.SET_USER_DATA,
    data: {
      id,
      email,
      login,
      isAuth,
    },
  } as const;
};

const authReducer = (state: AuthStateType = initialState, action: ActionsType): AuthStateType => {
  // const stateCopy = {...state};
  switch (action.type) {
    case CONS.SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
};

export default authReducer;

export const getAuthUserData = () => async (dispatch: Dispatch) => {
  let response = await AuthAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

// ThunkDispatch<RootStateType, {}, ActionsType>
export const login = (email: string, password: string, rememberMe: boolean) => {
  return async (dispatch: Dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
      let { userId } = response.data.data;
      dispatch(setAuthUserData(userId, email, email, true));
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
      dispatch(stopSubmit('login', { _error: message }));
    }
  };
};
export const logout = () => {
  return (dispatch: Dispatch) => {
    AuthAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};
