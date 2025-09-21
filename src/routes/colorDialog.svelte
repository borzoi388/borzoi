<script lang="ts">
	let isOpen: boolean = false;
	export let colorDialog
	export function openDialog() {
		if (isOpen === false) {
			isOpen = true
		} else {
			isOpen = false
		}
	}
	export function closeDialog() {
		isOpen = false
	}
</script>
{#if isOpen === true}
	<div bind:this={colorDialog} class="dialog">
		<slot/>
	</div>
{/if}

<style>
	.dialog {
		border-style: solid;
		border-width: 2px;
		border-color: purple;
		background-color: lemonchiffon;
		width: 100%;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		justify-items: space-between;
		margin-bottom: 10px;
	}
</style>