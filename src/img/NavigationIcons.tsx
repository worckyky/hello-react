import React from 'react'
import {ReactComponent as Profile} from "./icons/Navigation/ic_profile_24.svg";
import {ReactComponent as Message} from "./icons/Navigation/ic_message_24.svg";
import {ReactComponent as Settings} from "./icons/Navigation/ic_settings_24.svg";
import {ReactComponent as News} from "./icons/Navigation/ic_news_24.svg";
import {ReactComponent as Music} from "./icons/Navigation/ic_music_24.svg";


type IconsType = {
    [key: string]: any
}


const Icons: IconsType = {
    Profile: <Profile/>,
    Settings: <Settings/>,
    News: <News/>,
    Music: <Music/>,
    Message: <Message/>,
}

export default Icons;