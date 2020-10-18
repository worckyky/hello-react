import profileReducer, {
    addPostAC,
    changeNewTextAC,
    setUserProfile,
    profileType,
} from "./profile-reducer";
import dialogsReducer, {changeNewMessageBodyAC, addNewMessageAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {
    allUsersType,
    setUser,
    setCurrentPage,
    setTotalCount, toggleIsFetching, toggleFollowingInProgress,
    AcceptFollow, AcceptUnFollow
} from "./users-reducer";
import {authType, setAuthUserData} from "./auth-reducer";

// Action type

export type postDataType = {
    id: string,
    message: string,
    likesCount: number
}
export type profilePageType = {
    postData: Array<postDataType>
    postText: string
    profile: profileType | null
}
export type usersType = {
    name: string,
    id: number,
    link: string
}
export type messagesType = {
    id: string,
    text: string
}
export type dialogDataType = {
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
    sideBar: sideBarType,
    usersPage: allUsersType,
    auth: authType
}


export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof changeNewMessageBodyAC>
    | ReturnType<typeof addNewMessageAC>
    | ReturnType<typeof AcceptFollow>
    | ReturnType<typeof AcceptUnFollow>
    | ReturnType<typeof setUser>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress>

// export type StoreType = {
//     _state: RootStateType
//     _onChange: () => void
//     subscribe: (callback: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsType) => void
// }


// const store: StoreType = {
//     _state: {
//         profilePage: {
//             postData: [
//                 {id: v1(), message: 'Hi, how are you?', likesCount: 12},
//                 {id: v1(), message: 'it\'s my first post', likesCount: 6},
//                 {id: v1(), message: 'Hi, how are you?', likesCount: 12},
//                 {id: v1(), message: 'it\'s my first post', likesCount: 16},
//                 {id: v1(), message: 'Hi, how are you?', likesCount: 17},
//             ],
//             postText: ''
//         },
//         dialogsPage: {
//             dialogData: {
//                 users: [{
//                     name: 'Толя',
//                     id: 1,
//                     link: 'dialogs'
//                 }, {
//                     name: 'Вася',
//                     id: 2,
//                     link: 'dialogs'
//                 }, {
//                     name: 'Пется',
//                     id: 3,
//                     link: 'dialogs'
//                 }],
//                 messages: [{
//                     id: v1(),
//                     text: 'Hello my frend'
//                 }, {
//                     id: v1(),
//                     text: 'Priveat'
//                 }, {
//                     id: v1(),
//                     text: 'Poka'
//                 }]
//             },
//             newMessageBody: ''
//         },
//         sideBar: {
//             navigation: [{
//                 text: 'Profile',
//                 link: '/profile',
//                 icon: 'Profile',
//                 id: 1,
//             }, {
//                 text: 'Dialogs',
//                 link: '/dialogs',
//                 icon: 'Message',
//                 id: 2,
//             }, {
//                 text: 'News',
//                 link: '/news',
//                 icon: 'News',
//                 id: 3,
//             }, {
//                 text: 'Music',
//                 link: '/music',
//                 icon: 'Music',
//                 id: 4,
//             }, {
//                 text: 'Settings',
//                 link: '/settings',
//                 icon: 'Settings',
//                 id: 5,
//             },],
//             friends: {
//                 allFriends: [{
//                     photo: image,
//                     name: 'Vanya',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Jenya',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Benya',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Serya',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Hello',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Bitch',
//                     id: v1()
//                 }],
//                 onlineFriends: [{
//                     photo: image,
//                     name: 'Vanya',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Jenya',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Benya',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Serya',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Hello',
//                     id: v1()
//                 }, {
//                     photo: image,
//                     name: 'Bitch',
//                     id: v1()
//                 }]
//             }
//         }
//     },
//     _onChange() {
//
//     },
//     subscribe(callback) {
//         this._onChange = callback
//     },
//     getState() {
//         return this._state;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sideBar = sidebarReducer(this._state.sideBar, action);
//         this._onChange();
//     }
// };





