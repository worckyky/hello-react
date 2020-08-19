import React from 'react';
import classes from "../Profile.module.css";


const ProfileInfo = () => {
    return (
        <>
            <img src="https://clck.ru/Mr77z" alt=""/>
            <div className={classes.content__description_text}>
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