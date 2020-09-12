import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChatBlockContainer from "../ChatBlock/ChatBlockContainer";
import MyPostsContainer from "./MyPosts/MyPostsСontainer";


const Profile= () => {

    return (
        <div className={classes.content}>
            <img className={classes.content__bg} src="https://clck.ru/MqoWL" alt=""/>
            <div className={classes.content__description}>
                <ProfileInfo/>
            </div>
            <ChatBlockContainer/>
            <MyPostsContainer/>
        </div>
    );
};
export default Profile;
