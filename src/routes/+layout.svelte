<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">

	<main>
		<slot />
	</main>
</div>

<style>
	main {
		display: grid;
		grid-template-columns: [col1] 20% [col2] 20% [col3] 20% [col4] 20% [col5] 20% [end];
		grid-template-rows: [header] 100px [body] auto [end];
		align-items: flex-start;
	}
</style>
