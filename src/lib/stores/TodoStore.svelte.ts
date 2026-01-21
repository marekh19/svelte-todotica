import type { Todo, TodoFilter } from '$lib/types'

const STORE_KEY = 'todos'

export class TodoStore {
	todos = $state<Todo[]>([])
	activeFilter = $state<TodoFilter>('all')

	constructor() {
		this.loadFromStorage()
	}

	completedCount = $derived(this.todos.filter((todo) => todo.isDone).length)

	filteredTodos = $derived.by(() => {
		switch (this.activeFilter) {
			case 'todo':
				return this.todos.filter((todo) => !todo.isDone)
			case 'done':
				return this.todos.filter((todo) => todo.isDone)
			default:
				return this.todos
		}
	})

	get hasTodos() {
		return this.todos.length > 0
	}

	addTodo = (title: string) => {
		this.todos.push({
			id: crypto.randomUUID(),
			title,
			isDone: false
		})
		this.saveToStorage()
	}

	toggleTodo = (id: string) => {
		const todo = this.todos.find((todo) => todo.id === id)
		if (todo) todo.isDone = !todo.isDone
		this.saveToStorage()
	}

	deleteTodo = (id: string) => {
		this.todos = this.todos.filter((todo) => todo.id !== id)
		this.saveToStorage()
	}

	setFilter = (filter: TodoFilter) => {
		this.activeFilter = filter
	}

	private loadFromStorage() {
		if (typeof window === 'undefined') return

		try {
			const stored = localStorage.getItem(STORE_KEY)
			if (stored) {
				const parsedTodos = JSON.parse(stored)
				this.todos = parsedTodos
			}
		} catch (err) {
			console.error('Failed to load todos from localStorage:', err)
		}
	}

	private saveToStorage() {
		if (typeof window === 'undefined') return

		try {
			localStorage.setItem(STORE_KEY, JSON.stringify(this.todos))
		} catch (err) {
			console.error('Failed to save todos to localStorage:', err)
		}
	}
}
