import React from 'react'
import userPhoto from '../../assets/images/user.jpg'
import {userType} from "../../redux/users-reducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

type usersType = {
    users: Array<userType>
    pageSize: number,
    followingInProgress: (null | string)[],
    totalUsersCount: number,
    currentPage: number
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
}


const Users: React.FC<usersType> = (
    {
        pageSize,
        totalUsersCount,
        currentPage,
        onPageChanged,
        follow,
        unFollow,
        users,
        followingInProgress,
    }
) => {


    return (
        <div>
            <Paginator pageSize={pageSize} totalUsersCount={totalUsersCount} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>

            {
                users.map(u => {
                    return (
                        <User userID={u.id}
                              followingInProgress={followingInProgress}
                              follow={follow}
                              unFollow={unFollow}
                              userPhotoSmall={u.photos.small}
                              userName={u.name}
                              userStatus={u.status}
                              userFollowed={u.followed}
                              userPhotoImage={userPhoto}/>
                    )
                })
            }
        </div>
    )
};

export default Users;