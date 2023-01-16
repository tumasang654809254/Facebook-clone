import React from 'react';
import "./StoryReel.css";
import Story from './Story';
import { useStateValue } from './StateProvider';


function StoryReel() {
const [{user}, dispatch] = useStateValue()

  return (
    <div className='storyReel'>
      <Story 
        image="https://images.unsplash.com/photo-1666858094442-6b2a6592bdf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNTM2Nw&ixlib=rb-4.0.3&q=80&w=1080"

        profileSrc={user.photoURL}
        title="Tumasang Ndeh"
        />

     <Story 
        image="https://images.unsplash.com/photo-1668341686862-c8199b0d8424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNTQwMA&ixlib=rb-4.0.3&q=80&w=1080"

        profileSrc="https://images.unsplash.com/photo-1667321676536-a39e9e88efaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNTk0OQ&ixlib=rb-4.0.3&q=80&w=1080"

        title="Nicolas Ndeh"
        />

      <Story 
        image="https://images.unsplash.com/photo-1666581862001-48c22e9a7a14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNTQzMg&ixlib=rb-4.0.3&q=80&w=1080"

        profileSrc="https://images.unsplash.com/photo-1667235354789-118478b3d607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNjA2NA&ixlib=rb-4.0.3&q=80&w=1080"

        title="Nsoh Ndeh"
        />

      <Story 
        image="https://images.unsplash.com/photo-1667235354789-118478b3d607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNjA2NA&ixlib=rb-4.0.3&q=80&w=1080"

        profileSrc="https://images.unsplash.com/photo-1666805949362-408b830b0b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNjA5Ng&ixlib=rb-4.0.3&q=80&w=1080"

        title="Brian Ndeh"
        />

      <Story 
        image="https://images.unsplash.com/photo-1667235354789-118478b3d607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNjA2NA&ixlib=rb-4.0.3&q=80&w=1080"

        profileSrc="https://images.unsplash.com/photo-1667212805718-771e5ebdd8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTIxNTk5OA&ixlib=rb-4.0.3&q=80&w=1080"

        title="Miria Ndeh"
        />


        
    </div>
  )
}

export default StoryReel