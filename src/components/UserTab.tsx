import React, { useContext } from 'react'
import "../style.scss"
import img from "../img/generic.png"
import { auth } from '../firebase/firebase'
import { signOut } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
const UserTab = () => {
   const currentUser = useContext(AuthContext);
   const user = JSON.parse(JSON.stringify(currentUser));

  // console.log(temp);     
  return (
    <div className='userTabContainer'>
      <div className='imageContainer'>
        <img src={user.img} alt='no img'/>
      </div>
        <span>{user.displayName}</span>
        <button onClick={()=>signOut(auth)}>Log out</button>
    </div>
  )
}

export default UserTab