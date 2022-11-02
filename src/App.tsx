import React, { useState } from 'react'

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'

interface Todo {
	id: string
	text: string
}

const App: React.FC = () => {
	const [todos, setTodos] = useState<Todo[]>([])

	const submitHandler = (text: string) => {
		setTodos(prev => [
			...prev,
			{ id: new Date().toISOString(), text: text },
		])
	}

  const deleteHandler = (todoId: string) => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== todoId)
    })
  }

	return (
		<div className="App">
			<NewTodo onAddTodo={submitHandler} />
			<TodoList items={todos} onDelete={deleteHandler} />
		</div>
	)
}

export default App
