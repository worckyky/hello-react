import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {sideBarType} from "../../redux/store";


let mapStateToProps = (state: sideBarType) => {
    return {
        sidebar: state
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
