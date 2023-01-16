import React, { useEffect } from 'react';
import './Feed.css';
import Post from './Post';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import { useState } from 'react';
import db from "./firebase"

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    db.collection("posts")
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot)=> 
    setPosts(snapshot.docs.map((doc) => ({id: doc.id, 
      data: doc.data()})))
    );
  }, []);


  
  return (
    <div className='feed'>
          <StoryReel />
          <MessageSender />

          {posts.map((post, index)=>(
            <Post
               key={'post' + index}
               profilePic={post.data.profilePic}
               message={post.data.message}
               timestamp={post.data.timestamp}
               userName={post.data.userName}
               image={post.data.image}
            />
          ))}
    </div>
  );
}

export default Feed