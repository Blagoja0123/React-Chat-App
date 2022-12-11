import React from 'react'
import Input from './Input'
import Messages from './Messages'
import img from '../img/generic.png'
const Chat = () => {
  return (
    <div className="chat">
        <div className="chatInfo">
            <div className="imageContainer">
              <img src={img} alt="no image" />
            </div>
            <span>John Doe</span>
            <div className="chatIcons">
                <i className="fa-solid fa-video"></i>
                <i className="fa-sharp fa-solid fa-user-plus"></i>
                <i className="fa-sharp fa-solid fa-circle-info"></i>
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat