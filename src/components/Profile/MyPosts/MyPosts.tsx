import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={classes.content__comment}>
      <Post text={'Привет'} />
      <Post text={'Пока'} />
      <Post text={'Привет'} />
      <Post text={'Пока'} />
      <Post text={'Привет'} />
      <Post text={'Пока'} />
    </div>
  );
};

export default MyPosts;
