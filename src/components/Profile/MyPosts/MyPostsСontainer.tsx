import React from 'react';
import {RootStateType} from "../../../redux/store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


let mapStateToProps = (state: RootStateType) => {
    return {
        postData: state.profilePage.postData
}
};

const MyPostsContainer = connect(mapStateToProps)(MyPosts);


export default MyPostsContainer;
