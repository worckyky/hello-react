import React, {Dispatch} from 'react';
import {connect} from "react-redux";
import {
    FollowAC,
    UnFollowAC,
    setUserAC,
    userType,
    setCurrentPageAC,
    setTotalCountAC,
    toggleIsFetchingAC
} from '../../redux/users-reducer';
import {ActionsType, RootStateType} from "../../redux/store";
import axios from "axios";
import Users from "./Users";
import loader from '../../img/loaders/loader.gif'

type usersType = {
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<userType>) => void
    setPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}


class InnerUsersContainer extends React.Component<usersType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            })
    }

    render() {
        return (

        <>
            {this.props.isFetching ? <img src={loader} alt=""/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                isFetching={this.props.isFetching}
            />
        </>)
    }
}


let mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setUsers: (users: Array<userType>) => {
            dispatch(setUserAC(users));
        },
        setPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(InnerUsersContainer);

export default UsersContainer
