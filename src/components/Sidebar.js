import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubsciptionsIcon from "@material-ui/icons/Subscriptions"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubsciptionsIcon} title="Subscriptions"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
        </div>
    )
}

export default Sidebar
