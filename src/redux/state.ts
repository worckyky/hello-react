import {v1} from "uuid";
import image from '../img/users/1.jpg'

// Action type

const ADD_POST: string = 'ADD_POST';
const UPDATE_NEW_POST_TEXT: string = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY: string = 'UPDATE-NEW-POST-TEXT';


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
    newMessageBody: string
}

export type NavigationElementType = {
    text: string;
    link: string;
    icon: string;
    id: number
}


export type friendType = {
    photo: string,
    name: string,
    id: string
}

export type allFriendsType = {
    allFriends: Array<friendType>
    onlineFriends: Array<friendType>
}

export type sideBarType = {
    navigation: Array<NavigationElementType>,
    friends: allFriendsType
}

export type RootStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogPageType,
    sideBar: sideBarType
}

export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof changeNewMessageBodyAC>



const store: StoreType = {
    _state: {
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
            },
            newMessageBody: ''
        },
        sideBar: {
            navigation: [{
                text: 'Profile',
                link: '/profile',
                icon: 'Profile',
                id: 1,
            }, {
                text: 'Dialogs',
                link: '/dialogs',
                icon: 'Message',
                id: 2,
            }, {
                text: 'News',
                link: '/news',
                icon: 'News',
                id: 3,
            }, {
                text: 'Music',
                link: '/music',
                icon: 'Music',
                id: 4,
            }, {
                text: 'Settings',
                link: '/settings',
                icon: 'Settings',
                id: 5,
            },],
            friends: {
                allFriends: [{
                    photo: image,
                    name: 'Vanya',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Jenya',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Benya',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Serya',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Hello',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Bitch',
                    id: v1()
                }],
                onlineFriends: [{
                    photo: image,
                    name: 'Vanya',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Jenya',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Benya',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Serya',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Hello',
                    id: v1()
                }, {
                    photo: image,
                    name: 'Bitch',
                    id: v1()
                }]
            }
        }
    },
    _onChange() {

    },
    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: postDataType = {
                id: v1(),
                message: this._state.profilePage.postText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.postText = '';
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.postText = action.newText;
            this._onChange();
        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.newMessage;
            this._onChange();
        }
    }
}


// Actions

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
};

export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const changeNewMessageBodyAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: newMessage
    } as const
}

export default store


