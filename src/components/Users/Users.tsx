import React from 'react';
import s from './Users.module.css'
import {userType} from '../../redux/users-reducer';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

type usersType = {
    users: Array<userType>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<userType>) => void
}

const Users: React.FC<usersType> = ({users, follow, unFollow, setUsers}) => {
    if (users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })
    }


    return (
        <div>
            {
                users.map(u => {
                    return (
                        <div key={u.id} className={s.users__container}>
                            <span>
                                <div>
                                    <div>
                                        <img src={!u.photo?.small ? userPhoto : u.photo.small }
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
};

export default Users