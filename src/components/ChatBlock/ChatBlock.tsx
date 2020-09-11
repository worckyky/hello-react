import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from './chatblock.module.css';


type chatType = {
    newPostText: string
    addPost: () => void
    textAreaChange: (text: string) => void
};


const ChatBlock: React.FC<chatType> = ({newPostText,addPost, textAreaChange}) => {

    const addPostHandler = () => {
        addPost();
    };
    const textAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        textAreaChange(e.currentTarget.value);
    };

    return (
        <div className={classes.content__chat}>
            <h2>My posts</h2>
            <textarea name=""
                      id=""
                      cols={30}
                      rows={10}
                      placeholder={'Set your data'}
                      onChange={textAreaChangeHandler}
                      value={newPostText}
            />
            <button onClick={addPostHandler}>Send</button>
        </div>
    )
};

export default ChatBlock