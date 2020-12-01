import React from 'react';
import classes from "../Profile.module.css";
import { profileType } from '../../../redux/profile-reducer';
import loader from '../../../img/loaders/loader.gif'
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks';


type ProfileInfoType = {
    profileInformation: profileType | null,
    status: string,
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoType> = ({profileInformation,status,updateStatus}) => {
    if (!profileInformation) {
        return (
            <>
                <img src={loader} alt=""/>
            </>
        )
    }

    return (
        <>
            <img src={profileInformation?.photos.large === null ? loader : profileInformation?.photos.large} alt=""/>
            <div className={classes.content__description_text}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <h2>Dmitry K</h2>
                <p>Date of Birth: 2 january</p>
                <p>City: Minsk</p>
                <p>Education: BSU'11</p>
                <p>Web Site: https://it-kamasutra.com</p>
            </div>
        </>
    )
};


export default ProfileInfo