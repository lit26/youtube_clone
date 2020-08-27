import React from 'react';
import './HiddenSidebar.css';
import HiddenSidebarRow from './HiddenSidebarRow';

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubsciptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function HiddenSidebar() {
    return (
        <div className="hiddenSidebar">
            <HiddenSidebarRow selected Icon={HomeIcon} title="Home"/>
            <HiddenSidebarRow Icon={WhatshotIcon} title="Trending"/>
            <HiddenSidebarRow Icon={SubsciptionsIcon} title="Subscription"/>
            <hr />
            <HiddenSidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <HiddenSidebarRow Icon={HistoryIcon} title="History"/>
            <HiddenSidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
            <HiddenSidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked video"/>
            <HiddenSidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
            <hr />
        </div>
    )
}

export default HiddenSidebar
