import {RootStateType} from "./store";


export const getUsersSELECTOR = (state: RootStateType) => {
    return state.usersPage.users
};


export const getPageSizeSELECTOR = (state: RootStateType) => {
    return state.usersPage.pageSize
};


export const getTotalUsersCountSELECTOR = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
};


export const getCurrentPageSELECTOR = (state: RootStateType) => {
    return state.usersPage.currentPage
};

export const getIsFetchingSELECTOR = (state: RootStateType) => {
    return state.usersPage.isFetching
};

export const getFollowingInProgressSELECTOR = (state: RootStateType) => {
    return state.usersPage.followingInProgress
};
