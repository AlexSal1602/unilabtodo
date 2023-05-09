import React from "react"
import todoicon from "./assets/Profile.jpg"
import stylesHeader from "./Header.module.css"

function Header() {
  return (
    <div className={stylesHeader.header}>
      <div className={stylesHeader.logo}>TO DO</div>
      <div className={stylesHeader.headerProfile}>
        <h2>Your Name</h2>
        <img className={stylesHeader.profilePicture} src={todoicon} alt="Profile Picture" />
      </div>
    </div>
  )
}

export default Header
