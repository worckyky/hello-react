import React from 'react';
import s from './Users.module.css'
import {allUsersType, userType} from '../../redux/users-reducer';
import {v1} from "uuid";


type usersType = {
    users:  Array<userType>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<userType>) => void
}

const Users: React.FC<usersType> = ({users, follow, unFollow, setUsers}) => {
    if (users.length === 0) {
        setUsers([{
            id: v1(),
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
            fullName: 'Kita',
            followed: true,
            status: 'im a boss',
            location: {
                city: 'Minsk',
                country: 'Russia'
            },
        }, {
            id: v1(),
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
            fullName: 'Tolya',
            followed: false,
            status: 'im a boss',
            location: {
                city: 'Minsk',
                country: 'Russia'
            },
        }, {
            id: v1(),
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
            fullName: 'Dima',
            followed: false,
            status: 'im a boss',
            location: {
                city: 'Minsk',
                country: 'Russia'
            },
        }, {
            id: v1(),
            photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
            fullName: 'Vanya',
            followed: true,
            status: 'im a boss',
            location: {
                city: 'Minsk',
                country: 'Russia'
            },
        }]);
    }

    return (
        <div>
            {
                users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <div>
                                        <img src={u.photoUrl} alt=""/></div>
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