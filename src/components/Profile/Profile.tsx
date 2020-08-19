import React, {useState} from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChatBlock from "../ChatBlock/ChatBlock";
import {v1} from 'uuid';
import {profilePageType} from "../../redux/state";

type ProfileType = {
    profile: profilePageType
    addPost: (postText: string) => void;
}

const Profile: React.FC<ProfileType> = ({profile, addPost}) => {

    // const [post, setPost] = useState (profile.postData);
    // const [textArea, setTextArea] = useState<string>('');
    //
    // const addPost = () => {
    //     setPost([
    //         {
    //             id: v1(),
    //             message: textArea,
    //             likesCount: 12
    //         },
    //         ...post
    //     ]);
    //     setTextArea('');
    // };



    return (
        <div className={classes.content}>
            <img className={classes.content__bg} src="https://clck.ru/MqoWL" alt=""/>
            <div className={classes.content__description}>
                <ProfileInfo/>
            </div>
            <ChatBlock addPost={addPost}/>
            <MyPosts postData={profile.postData}/>
        </div>
    );
};

export default Profile;
