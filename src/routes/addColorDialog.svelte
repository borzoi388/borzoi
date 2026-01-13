<script lang="ts">
	let isOpen: boolean = false;
	export let addColDialog
	export function openDialog() {
		isOpen = true
	}
	export function closeDialog() {
		isOpen = false
	}
</script>
{#if isOpen === true}
	<div bind:this={addColDialog} class="dialog">
		<slot/>
	</div>
{/if}

<style>
	.dialog {
		border-style: solid;
		border-width: 2px;
		border-color: purple;
		background-color: lightpink;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 10px;
	}
</style>