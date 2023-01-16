import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StateProvider, { useStateValue } from './StateProvider';





function Header() {
    //we pass the user information through the app
    const [{user}, dispatch] = useStateValue()

  return (
  <div className='header'>
    <div className='header__left'>
        <img 
             src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
             alt=""
             />
             <div className='header__input'>
                <SearchIcon />
                <input type="text" placeholder='search facebook'/>
             </div>
    </div>

    <div className='header__middle'>
                <div className='header__option  header__option__active'>
                    <HomeIcon fontSize='large'/>
                </div>

                <div className='header__option'>
                    <FlagIcon fontSize='large'/>
                </div>

                <div className='header__option'>
                    <FlagIcon fontSize='large'/>
                </div>

                
                <div className='header__option'>
                    <SubscriptionsIcon fontSize='large'/>
                </div>
                
                <div className='header__option'>
                    <StorefrontIcon fontSize='large'/>
                </div>
   
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontSize='large'/>
                </div>
             </div>

             <div className='header__right'>
                <div className='header__info'>
                    <Avatar  src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon /> 
                </IconButton>
                <IconButton>
                    <ForumIcon /> 
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon /> 
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
             </div>
  </div>
  )
}

export default Header