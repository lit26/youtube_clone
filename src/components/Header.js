import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import HiddenSidebar from "./HiddenSidebar"

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    const [isShow, setShow] = useState(true);

    const toggleClass = () => setShow(!isShow);

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon 
                    className={`header__menu ${isShow ? "show_menu":""}`} onClick={toggleClass}/>
                <Link to='/'>
                    <img className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
                        alt=""
                    />
                </Link>
            </div>
            {isShow &&
                <div className="header__hiddenmenu">
                    <HiddenSidebar />
                </div>
            }
            {isShow &&
                <div className="header__hiddenoverlay">
                </div>
            }
            <div className="header__input">
                <input 
                    value={inputSearch} 
                    onChange={e =>setInputSearch(e.target.value)}
                    placeholder="Search" 
                    type="text" 
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton"/>
                </Link>
                
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon"/> 
                <AppsIcon className="header__icon"/> 
                <NotificationsIcon className="header__icon"/> 
                <Avatar/> 
            </div>
        </div>
    )
}

export default Header
