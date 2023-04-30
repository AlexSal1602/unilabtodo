import styles from "./Registration.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function Registration() {
  const handleSubmit = e => {
    e.preventDefault()
    window.location.href = `/account`
  }
  return (
    <>
      <form onSubmit={handleSubmit} action="/" className={styles.form}>
        <h1>Get Started</h1>
        <div className={styles.photoUploadArea}>
          <span>add a photo</span>
          <input type="file" className={styles.photoUpload}></input>
        </div>
        <div className={styles.nameInputArea}>
          <span>fill in your name</span>
          <input type="text" className={styles.nameInput} name="name" placeholder="your name" />
        </div>
        <button type="submit" className={styles.registrationFormButton}>
          Sign In
        </button>
      </form>
    </>
  )
}

export default Registration
