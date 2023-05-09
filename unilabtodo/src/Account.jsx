import React, { useState } from "react"
import stylesAccount from "./Account.module.css"
import Header from "./Header"
import TodoList from "./TodoList"
import Form from "./Form"

function Account() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className={stylesAccount.accountPage}>
      <Header />
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Account
