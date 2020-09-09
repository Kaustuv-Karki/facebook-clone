import React from 'react'
import './Header.css'

// Icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ForumIcon from '@material-ui/icons/Forum';

import { Avatar, IconButton, Icon } from '@material-ui/core';

import { useStateValue } from '../../StateProvider'

const Header = () => {
    const [{user}] = useStateValue() 
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
                <div className="header__leftSearch">
                    <SearchIcon/>
                    <input placeholder="Search Facebook" />
                </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon/>
                </div>
                <div className="header__option">
                    <FlagIcon/>
                </div>
                <div className="header__option">
                    <SubscriptionsIcon/>
                </div>
                <div className="header__option">
                    <StorefrontIcon/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon/>
                </div>
            </div>
            <div className="header__right">
                <Avatar src={user?.photoURL}/>
                <h3>{user?.displayName}</h3>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header
