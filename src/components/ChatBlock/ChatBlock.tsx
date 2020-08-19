import React, {ChangeEvent} from "react";
import classes from './chatblock.module.css';


type chatType = {
    textAreaValue: string,
    setTextAreaValue: (value: string) => void,
    addPost: () => void
};



const ChatBlock: React.FC<chatType> = ({textAreaValue, setTextAreaValue, addPost}) => {

    const handlerInputData = (event: any) => {
        setTextAreaValue(event.currentTarget.value);
    };

    return (
        <div className={classes.content__chat}>
            <h2>My posts</h2>
            <textarea name="" id="" cols={30} rows={10} placeholder={'Set your data'} value={textAreaValue}
                      onChange={handlerInputData}></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    )
};

export default ChatBlock