import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from './chatblock.module.css';
import {ActionsType, addPostAC, changeNewTextAC} from "../../redux/state";


type chatType = {
    newPostText: string
    dispatch: (action: ActionsType) => void
};


const ChatBlock: React.FC<chatType> = ({newPostText,dispatch}) => {

    const textareaRef = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        dispatch(addPostAC())
    };
    const textAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeNewTextAC(e.currentTarget.value))
    };

    return (
        <div className={classes.content__chat}>
            <h2>My posts</h2>
            <textarea name=""
                      id=""
                      cols={30}
                      rows={10}
                      placeholder={'Set your data'}
                      ref={textareaRef}
                      onChange={textAreaChangeHandler}
                      value={newPostText}
            />
            <button onClick={addPostHandler}>Send</button>
        </div>
    )
};

export default ChatBlock