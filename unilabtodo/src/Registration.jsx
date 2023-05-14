import { useState, useEffect } from "react"
import styles from "./Registration.module.css"

function Registration() {
  const [image, setImage] = useState(null)

  //add uploaded image from "input type=file" to localstorage
  //add also to state to use in the same page
  function handleImageChange(event) {
    const reader = new FileReader()
    reader.onload = function (event) {
      const base64 = event.target.result
      setImage(base64)
      localStorage.setItem("uploadedImage", base64)
    }
    reader.readAsDataURL(event.target.files[0])
  }

  useEffect(() => {
    const base64 = localStorage.getItem("uploadedImage")
    if (base64) {
      setImage(base64)
    }
  }, [])

  //add name from input to localstorage
  function submitHandler(event) {
    event.preventDefault()
    const inputValue = event.target.value
    localStorage.setItem("inputValue", inputValue)
  }

  return (
    <>
      <form onChange={submitHandler} onSubmit={() => <Redirect to="/account" />} action="/account" className={styles.form}>
        <h1>Get Started</h1>
        <div className={styles.photoUploadArea}>
          <span>add a photo</span>
          <input
            onChange={handleImageChange}
            type="file"
            className={styles.photoUpload}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              objectFit: "cover"
            }}
          ></input>
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
