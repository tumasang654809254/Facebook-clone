import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css"
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';


function Login() {
  const [state, dispatch] = useStateValue()
  
  const signIn = ()=>{
    //Sign In
    auth
    .signInWithPopup(provider)
    .then((result) =>{

      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    })
    .catch((error)=> alert(error.message));
  };

  return (
    <div className='login'>
        <div className='login__logo'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
            alt=''
          />
           <h2>Facebook</h2>
        </div>
        
        <Button  variant="contained" type='submit' onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login