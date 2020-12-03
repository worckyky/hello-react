import { v1 } from 'uuid';
import { ActionsType, profilePageType } from './store';
import { Dispatch } from 'redux';
import { ProfileAPI, UsersAPI } from '../api/api';

enum CONS {
  ADD_POST = 'ADD_POST',
  UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
  SET_USER_PROFILE = 'SET_USER_PROFILE',
  GET_USER_STATUS = 'GET_USER_STATUS',
  DELETE_POST_TEXT = 'DELETE_POST_TEXT',
}

type contactsDataType = string | null;

type contactsType = {
  facebook: contactsDataType;
  website: contactsDataType;
  vk: contactsDataType;
  twitter: contactsDataType;
  instagram: contactsDataType;
  youtube: contactsDataType;
  github: contactsDataType;
  mainLink: contactsDataType;
};
type profilePhotosType = {
  large: contactsDataType;
  small: contactsDataType;
};

export type profileType = {
  aboutMe: contactsDataType;
  contacts: contactsType;
  lookingForAJob: boolean;
  lookingForAJobDescription: contactsDataType;
  fullName: contactsDataType;
  userId: number;
  photos: profilePhotosType;
};

export const addPostAC = (value: string) => {
  return {
    type: CONS.ADD_POST,
    value,
  } as const;
};

export const setUserProfile = (profile: any) => {
  return {
    type: CONS.SET_USER_PROFILE,
    profile: profile,
  } as const;
};

export const setUserStatus = (status: string) => {
  return {
    type: CONS.GET_USER_STATUS,
    status: status,
  } as const;
};

export const changeNewTextAC = (newText: string) => {
  return {
    type: CONS.UPDATE_NEW_POST_TEXT,
    newText: newText,
  } as const;
};

export const deletePostAC = (postID: string) => {
  return {
    type: CONS.DELETE_POST_TEXT,
    postID,
  } as const;
};

let initialState: profilePageType = {
  postData: [
    { id: v1(), message: 'Hi, how are you?', likesCount: 12 },
    { id: v1(), message: "it's my first post", likesCount: 6 },
    { id: v1(), message: 'Hi, how are you?', likesCount: 12 },
    { id: v1(), message: "it's my first post", likesCount: 16 },
    { id: v1(), message: 'Hi, how are you?', likesCount: 17 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state: profilePageType = initialState, action: ActionsType) => {
  switch (action.type) {
    case CONS.ADD_POST:
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: v1(),
            message: action.value,
            likesCount: 0,
          },
        ],
      };
    case CONS.DELETE_POST_TEXT:
      return {
        ...state,
        postData: [...state.postData, state.postData.filter((p) => p.id !== action.postID)],
      };
    case CONS.UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        postText: action.newText,
      };
    case CONS.SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case CONS.GET_USER_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export default profileReducer;

export const getUserProfile = (userId: string) => {
  return async (dispatch: Dispatch) => {
    let response = await UsersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};

export const getUserStatus = (userId: string) => {
  return async (dispatch: Dispatch) => {
    let response = await ProfileAPI.getStatus(userId);
      dispatch(setUserStatus(response.data));

  };
};

export const updateStatus = (status: string) => {
  return async (dispatch: Dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
  };
};
