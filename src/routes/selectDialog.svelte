<script lang="ts">
	let isOpen: boolean = false;
	export let selectDialog
	export function openDialog() {
		isOpen = true
	}
	export function closeDialog() {
		isOpen = false
	}
</script>
{#if isOpen === true}
	<div bind:this={selectDialog} class="dialog">
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
		justify-content: center;
		margin-bottom: 10px;
		max-height: 80px;
		overflow-y: scroll;
		box-shadow:none;
	}
</style>
