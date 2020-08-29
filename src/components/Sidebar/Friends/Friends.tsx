import React from 'react'
import '../Sidebar.css'
import FriendList from "./FriendList/FriendList";
import FriendHeader from "./FriendHeader/FriendHeader";
import {allFriendsType} from "../../../redux/state";

type FriendsType = {
    Friends: allFriendsType
}

const Friends: React.FC<FriendsType> = ({Friends}) => {
    return (
        <div className={'navigation'}>
            <div>
                <FriendHeader Name={'Friends'} Count={Friends.allFriends.length}/>
                <FriendList FriendList={Friends.allFriends}/>
            </div>
            <div>
                <FriendHeader Name={'Friends online'} Count={Friends.onlineFriends.length}/>
                <FriendList FriendList={Friends.onlineFriends}/>
            </div>


        </div>
    )
}

export default Friends;