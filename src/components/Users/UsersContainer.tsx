import React from 'react';
import {connect} from "react-redux";
import {
    Follow,
    UnFollow,
    setUser,
    userType,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching, toggleFollowingInProgress, getUsersThunkCreator
} from '../../redux/users-reducer';
import {RootStateType} from "../../redux/store";
import Users from "./Users";
import loader from '../../img/loaders/loader.gif'
import {UsersAPI} from "../../api/api";

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
    followingInProgress: []
    toggleFollowingInProgress: (isFetching: boolean , userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
// (currentPage: number, pageSize: number) => (dispatch: (action: ActionsType) => void ) => void

class InnerUsersContainer extends React.Component<usersType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUser(data.items);
                this.props.toggleIsFetching(false);
            })
    };

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
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
        toggleFollowingInProgress,
        getUsers: getUsersThunkCreator,
    })(InnerUsersContainer);

export default UsersContainer
