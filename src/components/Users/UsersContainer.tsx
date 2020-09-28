import React, {Dispatch} from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {FollowAC, UnFollowAC, setUserAC, userType, setCurrentPageAC, setTotalCountAC} from '../../redux/users-reducer';
import {ActionsType, RootStateType} from "../../redux/store";

let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        follow: (userID: string) => {
            dispatch(FollowAC(userID));
        },
        unFollow: (userID: string) => {
            dispatch(UnFollowAC(userID));
        },
        setUsers: (users:  Array<userType>) => {
            dispatch(setUserAC(users));
        },
        setPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer
