import React, { Dispatch } from "react";
import { changeNewTextAC, addPostAC } from "../../redux/profile-reducer";
import ChatBlock from "./ChatBlock";
import {connect} from 'react-redux'
import {ActionsType,  RootStateType} from "../../redux/store";


let mapStateToProps = (state: RootStateType) => {
    // return {
    //     PostText: state.profilePage.postText
    // }
};

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        addPost: (value: string)  =>  {
            dispatch(addPostAC(value))
        }
    }
};

const ChatBlockContainer = connect(mapStateToProps, mapDispatchToProps)(ChatBlock);

export default ChatBlockContainer