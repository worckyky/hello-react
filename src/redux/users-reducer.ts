import {ActionsType} from "./store";
import {UsersAPI} from "../api/api";
import {Dispatch} from "redux";

enum CONS {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USER = 'SET_USER',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
}

// type photoType = string | null | undefined
//
// type photosType = {
//     large: photoType
//     small: photoType
// }

export type userType = {
    id: string,
    photos: {
        small: string,
        large: string
    }
    name: string,
    followed: boolean,
    status: string,

}

export type allUsersType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: (null | string)[]
}


export const AcceptFollow = (userID: string) => {
    return {
        type: CONS.FOLLOW,
        userID: userID
    } as const
};

export const AcceptUnFollow = (userID: string) => {
    return {
        type: CONS.UNFOLLOW,
        userID: userID
    } as const
};


export const setUser = (users: Array<userType>) => {
    return {
        type: CONS.SET_USER,
        users: users
    } as const
};

export const setCurrentPage = (page: number) => {
    return {
        type: CONS.SET_CURRENT_PAGE,
        page: page
    } as const
};

export const setTotalCount = (totalCount: number) => {
    return {
        type: CONS.SET_TOTAL_COUNT,
        totalCount: totalCount
    } as const
};
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: CONS.TOGGLE_IS_FETCHING,
        isFetching
    } as const
};

export const toggleFollowingInProgress = (isFetching: boolean, userId: string) => {
    return {
        type: CONS.TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId: userId
    } as const
};

let initialState: allUsersType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

// export type UsersPageActionType =
//     ReturnType<typeof FollowAC> | ReturnType<typeof UnFollowAC> | ReturnType<typeof setUserAC>


const usersReducer = (state: allUsersType = initialState, action: ActionsType) => {
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
            return {...state, users: [...action.users]};
        }
        case CONS.SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.page
            }
        }
        case CONS.SET_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case CONS.TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case CONS.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                // диспатчим значение true или false в зависимости от значения фетчинга
                followingInProgress: action.isFetching
                    // если фетчинг true - добавляем в массив followingInProgress айди пользователя
                    ? [...state.followingInProgress, action.userId]
                    // если фетчинг false - удаляем из массива айди пользователя
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
};

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUser(data.items));
                dispatch(setTotalCount(data.totalCount));
            })
    }
};

export const follow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId)) ;
        UsersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(AcceptFollow(userId));
                }
                toggleFollowingInProgress(false, userId);
            })
    }
};

export const unFollow = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId)) ;
        UsersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(AcceptUnFollow(userId));
                }
                dispatch(toggleFollowingInProgress(false, userId)) ;
            })
    }
};

export default usersReducer;