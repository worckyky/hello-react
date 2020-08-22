import {v1} from "uuid";
import {renderTree} from "../render";


export type postDataType = {
    id: string,
    message: string,
    likesCount: number
}

export type profilePageType = {
    postData: Array<postDataType>
    postText: string
}
type usersType = {
    name: string,
    id: number,
    link: string
}
type messagesType = {
    id: number,
    text: string
}
type dialogDataType = {
    users: Array<usersType>,
    messages: Array<messagesType>
}

export type dialogPageType = {
    dialogData: dialogDataType
}
export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogPageType
}

let state: RootStateType = {
    profilePage: {
        postData: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: 'it\'s my first post', likesCount: 6},
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: 'it\'s my first post', likesCount: 16},
            {id: v1(), message: 'Hi, how are you?', likesCount: 17},
        ],
        postText: ''
    },
    dialogsPage: {
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
                id: 1,
                text: 'Hello my frend'
            }, {
                id: 2,
                text: 'Priveat'
            }, {
                id: 3,
                text: 'Poka'
            }]
        }
    }
};



export const addPost = () => {
    const newPost: postDataType = {
        id: v1(),
        message: state.profilePage.postText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.postText = '';
    renderTree(state)
};

export const updateNewPostText = (text: string) =>{
    state.profilePage.postText = text;
    renderTree(state);
}


export default state


