<script lang="ts">
	export let colorDialog
	let isOpen: boolean = false;
	export function openDialog() {
		isOpen = true
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
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 10px;
		max-height: 80px;
		overflow-y: scroll;
		width: 100%;
	}
</style>
