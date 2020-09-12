import React, {useState} from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChatBlockContainer from "../ChatBlock/ChatBlockContainer";
import {profilePageType, ActionsType} from "../../redux/store";

// type ProfileType = {
//     profile: profilePageType
//     newPostText: string
//     dispatch: (action: ActionsType) => void
// }

const Profile= () => {

    return (
        <div className={classes.content}>
            <img className={classes.content__bg} src="https://clck.ru/MqoWL" alt=""/>
            <div className={classes.content__description}>
                <ProfileInfo/>
            </div>
            <ChatBlockContainer/>
            <MyPosts postData={profile.postData}/>
        </div>
    );
};
export default Profile;
