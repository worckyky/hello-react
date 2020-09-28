import React from 'react';
import s from './Users.module.css'
import {userType} from '../../redux/users-reducer';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

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
}


class Users extends React.Component<usersType> {

    componentDidMount(): void {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }


    onPageChanged = (pageNumber: number) => {
        this.props.setPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const {follow, unFollow, users, totalUsersCount, pageSize, currentPage} = this.props;

        let pagesCount: number = Math.ceil(totalUsersCount / pageSize);


        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {
                        pages.map(p => {
                            return <span className={currentPage === p ? s.selected_page : ''} onClick={() =>
                                {
                                    this.onPageChanged(p)
                                }
                            }>{p}</span>
                        })
                    }
                </div>

                {
                    users.map(u => {
                        return (
                            <div key={u.id} className={s.users__container}>
                            <span>
                                <div>
                                    <div>
                                        <img src={!u.photo?.small ? userPhoto : u.photo.small}
                                             alt=""/></div>
                                    </div>
                                    <div>
                                        {!u.followed ? <button onClick={() => {
                                            follow(u.id)
                                        }}>Follow</button> : <button onClick={() => {
                                            unFollow(u.id)
                                        }}>Unfollow</button>}
                                    </div>
                            </span>
                                <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
                            </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}


export default Users