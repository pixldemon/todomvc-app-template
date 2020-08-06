import { ref, makeReactive, useEffect } from 'cyanicjs'

export default () => {
	const todos = makeReactive({
		all: [],
		completed: []
	})
	useEffect(() => {
		todos.completed = todos.all.filter(t => t.completed)
	})

	const addTodoInputField = ref('')

	const toggleAllComplete = () => todos.all.forEach(t => t.completed = true)

	const addTodo = () => {
		if (addTodoInputField.value === '') return
		todos.all.unshift({
			text: addTodoInputField.value,
			done: false,
		})
		addTodoInputField.value = ''
	}

	
	const remove = todo => todos.all.splice(todos.all.indexOf(todo), 1)
	const clearCompleted = () => todos.all = todos.all.filter(t => !t.completed)

	return { remove, clearCompleted, toggleAllComplete, addTodo, addTodoInputField, todos }
}