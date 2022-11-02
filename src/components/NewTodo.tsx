import React, { useRef } from 'react'

interface TodoSubmitProps {
  onSubmit: Function
}

const NewTodo: React.FC<TodoSubmitProps> = ({onSubmit}) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const eneteredText = textInputRef.current!.value
    onSubmit(eneteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo