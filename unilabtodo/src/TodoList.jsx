import React from "react"
import Todo from "./Todo"

function TodoList(props) {
  const { todos } = props
  console.log(todos)
  return (
    <div>
      {todos.map(todo => (
        <Todo text={todo.text} key={todo.id} />
      ))}

      <p>someth</p>
    </div>
  )
}

export default TodoList
