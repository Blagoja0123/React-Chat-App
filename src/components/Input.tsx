import React from 'react'

const Input = () => {
  return (
    <div className="input">
        <input type="text" placeholder='Say something...' name="" id="" />
        <div className="send">
            <i className="fa-solid fa-paperclip"></i>
            <input type="file" style={{display: "none"}} id="file" 
            // function
            />
            <label htmlFor="file">
                <i className="fa-solid fa-image"></i>
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input