import React from "react";
import s from './FriendListElement.module.css'

type FriendListElementType = {
    urlLink: string,
    nickName: string,
    id: string
}

const FriendListElement: React.FC<FriendListElementType> = ({urlLink, nickName, id}) => {
    return (
        <li className={s.friendListElement} key={id}>
            <div className={s.friendListElement__img}
                 style={
                     {backgroundImage: `url(${urlLink})`}
                 }></div>
            <span className={s.friendListElement__nickName}>{nickName}</span>
        </li>
    )
}

export default FriendListElement