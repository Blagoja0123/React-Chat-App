import React from 'react'
import img from "../img/generic.png"
const Message = () => {
  return (
    <div className='messageWrapper'>
      <div className="imageContainer">
        <img src={img} alt="" />
      </div>
      <div className="messageBox">
        <p className="message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dolorum nobis fugiat animi facere rem labore. Molestias accusantium maxime blanditiis iusto, quidem asperiores temporibus quibusdam nihil, perspiciatis ducimus, eum autem.
        </p>
      </div>
    </div>
  )
}

export default Message