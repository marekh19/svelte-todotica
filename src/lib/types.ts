export type Todo = {
	id: string
	title: string
	isDone: boolean
}

export type TodoFilter = 'all' | 'todo' | 'done'
