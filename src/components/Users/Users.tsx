import React from 'react';
import s from './Users.module.css'
import {allUsersType, userType} from '../../redux/users-reducer';


type usersType = {
    usersPage: allUsersType
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: []) => void
}

const Users: React.FC<usersType> = ({usersPage, follow, unFollow, setUsers}) => {
    return (
        <div>
            {
                usersPage.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <div>
                                        <img src={u.photoUrl} alt=""/></div>
                                    </div>
                                    <div>
                                        {u.followed ? <button onClick={() => {follow(u.id)}}>Follow</button> : <button onClick={() => {unFollow(u.id)}}>Unfollow</button>}
                                    </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Users