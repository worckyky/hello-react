import React from 'react';
import classes from './Profile.module.css';


console.log(classes)
const Profile = () => {
  return (
    <div className={classes.content}>
      <img className={classes.content__bg} src="https://clck.ru/MqoWL" alt="" />
      <div className={classes.content__description}>
        <img src="https://clck.ru/Mr77z" alt="" />
        <div className={classes.content__description_text}>
          <h2>Dmitry K</h2>
          <p>Date of Birth: 2 january</p>
          <p>City: Minsk</p>
          <p>Education: BSU'11</p>
          <p>Web Site: https://it-kamasutra.com</p>
        </div>
      </div>
      <div className={classes.content__chat}>
        <h2>My posts</h2>
        <textarea name="" id="" cols="30" rows="10" placeholder={'Set your data'}></textarea>
        <button>Send</button>
      </div>
      <div className={classes.content__comment}>
        <div className={classes.content__comment_block}>
          <div className={classes.content__comment_img}></div>
          <div className={classes.content__comment_text}>Hey, why nobody love me?</div>
        </div>
        <div className={classes.content__comment_block}>
          <div className={classes.content__comment_img}></div>
          <div className={classes.content__comment_text}>Hey, why nobody love me?</div>
        </div>
        <div className={classes.content__comment_block}>
          <div className={classes.content__comment_img}></div>
          <div className={classes.content__comment_text}>Hey, why nobody love me?</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
