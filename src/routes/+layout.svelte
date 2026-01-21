<script lang="ts">
	import favicon from '$lib/assets/favicon.svg'
	import '@picocss/pico/css/pico.amber.min.css'

	const { children } = $props()
</script>

<svelte:head>
	<link
		rel="icon"
		href={favicon}
	/>
	<title>Todo-tica</title>
</svelte:head>

<div class="container">
	<header>
		<h1>Todo-tica</h1>
	</header>
	<main>
		{@render children()}
	</main>
</div>

<style>
	h1 {
		margin-block: 1rem;
	}
</style>
