<script lang="ts">
	const ERROR_TEXT_ID = 'invalid-helper'

	let { onAdd }: { onAdd: (title: string) => void } = $props()
	let newTodo = $state('')
	let error = $state<string | null>(null)

	function handleSubmit(e: SubmitEvent) {
		error = null
		e.preventDefault()
		if (newTodo.trim().length === 0) {
			error = 'Please provide a valid title!'
			return
		}
		onAdd(newTodo)
		newTodo = ''
	}
</script>

<form onsubmit={handleSubmit}>
	<!-- svelte-ignore a11y_no_redundant_roles -->
	<fieldset role="group">
		<input
			type="text"
			placeholder="Buy milk"
			bind:value={newTodo}
			{...error ? { 'aria-invalid': true, 'aria-describedby': ERROR_TEXT_ID } : {}}
		/>
		<button type="submit">Add</button>
	</fieldset>
	{#if error}
		<small
			class="validation-error"
			id={ERROR_TEXT_ID}>{error}</small
		>
	{/if}
</form>

<style>
	.validation-error {
		color: var(--pico-del-color);
	}
</style>
