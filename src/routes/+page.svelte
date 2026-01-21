<script lang="ts">
	import AddTodo from '$lib/components/AddTodo.svelte'
	import TodoFilter from '$lib/components/TodoFilter.svelte'
	import TodoItem from '$lib/components/TodoItem.svelte'
	import { TodoStore } from '$lib/stores/TodoStore.svelte'

	const todoStore = new TodoStore()
</script>

<AddTodo onAdd={todoStore.addTodo} />
<div class="topbar">
	<small>
		{#if todoStore.hasTodos}
			Completed {todoStore.completedCount} / {todoStore.todos.length}
		{:else}
			Start by adding some todos.
		{/if}
	</small>
	{#if todoStore.hasTodos}
		<TodoFilter
			activeFilter={todoStore.activeFilter}
			onFilterChange={todoStore.setFilter}
		/>
	{/if}
</div>
<div>
	{#each todoStore.filteredTodos as todo (todo.id)}
		<TodoItem
			{todo}
			onToggle={todoStore.toggleTodo}
			onDelete={todoStore.deleteTodo}
		/>
	{/each}
</div>

<style>
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
</style>
