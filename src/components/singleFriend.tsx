import React from 'react'
import img from "../img/generic.png"

const SingleFriend = () => {
  return (
    <div className='userTabContainer'>
      <div className='imageContainer'>
        <img src={img} alt='no img'/>
      </div>
        <span>John.Doe</span>
    </div>
  )
}

export default SingleFriend