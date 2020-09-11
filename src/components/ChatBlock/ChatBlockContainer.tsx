import React, {ChangeEvent, ChangeEventHandler} from "react";
import {ActionsType} from "../../redux/store";
import { addPostAC, changeNewTextAC } from "../../redux/profile-reducer";
import ChatBlock from "./ChatBlock";


type chatType = {
    newPostText: string
    dispatch: (action: ActionsType) => void
};


const ChatBlockContainer: React.FC<chatType> = ({newPostText,dispatch}) => {

    const addPostHandler = () => {
        dispatch(addPostAC())
    };

    const textAreaChangeHandler = (text: string) => {
        dispatch(changeNewTextAC(text))
    };

    return <ChatBlock addPost={addPostHandler} textAreaChange={textAreaChangeHandler} newPostText={newPostText}/>
};

export default ChatBlockContainer