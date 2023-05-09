import React from "react"

function Todo(props) {
  const { text } = props
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default Todo
