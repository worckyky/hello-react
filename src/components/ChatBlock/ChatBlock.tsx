import React, {ChangeEvent} from "react";
import classes from './chatblock.module.css';


type chatType = {
    addPost: () => void;
    updatePost: (text: string) => void;
    newPostText: string
};


const ChatBlock: React.FC<chatType> = ({addPost, newPostText, updatePost}) => {

    const textareaRef = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        addPost();
    };
    const textAreaChangeHandler = () => {
        if (textareaRef.current) {
            updatePost(textareaRef.current?.value)
        }
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