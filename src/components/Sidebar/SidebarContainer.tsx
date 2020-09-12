import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {RootStateType} from "../../redux/store";


let mapStateToProps = (state: RootStateType) => {
    return {
        sidebar: state.sideBar
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
