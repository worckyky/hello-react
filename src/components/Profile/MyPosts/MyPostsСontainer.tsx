import React from 'react';
import {RootStateType} from "../../../redux/store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


// const MyPostsContainer: React.FC<MyPostsType> = ({postData}) => {
//   return (
//     <div className={classes.content__comment}>
//         {postData.map(post => {
//             return <Post text={post.message} key={post.id}/>
//         })}
//     </div>
//   );
// };

let mapStateToProps = (state: RootStateType) => {
  return {
    postData: state.profilePage.postData
  }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);


export default MyPostsContainer;
