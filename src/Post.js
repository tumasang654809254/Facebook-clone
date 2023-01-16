import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';



function Post({profilePic, image, userName, timestamp, message}) {
const [{user}, dispatch] = useStateValue()


  return (
    <div className='post'>
        <div className='post__top'>
            <Avatar src={user.photoURL} 
            className = "post__avatar"/>

            <div className='post__topInfo'>
                <h3>{user.displayName}</h3>
                <p>timestamp...</p>
            </div>
        </div>
        <div className='post__bottom'>
            <p>{message}</p>
        </div>
        <div className='post__image'>
            <img src={image} alt =""/>
        </div>

        <div className='post__options'>
            <div className='post__option'>
                <ThumbUpIcon  style={{color:'gray'}}/>
                <p>Like</p>
            </div>
            <div className='post__option'>
                <ChatBubbleOutlineIcon  style={{color:'gray'}}/>
                <p>Comments</p>
            </div>
            <div className='post__option'>
                <NearMeIcon  style={{color:'gray'}} />
                <p>Share</p>
            </div>
            <div className='post__option'>
                <AccountCircleIcon  style={{color:'gray'}}/>
                <ExpandMoreIcon  style={{color:'gray'}} />
            </div>
        </div>
    </div>
  )
}

export default Post