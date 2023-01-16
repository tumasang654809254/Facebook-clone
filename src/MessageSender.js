import { Avatar } from '@mui/material';
import React from 'react';
import './MessageSender.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import { PhotoLibrary } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import db from "./firebase";




function MessageSender() {
  const [{user}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageurl, setImageurl] = useState("");

  const handleSubmit =(e)=>{
    //Is preventing the default behaviour
    e.preventDefault()
    //some cleaver db stuff
    db.collection("posts").add({
      message: input,
      timestamp: db.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageurl,
    });

    setInput("");
    setImageurl("");
  }


  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL}/>
        <form>
          <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
            className='messageSender__input'
           placeholder={`Whats on your mind, ${user.displayName}?`}
          />

          <input 
          value={imageurl}
          onChange={(e) => setImageurl(e.target.value)}
          placeholder="Image url (Optional)"/>

          <button onClick={handleSubmit} type="submit">Hidden button</button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{color: 'red'}}/>
          <h3>Live video</h3>
        </div>

        <div className='messageSender__option'>
          <PhotoLibrary style={{color: 'green'}}/>
          <h3>Photo/Video</h3>
        </div>

        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{color: 'yellow'}}/>
          <h3>Feeling/Activity</h3>
        </div>

      </div>
    </div>
  )
}

export default MessageSender