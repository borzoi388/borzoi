<script>
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
		grid-template-rows: [body] auto [end];
		align-items: flex-start;
		font-family:Arial, Helvetica, sans-serif;
	}
</style>
