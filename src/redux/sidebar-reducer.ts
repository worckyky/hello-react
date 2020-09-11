import {ActionsType, sideBarType} from "./store";
import image from "../img/users/1.jpg";
import {v1} from "uuid";


let initialState:sideBarType = {
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

const sidebarReducer = (state: sideBarType = initialState, action: ActionsType) => {
    return state
}


export default sidebarReducer;