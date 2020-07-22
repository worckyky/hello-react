import React from 'react';
import classes from './Post.module.css';


type RatingPropsType = {
    text: string,
}


const Post: React.FC<RatingPropsType> = (props) => {
  return (
    <div className={classes.content__comment_block}>
      <div className={classes.content__comment_img}></div>
      <div className={classes.content__comment_text}>{props.text}</div>
    </div>
  );
};

export default Post;
