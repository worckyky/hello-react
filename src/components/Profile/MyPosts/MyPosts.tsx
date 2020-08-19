import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import {postDataType} from "../../../redux/state";

type MyPostsType = {
  postData: Array<postDataType>
}

const MyPosts: React.FC<MyPostsType> = ({postData}) => {
  return (
    <div className={classes.content__comment}>
        {postData.map(post => {
            return <Post text={post.message} key={post.id}/>
        })}
    </div>
  );
};

export default MyPosts;
