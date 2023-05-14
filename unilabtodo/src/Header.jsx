import React from "react"
import stylesHeader from "./Header.module.css"

function Header() {
  const base64 = localStorage.getItem("uploadedImage")
  const inputValue = localStorage.getItem("inputValue")
  return (
    <div className={stylesHeader.header}>
      <div className={stylesHeader.logo}>TO DO</div>
      <div className={stylesHeader.headerProfile}>
        <h2>{inputValue}</h2>
        <img className={stylesHeader.profilePicture} src={base64} alt="Profile Picture" />
      </div>
    </div>
  )
}

export default Header
