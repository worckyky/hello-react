import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unFollow,
    setUser,
    userType,
    setCurrentPage,
    setTotalCount,
    getUsers
} from '../../redux/users-reducer';
import {RootStateType} from "../../redux/store";
import Users from "./Users";
import loader from '../../img/loaders/loader.gif';

type usersType = {
    users: Array<userType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUser: (users: Array<userType>) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching: boolean
    followingInProgress: (null | string)[]
    getUsers: (currentPage: number, pageSize: number) => void
    isAuth: boolean
}

class InnerUsersContainer extends React.Component<usersType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };

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
                    followingInProgress={this.props.followingInProgress}
                    isAuth={this.props.isAuth}
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
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
};


export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUser,
        setCurrentPage,
        setTotalCount,
        getUsers,
    })(InnerUsersContainer);
