<script lang="ts">
	let isOpen: boolean = false;
	export let selectDialog
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
	<div bind:this={selectDialog} class="border-2 border-solid border-purple-900 bg-yellow-200 w-screen p-2 flex flex-wrap justify-items-center mb-3 align-items-center overflow-y-scroll">
		<slot/>
	</div>
{/if}