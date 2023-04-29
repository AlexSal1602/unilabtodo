import React from "react"
import styles from "./Home.module.css"
import todoicon from "./assets/todoicon.svg"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className={styles.body}>
      <img src={todoicon} alt="todoicon" />
      <h1>Keep Track Of Daily Tasks In Life</h1>

      <Link to="/registration">
        <button>Get Started</button>
      </Link>
    </div>
  )
}

export default Home
