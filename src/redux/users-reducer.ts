import {v1} from "uuid";
import {ActionsType} from "./store";

enum CONS {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USER = 'SET_USER'
}

type locationType = {
    city: string,
    country: string
}

export type userType = {
    id: string,
    photoUrl: string
    fullName: string,
    followed: boolean,
    status: string,
    location: locationType
}

export type allUsersType = {
    users: Array<userType>
}


let initialState: allUsersType = {
    users: []
};


export const FollowAC = (userID: string) => {
    return {
        type: CONS.FOLLOW,
        userID: userID
    } as const
};

export const UnFollowAC = (userID: string) => {
    return {
        type: CONS.UNFOLLOW,
        userID: userID
    } as const
};

export const setUserAC = (users: Array<userType>) => {
    return {
        type: CONS.SET_USER,
        users: users
    } as const
};



// export type UsersPageActionType =
//     ReturnType<typeof FollowAC> | ReturnType<typeof UnFollowAC> | ReturnType<typeof setUserAC>


const usersReducer = (state:allUsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case CONS.FOLLOW:
            return (
                {
                    ...state, users: state.users.map(user => {
                        if (user.id === action.userID) {
                            return {...user, followed: true}
                        }
                        return user
                    })
                }
            );
        case CONS.UNFOLLOW:
            return (
                {
                    ...state, users: [...state.users].map(user => {
                        if (user.id === action.userID) {
                            return {...user, followed: false}
                        }
                        return user
                    })
                }
            );
        case CONS.SET_USER: {
            return  {...state , users: [...state.users, ...action.users]};
        }
        default:
            return state
    }
}


export default usersReducer;