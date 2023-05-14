import todoliststyles from "./TodoList.module.css"

import Todo from "./Todo"

function TodoList(props) {
  const { todos } = props
  console.log(todos)
  return (
    <div className={todoliststyles.todolist}>
      {todos.map(todo => (
        <Todo text={todo.text} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
