import React, {useState} from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChatBlock from "../ChatBlock/ChatBlock";
import {profilePageType} from "../../redux/state";

type ProfileType = {
    profile: profilePageType
    addPost: () => void
    updatePost: (text: string) => void
    newPostText: string
}

const Profile: React.FC<ProfileType> = ({profile, addPost, newPostText, updatePost}) => {


    return (
        <div className={classes.content}>
            <img className={classes.content__bg} src="https://clck.ru/MqoWL" alt=""/>
            <div className={classes.content__description}>
                <ProfileInfo/>
            </div>
            <ChatBlock addPost={addPost} newPostText={newPostText} updatePost={updatePost}/>
            <MyPosts postData={profile.postData}/>
        </div>
    );
};

export default Profile;
