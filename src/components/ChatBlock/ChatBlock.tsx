import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from './chatblock.module.css';
import {ActionsType} from "../../redux/state";


type chatType = {
    addPost: () => void;
    updatePost: (text: string) => void;
    newPostText: string
    dispatch: (action: ActionsType) => void
};


const ChatBlock: React.FC<chatType> = ({addPost, newPostText, updatePost, dispatch}) => {

    const textareaRef = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        dispatch({type: 'ADD-POST'})
    };
    const textAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // if (textareaRef.current) {
        //     updatePost(textareaRef.current?.value)
        // }
        // updatePost(e.currentTarget.value)
        dispatch({type: "UPDATE-NEW-POST-TEXT", newText: `${e.currentTarget.value}`})

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