import React from 'react'
import Friends from './Friends'
import UserTab from './UserTab'
import "../style.scss"
import SearchBar from './SearchBar'
const SideBar = () => {
  return (
    <nav className="sideBarContainer">
        <section className='userTabWrapper'>
            <UserTab/>
        </section>
        <section className="searchBar">
          <SearchBar/>
        </section>
        <section className='friendTabWrapper'>
          <Friends/>
        </section>
    </nav>
  )
}

export default SideBar