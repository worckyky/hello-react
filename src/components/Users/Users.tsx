import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {userType} from "../../redux/users-reducer";

type usersType = {
    users: Array<userType>
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    currentPage: number
    Follow: (userID: string) => void
    UnFollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
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
                                        <img src={u.photos.small === null ? userPhoto : u.photos.small}
                                             alt=""/></div>
                                    </div>
                                    <div>
                                        {!u.followed ? <button onClick={() => {
                                            Follow(u.id)
                                        }}>Follow</button> : <button onClick={() => {
                                            UnFollow(u.id)
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