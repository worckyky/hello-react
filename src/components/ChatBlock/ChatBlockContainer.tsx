import React, { Dispatch } from "react";
import { addPostAC } from "../../redux/profile-reducer";
import ChatBlock from "./ChatBlock";
import {connect} from 'react-redux'
import {ActionsType} from "../../redux/store";



let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        addPost: (value: string)  =>  {
            dispatch(addPostAC(value))
        }
    }
};

const ChatBlockContainer = connect(mapDispatchToProps)(ChatBlock);

export default ChatBlockContainer