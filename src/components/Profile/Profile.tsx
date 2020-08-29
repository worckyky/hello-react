import React, {useState} from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChatBlock from "../ChatBlock/ChatBlock";
import {profilePageType, ActionsType} from "../../redux/state";

type ProfileType = {
    profile: profilePageType
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const Profile: React.FC<ProfileType> = ({profile, newPostText, dispatch}) => {


    return (
        <div className={classes.content}>
            <img className={classes.content__bg} src="https://clck.ru/MqoWL" alt=""/>
            <div className={classes.content__description}>
                <ProfileInfo/>
            </div>
            <ChatBlock newPostText={newPostText} dispatch={dispatch}/>
            <MyPosts postData={profile.postData}/>
        </div>
    );
};
export default Profile;
