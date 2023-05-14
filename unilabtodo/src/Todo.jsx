import todostyles from "./Todo.module.css"
import trashicon from "./assets/trashmark.svg"
import checkhicon from "./assets/checkmark.svg"

function Todo(props) {
  const { text } = props
  return (
    <div className={todostyles.todo}>
      <p>{text}</p>
      <div className={todostyles.todoitemicons}>
        <img src={checkhicon} alt="checkicon" />
        <img src={trashicon} alt="trashicon" />
      </div>
    </div>
  )
}

export default Todo
