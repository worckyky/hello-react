import React, {Dispatch} from 'react';
import {connect} from "react-redux";
import {
    Follow,
    UnFollow,
    setUser,
    userType,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
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
    Follow: (userID: string) => void
    UnFollow: (userID: string) => void
    setUser: (users: Array<userType>) => void
    setCurrentPage: (page: number) => void
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
                this.props.setUser(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items);
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
                Follow={this.props.Follow}
                UnFollow={this.props.UnFollow}
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


const UsersContainer = connect(mapStateToProps,
    {
        Follow,
        UnFollow,
        setUser,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
    })(InnerUsersContainer);

export default UsersContainer
