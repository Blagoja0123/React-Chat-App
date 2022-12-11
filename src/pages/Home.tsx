import React from 'react'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'

const Home = () => {
  return (
    <main>
      <div className="sideBar">
        <SideBar/>
      </div>
      <div className="mainChat">
        <Chat/>
      </div>
    </main>
  )
}

export default Home