import React from 'react'
import "./Widjets.css";

function Widjets() {
  return (
    <div className='widjets'>
        <iframe
        title='Facebook'
         src="https://developers.facebook.com/docs/plugins/page-plugin/"
         width='300'
         height ='50%'
         scrolling='no'
         frameBorder='no'
         allowtransparency='no'
         allow='encrypted-media'
         style={{border: "none", overflow:"hidden", marginLeft:"150px"}}>

         </iframe>
    </div>
  )
}

export default Widjets