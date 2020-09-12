import React, { Dispatch } from "react";
import { changeNewTextAC, addPostAC } from "../../redux/profile-reducer";
import ChatBlock from "./ChatBlock";
import {connect} from 'react-redux'
import {ActionsType, profilePageType} from "../../redux/store";


let mapStateToProps = (state: profilePageType) => {
    return {
        newPostText: state.postText
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        addPost: ()  =>  {
            dispatch(addPostAC())
        },
        textAreaChangeHandler: (text: string) => {
            dispatch(changeNewTextAC(text))
        }

    }
}

const ChatBlockContainer = connect(mapStateToProps, mapDispatchToProps)(ChatBlock);

export default ChatBlockContainer