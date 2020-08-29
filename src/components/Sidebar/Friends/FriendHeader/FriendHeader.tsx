import s from "./FriendHeader.module.css";
import React from "react";

type FriendHeadertype = {
    Name: string,
    Count: number
}


const FriendHeader: React.FC<FriendHeadertype> = ({Name, Count}) => {
    return (
        <div className={s.friend__header}>
            <p className={s.friend__header_text}>{Name}<span className={s.friend__header_count}>{Count}</span></p>
        </div>
    )

}
export default FriendHeader