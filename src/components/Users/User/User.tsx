import React from 'react'
import s from './User.module.css'
import {NavLink} from "react-router-dom";


type usersType = {
    userID: string
    followingInProgress: (null | string)[]
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    userPhotoSmall: string
    userName: string
    userStatus: string
    userFollowed: boolean
    userPhotoImage: string
}


const User: React.FC<usersType> = (
    {
        userID,
        follow,
        unFollow,
        followingInProgress,
        userPhotoSmall,
        userPhotoImage,
        userName,
        userStatus,
        userFollowed,
    }
) => {


    return (
        <div key={userID} className={s.users__container}>
                            <span>
                                <div>
                                    <div>
                                        <NavLink to={`/profile/${userID}`}>
                                            <img src={userPhotoSmall === null ? userPhotoImage : userPhotoSmall}
                                                 alt=""/>
                                         </NavLink>
                                    </div>
                                    </div>
                                    <div>
                                        {!userFollowed
                                            ? <button disabled={followingInProgress.some(id => id === userID)}
                                                      onClick={() => {
                                                          follow(userID)
                                                      }}>Follow</button>
                                            : <button disabled={followingInProgress.some(id => id === userID)}
                                                      onClick={() => {
                                                          unFollow(userID)
                                                      }}>Unfollow</button>}
                                    </div>
                            </span>
            <span>
                                <span>
                                    <div>{userName}</div>
                                    <div>{userStatus}</div>
                                </span>
                                <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
                            </span>
        </div>

    )
};

export default User;