import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

import Registration from "./Registration.jsx"
import Account from "./Account.jsx"

function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

/* ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)  */

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Main />)
