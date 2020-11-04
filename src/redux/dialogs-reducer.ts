import {v1} from "uuid";
import { dialogPageType, ActionsType} from "./store";


enum CONS {
    UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY',
    ADD_NEW_MESSAGE_BODY = 'ADD_NEW_MESSAGE_BODY'
}

export const addNewMessageAC = (newMessageBody: string) => {
    return {
        type: CONS.ADD_NEW_MESSAGE_BODY,
        newMessageBody
    } as const
};

export const changeNewMessageBodyAC = (newBody: string) => {
    return {
        type: CONS.UPDATE_NEW_MESSAGE_BODY,
        newBody: newBody,
    } as const
};

let initialState: dialogPageType = {
    dialogData: {
        users: [{
            name: 'Толя',
            id: 1,
            link: 'dialogs'
        }, {
            name: 'Вася',
            id: 2,
            link: 'dialogs'
        }, {
            name: 'Пется',
            id: 3,
            link: 'dialogs'
        }],
        messages: [{
            id: v1(),
            text: 'Hello my frend'
        }, {
            id: v1(),
            text: 'Priveat'
        }, {
            id: v1(),
            text: 'Poka'
        }]
    }
}

const dialogsReducer = (state: dialogPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case CONS.ADD_NEW_MESSAGE_BODY:
            let body = action.newMessageBody;
            return {...state,
                dialogData: {...state.dialogData,
                    messages: [...state.dialogData.messages, {
                        id: v1(),
                        text: body
                    }]
                }
            }

        case CONS.UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state, newMessageBody: action.newBody
            }
        default:
            return state;
    }
}


export default dialogsReducer;

