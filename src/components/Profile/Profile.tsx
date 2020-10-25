import React, {ReactNode} from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ChatBlockContainer from "../ChatBlock/ChatBlockContainer";
import MyPostsContainer from "./MyPosts/MyPostsСontainer";
import { profileType } from '../../redux/profile-reducer';


type ProfileType = {
    profile: profileType | null
    status: string
    updateStatus: (status: string) => void
}


const Profile: React.FC<ProfileType> = ({profile,status,updateStatus}) => {


    return (
        <div className={classes.content}>
            <img className={classes.content__bg} src="https://clck.ru/MqoWL" alt=""/>
            <div className={classes.content__description}>
                <ProfileInfo profileInformation={profile} status={status} updateStatus={updateStatus}/>
            </div>
            <ChatBlockContainer/>
            <MyPostsContainer/>
        </div>
    );
};
export default Profile;
