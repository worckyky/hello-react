import React from 'react'
import s from './FriendList.module.css'
import FriendListElement from "./FriendListElement/FriendListElement";
import {friendType} from "../../../../redux/store";


type FriendListType = {
    FriendList: Array<friendType>
}


const FriendList: React.FC<FriendListType> = ({FriendList}) => {
    return (
        <ul className={s.friendlist}>
            {FriendList.map(friend => {
                return <FriendListElement urlLink={friend.photo} nickName={friend.name} id={friend.id}/>
            })}

        </ul>
    )
}

export default FriendList;