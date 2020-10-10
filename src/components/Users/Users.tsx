import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {v1} from 'uuid'

type usersType = {
    users: Array<userType>
    pageSize: number,
    isFetching: boolean,
    followingInProgress: [],
    totalUsersCount: number,
    currentPage: number
    Follow: (userID: string) => void
    UnFollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void
}


const Users: React.FC<usersType> = (
    {
        pageSize,
        totalUsersCount,
        currentPage,
        Follow,
        UnFollow,
        onPageChanged,
        users,
        toggleFollowingInProgress,
        followingInProgress
    }
) => {


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
                        return <span className={currentPage === p ? s.selected_page : ''}
                                     onClick={() => {
                                         onPageChanged(p)
                                     }}
                                     key={v1()}
                        >{p}</span>
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
                                        <NavLink to={`/profile/${u.id}`}>
                                            <img src={u.photos.small === null ? userPhoto : u.photos.small}
                                                 alt=""/>
                                         </NavLink>
                                    </div>
                                    </div>
                                    <div>
                                        {!u.followed ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                            toggleFollowingInProgress(true, u.id);
                                            axios
                                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '173391df-6c49-4e95-8ea9-b1621809323a'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        Follow(u.id);
                                                    }
                                                    toggleFollowingInProgress(false, u.id);
                                                })
                                        }}>Follow</button> : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                            toggleFollowingInProgress(true, u.id);
                                            axios
                                                .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '173391df-6c49-4e95-8ea9-b1621809323a'
                                                    }
                                                })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        UnFollow(u.id);
                                                    }
                                                    toggleFollowingInProgress(false, u.id);
                                                })
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
};

export default Users;