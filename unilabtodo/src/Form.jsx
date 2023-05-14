import stylesform from "./Form.module.css"

function Form(props) {
  const { setInputText, inputText, todos, setTodos } = props

  function handleSubmit(e) {
    e.preventDefault()
    console.log("dasubmitda")
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    setInputText("")
  }

  function handleInput(e) {
    setInputText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className={stylesform.form}>
      <input value={inputText} onChange={handleInput} type="text" placeholder="my task" />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form
