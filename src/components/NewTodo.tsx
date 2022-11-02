import React, { useRef } from 'react'

import '../NewTodo.css'

interface TodoSubmitProps {
	onAddTodo: (text: string) => void
}

const NewTodo: React.FC<TodoSubmitProps> = ({ onAddTodo }) => {
	const textInputRef = useRef<HTMLInputElement>(null)

	const todoSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		const eneteredText = textInputRef.current!.value
		onAddTodo(eneteredText)
	}

	return (
		<>
			<form onSubmit={todoSubmitHandler}>
				<h1>To-Do List</h1>
				<div className="form-control">
					<input
						type="text"
						id="todo-text"
						ref={textInputRef}
						placeholder="Type todo here"
					/>
				</div>
				<button type="submit">ADD TODO</button>
			</form>
		</>
	)
}

export default NewTodo
