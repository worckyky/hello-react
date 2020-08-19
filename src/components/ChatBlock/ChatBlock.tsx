import React, {ChangeEvent} from "react";
import classes from './chatblock.module.css';


type chatType = {
    addPost: (postText: string) => void;
};


const ChatBlock: React.FC<chatType> = ({addPost}) => {

    const textareaRef = React.createRef<HTMLTextAreaElement>();

    // const handlerInputData = (event: any) => {
    //     setTextAreaValue(event.currentTarget.value);
    // };

    const addPostHandler = () => {
        if (textareaRef.current) {
            addPost(textareaRef.current?.value)
        }
    }

    return (
        <div className={classes.content__chat}>
            <h2>My posts</h2>
            <textarea name=""
                      id=""
                      cols={30}
                      rows={10}
                      placeholder={'Set your data'}
                      ref={textareaRef}>
            </textarea>
            <button onClick={addPostHandler}>Send</button>
        </div>
    )
};

export default ChatBlock