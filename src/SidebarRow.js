import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@mui/material';
import userEvent from '@testing-library/user-event';
import { useStateValue } from './StateProvider';


function SidebarRow({src, Icon, title }) {
const [{user}, dispatch] = useStateValue()


  return (
    <div className='sidebarRow'>
        {src && <Avatar src={user.photoURL}/>}
        {Icon && <Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow