import {v1} from "uuid";
import {postDataType, ActionsType, profilePageType} from "./store";


enum CONS {
    ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
}


export const addPostAC = () => {
    return {
        type: CONS.ADD_POST,
    } as const
};


export const changeNewTextAC = (newText: string) => {
    return {
        type: CONS.UPDATE_NEW_POST_TEXT,
        newText: newText,
    } as const
};


let initialState: profilePageType = {
    postData: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'it\'s my first post', likesCount: 6},
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: 'it\'s my first post', likesCount: 16},
        {id: v1(), message: 'Hi, how are you?', likesCount: 17},
    ],
    postText: ''
};


const profileReducer = (state: profilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case CONS.ADD_POST:
            return {
                ...state,
                postData: [...state.postData, {
                    id: v1(),
                    message: state.postText,
                    likesCount: 0
                }],
                postText: ''
            };

        case CONS.UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                postText: action.newText
            };
        default:
            return state;
    }
};

export default profileReducer;