import React, {ReactNode} from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChatBlockContainer from "../ChatBlock/ChatBlockContainer";
import MyPostsContainer from "./MyPosts/MyPostsСontainer";
import { profileType } from '../../redux/profile-reducer';


type ProfileType = {
    profile: profileType | null
}


const Profile: React.FC<ProfileType> = ({profile}) => {
    return (
        <div className={classes.content}>
            <img className={classes.content__bg} src="https://clck.ru/MqoWL" alt=""/>
            <div className={classes.content__description}>
                <ProfileInfo profileInformation={profile}/>
            </div>
            <ChatBlockContainer/>
            <MyPostsContainer/>
        </div>
    );
};
export default Profile;
