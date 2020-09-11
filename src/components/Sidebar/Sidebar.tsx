import React from 'react';
import Navigation from "./Navigation/Navigation";
import {sideBarType} from "../../redux/store"
import Friends from "./Friends/Friends";

type SidebarBlockType = {
    sidebar: sideBarType
}
const Sidebar: React.FC<SidebarBlockType> = ({sidebar}) => {
    return (
        <div>
            <Navigation Navigation={sidebar.navigation}/>
            <Friends Friends={sidebar.friends}/>
        </div>
    );
};

export default Sidebar;
