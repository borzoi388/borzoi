<script lang="ts">

	const correctpassword: string = "Chickens"
	const correctusername: string = "1540"
	let loggedin: string = "true"
	let password: string = ""
	let username: String
	let cateNumber: number = 0
	let colorNumber: number = 4
	let colorSubmission: string = ""
	let addColorState: string = "colorPick"
	let sdate: Date = new Date()
	let showCustom: boolean = false
	let months: Array<{submission: string, description: string, date: Date, category: number}> = [
		{ submission: "Mark this as complete", description: "Very difficult task", date: sdate, category: 0 }
	]

	let compButtonStates: Array<{restore: boolean, delete: boolean}> = [
		{ restore: false, delete: false }
	]

	let categories: Array<{color: number, name: string}> = [
		{ color: 25, name: "Unsorted" },
	]

	let completedtasks: Array<{submission: string, description: string, date: Date, category: number}> = [
		{ submission: "Completed task 1", description: "It's already complete", date: sdate, category: 0 }
	]

	//i'm sorry for this horrific block of an array but i don't know how to import data yet 😝
	let colors: Array<{color: string; text: string; custom: boolean}> = [
            { color: "Salmon", text: "purple", custom: false},
            { color: "PeachPuff", text: "purple", custom: false},
            { color: "PapayaWhip", text: "purple", custom: false},
            { color: "PaleGreen", text: "purple", custom: false},
            { color: "PaleTurquoise", text: "purple", custom: false},
            { color: "LightSkyBlue", text: "purple", custom: false},
            { color: "Plum", text: "purple", custom: false},
            { color: "LightPink", text: "purple", custom: false},
            { color: "Crimson", text: "lemonchiffon", custom: false},
            { color: "DarkOrange", text: "lemonchiffon", custom: false},
            { color: "Gold", text: "purple", custom: false},
            { color: "YellowGreen", text: "purple", custom: false},
            { color: "LightSeaGreen", text: "lemonchiffon", custom: false},
            { color: "SteelBlue", text: "lemonchiffon", custom: false},
            { color: "MediumOrchid", text: "lemonchiffon", custom: false},
            { color: "HotPink", text: "lemonchiffon", custom: false},
            { color: "FireBrick", text: "lemonchiffon", custom: false},
            { color: "Chocolate", text: "lemonchiffon", custom: false},
            { color: "Orange", text: "lemonchiffon", custom: false},
            { color: "SeaGreen", text: "lemonchiffon", custom: false},
            { color: "Teal", text: "lemonchiffon", custom: false},
            { color: "RoyalBlue", text: "lemonchiffon", custom: false},
            { color: "RebeccaPurple", text: "lemonchiffon", custom: false},
            { color: "MediumVioletRed", text: "lemonchiffon", custom: false},
            { color: "GhostWhite", text: "purple", custom: false},
            { color: "LightSteelBlue", text: "purple", custom: false},
            { color: "SlateGray", text: "lemonchiffon", custom: false},
            { color: "DarkSlateGray", text: "lemonchiffon", custom: false},
            { color: "#008FC4", text: "lemonchiffon", custom: false},
            
        ]

	let tasksubmission: string = ""
	let taskdescription: string = ""
	let categorysubmission: string = ""
	let showCompleted: boolean = false
	let showCaol: boolean = false
	let textDark: boolean = true
	let colorsOpen: boolean = false
	let sortOpen: boolean = false
	let sortNumber: number = -1

	function toggleColors() {
		if (colorsOpen === false) {
			colorsOpen = true
			colorDialog.openDialog()
		} else {
			colorsOpen = false
			colorDialog.closeDialog()
		}
	}

	function toggleSort() {
		if (sortOpen === false) {
			sortOpen = true
			sortByDialog.openDialog()
		} else {
			sortOpen = false
			sortByDialog.closeDialog()
		}
	}
	
	function addmonth() {
		if (tasksubmission.length < 1) {
			alert("Please input a title!")
		} else {
			sdate = new Date()
			months = [
				...months,
				{ submission: tasksubmission, description: taskdescription, date: sdate, category: cateNumber, }
			]
			showCompleted = false
			tasksubmission = ""
			taskdescription = ""
			cateNumber = 0
		}

	}


	function toggleCustom() {
		if (showCustom === false) {
			showCustom = true
		} else {
			showCustom = false
		}
	}

	function addCate() {
		if (categorysubmission.length < 1) {
			alert("Please input a title!")
		} else if (categorysubmission.length > 18) {
			alert("Too long! Please keep it under 18 characters")
		} else {
			submitDialog.closeDialog()
			addColDialog.closeDialog()
			categories = [
				...categories,
				{color: colorNumber, name: categorysubmission}
			]
			categorysubmission = ""
			colorNumber = 0
			cateNumber = categories.length-1
		}
	}

	function toggleColorPick() {
		if (addColorState === "colorPick") {
			addColorState = "inputCSS"
		} else {
			addColorState = "colorPick"
		}
	}

	function selectCate(selected: number) {
		cateNumber = selected
		selectDialog.closeDialog()
	}

	function sortCate(selected: number) {
		sortNumber = selected
		sortOpen = false
		sortByDialog.closeDialog()
	}

	function selectColor(selected: number) {
		colorNumber = selected
		colorOpen = false
		colorDialog.closeDialog()
		addColorDialog.closeDialog()
	}

	function completed(selected: number) {
		completedtasks = [
			...completedtasks,
			{ 
				submission: months[selected].submission, 
				description: months[selected].description, 
				date: new Date(), 
				category: months[selected].category 
			}
		]
		compButtonStates = [
			...compButtonStates,
			{ restore: false, delete: false }
		]
		months.splice(selected, 1)
		months = months
		completedtasks = completedtasks
	}

	function deleteComp(selected: number) {
		if (compButtonStates[selected].delete === true) {
			compButtonStates.splice(selected, 1)
			completedtasks.splice(selected, 1)
			completedtasks = completedtasks
		} else {
			compButtonStates[selected].delete = true
		}
	}

	function restoreTask(selected: number) {
		if (compButtonStates[selected].restore === true) {
			months = [
				...months,
				{ 
					submission: completedtasks[selected].submission, 
					description: completedtasks[selected].description, 
					date: completedtasks[selected].date, 
					category: completedtasks[selected].category 
				}
			]
			completedtasks.splice(selected, 1)
			compButtonStates.splice(selected, 1)
			completedtasks = completedtasks
		} else {
			compButtonStates[selected].restore = true
		}
	}

	function cancelRestore(selected: number) {
		compButtonStates[selected].restore = false
	}

	function cancelDelete(selected: number) {
		compButtonStates[selected].delete = false
	}

	function login() {
			if (username == correctusername) {
				if (password == correctpassword) {
					loggedin = "true"
				} else {
					alert("Incorrect password! Try again! (hint: Chickens)")
				}
			} else {
				alert("Incorrect username! Try again! (hint: 1540)")
			}
	}

	function logout() {
		password = ""
		username = ""
		loggedin = "false"
		loggedin = loggedin
	}

	function toggleShowCaol() {
		if (showCaol === true) {
			showCaol = false
		} else {
			showCaol = true
		}
	}

	function toggleShowCom() {
		if (showCompleted === true) {
			showCompleted = false
		} else {
			showCompleted = true
			compButtonStates = compButtonStates.map(
 				obj => ({restore: false, delete: false})
			);
		}
	}

	function addColor() {
		if (colorSubmission.length < 1) {
			alert("Please input a color!")
		} else {
			if (textDark === true) {
				colors = [
					...colors,
					{ color: colorSubmission , text: "purple", custom: true }
				]
			} else {
				colors = [
					...colors,
					{ color: colorSubmission , text: "lemonchiffon", custom: true }
				]
			}

			addColDialog.closeDialog()
			colorSubmission = ""
		}
	}

	function toggleTextColor() {
		if (textDark === true) {
			textDark = false
		} else {
			textDark = true
		}
	}

	import Dialog from './selectDialog.svelte'
	import ColDialog from './colorDialog.svelte'
    import SubmitDialog from './submitDialog.svelte'
	import AddColDialog from './addColorDialog.svelte'
	import SortByDialog from './sortByDialog.svelte'
	let sortByDialog: undefined
	let addColDialog: undefined
	let submitDialog: undefined
	let colorDialog: undefined
	let selectDialog: undefined
</script>
<svelte:head>
	<title>🧼that was a good bath🧼</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
{#if loggedin == "true"}
	<section class="monthsubmission" style="padding: 0px">

		<!--ADD TASK-->
		<div class="pink border submit">
			<h3>
				Add a task
			</h3>
			<input bind:value={tasksubmission} type="text" placeholder="Task">
			<input bind:value={taskdescription} type="text" placeholder="Description (optional)">
			<br>
			<div style="display: block; width: 100%">
				<label class="text">Category:
					<button on:click={() => selectDialog.openDialog()} style="margin-bottom: 10px; background-color: {colors[categories[cateNumber].color].color}; color: {colors[categories[cateNumber].color].text}">
						{categories[cateNumber].name}
					</button><br>
				</label>
			</div>
			<!--CATEGORY CHOOSE-->
			<Dialog bind:this={selectDialog}>
				{#each categories as { color, name }, i}
					<button on:click={() => selectCate(i)} style="background-color: {colors[color].color}; margin: 5px; color: {colors[color].text}">{name}</button>
				{/each}
				<button on:click={submitDialog.openDialog} style="margin: 5px; background-color: transparent">＋</button>
			</Dialog>
			<button on:click={addmonth} style="display: block">
				Submit
			</button>
		</div>

		<SubmitDialog bind:this={submitDialog}>
			<!--ADD CATEGORY-->
				<input bind:value={categorysubmission} type="text" placeholder="New Category Name">
				<div class="half" style="width: 100%; margin-bottom: 10px">
					<div style="grid-column-start: col1; grid-column-end: middle; margin-right: 5px">
						<label class="text">Color:
							<button on:click={toggleColors} style="background-color: {colors[colorNumber].color}; color: {colors[colorNumber].text}">
								🦐
							</button>
						</label>
					</div>
					{#if colors.length > 29 && colorsOpen === true}
						<button on:click={toggleCustom} style="grid-column-start: middle; grid-column-end: end">
							{#if showCustom === false}
								Filter: All
							{:else}
								Filter: Custom
							{/if}
						</button>
					{/if}
				</div>

				<!--CHOOSE COLOR DIALOG-->
				<ColDialog bind:this={colorDialog}>
					{#if showCustom === false}
						{#each colors as { color, text}, i}
							<button on:click={() => selectColor(i)} style="background-color: {color}; margin: 5px; color: {text}">
								🦐
							</button>
						{/each}
					{:else}
						{#each colors as { color, text, custom }, i}
							{#if custom === true}
								<button on:click={() => selectColor(i)} style="background-color: {color}; margin: 5px; color: {text}">
									🦐
								</button>
							{/if}
						{/each}
					{/if}
					<button on:click={addColDialog.openDialog} style="margin: 5px; background-color: transparent">＋</button>
				</ColDialog>
				<button on:click={addCate}>
					Submit
				</button>
		</SubmitDialog>

		<AddColDialog bind:this={addColDialog}>
			<!--ADD COLOR-->
			{#if addColorState === "colorPick"}
				<input type="color" bind:value={colorSubmission}>
				<div class="half" style="width: 100%">
					<button on:click={toggleColorPick} style="grid-column-start: col1; grid-column-end: middle; margin-right: 5px">Input hex/CSS?</button>
					<button on:click={toggleTextColor} style="grid-column-start: middle; grid-column-end: end; margin-left: 5px; background-color: {colorSubmission}">
						{#if textDark === true}
							<span style="color: purple">Light Text?</span>
						{:else}
							<span style="color: lemonchiffon">Dark Text?</span>
						{/if}
					</button>
				</div>
			{:else}
				<input type="text" bind:value={colorSubmission} placeholder="Input CSS Color/hex value">
				<div class="half" style="width: 100%">
					<button on:click={toggleColorPick} style="grid-column-start: col1; grid-column-end: middle; margin-right: 5px">Pick Color?</button>
					<button on:click={toggleTextColor} style="grid-column-start: middle; grid-column-end: end; margin-left: 5px; background-color: {colorSubmission}">
						{#if textDark === true}
							<span style="color: purple">Light Text?</span>
						{:else}
							<span style="color: lemonchiffon">Dark Text?</span>
						{/if}
					</button>
				</div>
			{/if}
			<button on:click={addColor} style="display: block; margin-top: 10px;">
				Submit
			</button>
		</AddColDialog>

	</section>


	<section class="middle">
		<div class="middle border">
			<div class="shark">
				<div class="title"></div>
			</div>
			<div class="container">

				<button on:click={toggleShowCom} class="pink">
					{#if showCompleted === false}
						Show Completed Tasks
					{:else}
						Hide Completed Tasks
					{/if}
				</button>

				<button on:click={toggleShowCaol} class="pink">
					{#if showCaol === true}
						Hide Cat Owl Guardian
					{:else}
						Show Cat Owl Guardian
					{/if}
				</button>

				<a href="https://www.youtube.com/watch?v=WCs-7HmA9Qk" target="blank" class="pink">
					Seal Cave
				</a>

			</div>
		</div>

	</section>
	<section class="todolist border" style="padding: 5px;">
			<div class="half">
				<h3 style="grid-column-start: col1; grid-column-end: middle">
					{#if showCompleted === false}
						To-Do
					{:else}
						Completed
					{/if}
				</h3>
				<div class="border" style="grid-column-start: middle; grid-column-end: end; background: lemonchiffon; margin: 5px; margin-left: 0px; align-content: center;">
					<label class="text">
						Filter:
							{#if sortNumber > -1}
								<button on:click={toggleSort} style="background-color: {colors[categories[sortNumber].color].color}; color: {colors[categories[sortNumber].color].text}">{categories[sortNumber].name}</button>
							{:else}
								<button on:click={toggleSort}>None</button>
							{/if}
					</label>
				</div>
			</div>
			<SortByDialog bind:this={sortByDialog}>
				<button on:click={() => sortCate(-1)} style="margin: 5px;">
					Show All
				</button>
				{#each categories as { color, name }, i}
					<button on:click={() => sortCate(i)} style="background-color: {colors[color].color}; margin: 5px; color: {colors[color].text}">{name}</button>
				{/each}
			</SortByDialog>

		{#if showCompleted === false}
			{#if months.length < 1}
				<div class="yippee">
					<span class="message">all done!</span>
				</div>
			{:else if sortNumber > -1 && months.filter(obj => obj["category"] === sortNumber).length < 1}
			<div class="dawg">
				<div class="dawg">
					<span class="message">
						we do not have any of these "{categories[sortNumber].name}" items of which you speak, i'm afraid...
					</span>
				</div>
			</div>
			{:else}
				{#each months as { submission, description, date, category }, i}
				<!--TASK-->
					{#if sortNumber < 0 || sortNumber === category}
						<div class="task">
							<button on:click={() => completed(i)} style="grid-column-start: check; grid-column-end: task">
								✓
							</button>
							<!--CATEGORY OF TASK-->
							<div class="half" style="grid-column-start: category; grid-column-end: end; margin-left: 10px">
								<div class="border cateLabel" style="background-color: {colors[categories[category].color].color}; color: {colors[categories[category].color].text}">
									{categories[category].name}
								</div>

								<!--TITLE OF TASK-->
								<div class="green border" style="grid-column-start: col2; grid-column-end: end; margin-left: 5px; padding: 5px;">
									<span class="tasktitle">
										{submission}
									</span>
									<span class="taskdate">
										- {date}
									</span>
								</div>

								<!--DESCRIPTION OF TASK-->
								{#if description.length > 0}
									<p class="text" style="grid-column-start: col1; grid-column-end: end">
										{description}
									</p>
								{/if}
							</div>
						</div>
					{/if}
				{/each}
			{/if}
		{:else}
			{#if completedtasks.length < 1}
				<div class="cat">
					<span class="message">
						no completed tasks here 👍
					</span>
				</div>
			{:else if sortNumber > -1 && months.filter(obj => obj["category"] === sortNumber).length < 1}
				<div class="dawg">
					<span class="message">
						we do not have any of these "{categories[sortNumber].name}" items of which you speak, i'm afraid...
					</span>
				</div>
			{:else}
				{#each completedtasks as { submission, description, date, category }, i}
					{#if sortNumber < 0 || sortNumber === category}
						<div class="task">
							<!--CATEGORY OF TASK-->
							<div class="half" style="grid-column-start: check; grid-column-end: end; margin-bottom: 5px;">
								<div class="border cateLabel" style="background-color: {colors[categories[category].color].color}; color: {colors[categories[category].color].text}; margin-bottom: 2.5px">
									{categories[category].name}
								</div>

								<!--TITLE OF TASK-->
								<div class="green border" style="grid-column-start: col2; grid-column-end: end; margin-left: 5px; padding: 5px; margin-bottom: 2.5px;">
									<span class="tasktitle">
										{submission}
									</span>
									<span class="taskdate">
										- {date}
									</span>
								</div>

								<!--DESCRIPTION OF TASK-->
								{#if description.length > 0}
									<p class="text" style="grid-column-start: col1; grid-column-end: end;">
										{description}
									</p>
								{/if}
								
							</div>
								<div class="half" style="grid-column-start: check; grid-column-end: end">
									{#if compButtonStates[i].restore === false}
										<button on:click={() => restoreTask(i)} style="grid-column-start: col1; margin-right: 2.5px; grid-column-end: middle; overflow-x: hidden;">
											Restore Task
										</button>
									{:else}
										<div class="half" style="grid-column-start: col1; grid-column-end: middle; margin-right: 2.5px;">
											<button on:click={() => cancelRestore(i)} style="grid-column-start: col1; margin-right: 2.5px; grid-column-end: middle; overflow-x: hidden;">
												Cancel
											</button>
											<button on:click={() => restoreTask(i)} style="grid-column-start: middle; margin-left: 2.5px; grid-column-end: end; overflow-x: hidden;">
												Confirm
											</button>
										</div>
									{/if}
									{#if compButtonStates[i].delete === false}
										<button on:click={() => deleteComp(i)} class="salmon" style="grid-column-start: middle; margin-left: 2.5px; grid-column-end: end; overflow-x: hidden;">
											Delete Task
										</button>
									{:else}
										<div class="half" style="grid-column-start: middle; grid-column-end: end; margin-left: 2.5px;">
											<button on:click={() => cancelDelete(i)} class="salmon" style="grid-column-start: col1; margin-right: 2.5px; grid-column-end: middle; overflow-x: hidden;">
												Cancel
											</button>
											<button on:click={() => deleteComp(i)} class="salmon" style="grid-column-start: middle; margin-left: 2.5px; grid-column-end: end; overflow-x: hidden;">
												Confirm
											</button>
										</div>
									{/if}
								</div>
						</div>
					{/if}
				{/each}
			{/if}
		{/if}

	</section>
{:else}
	<section class="loginpage border" style="padding: 5px;">
		<h1>Log In</h1>
		<label>
			Username:
			<input type="text" bind:value={username}>
		</label>
		<br>
		<label>
			Password:
			<input type="text" bind:value={password}>
		</label>
		<br>
		<button on:click={login}>
			Log in
		</button>
	</section>
{/if}
{#if showCaol === true}
	<div class="caol"></div>
{/if}
<style>
	h3 {
		color: purple;
		font-weight: bold;
	}

	section {
		margin: 5px;
		text-align: justify;
		overflow-x: hidden;
	}
	section.loginpage {
		background-color: lightskyblue;
		grid-column-start: col2;
		grid-column-end: col5;
		grid-row-start: body;
		align-items: center;
		text-align: center;
	}
	section.monthsubmission {
		grid-column-start: col1;
		grid-column-end: col2;
		align-self: start;
		position: sticky;
		top: 10px;
	}
	section.middle {
		grid-column-start: col2;
		grid-column-end: col4;
		grid-row-start: body;
		position: sticky;
		top: 10px;
		align-self: start;
	}

	div.middle {
		background-color: lightgreen;
		color: black;
		margin-bottom: 10px;
		padding: 10px;
	}

	div.shark:hover{
		background: url(src/lib/images/shark.gif);
		background-size: contain;
		background-repeat: repeat-x;
		background-position: center;
	}

	section.todolist {
		background-color: lightpink;
		color: black;
		grid-column-start: col4;
		grid-column-end: end;
		grid-row-start: body;
		overflow-y: scroll;
		text-align: center;
	}

	.pink {
		background-color: lightpink;
	}

	.border {
		border-style: solid;
		border-color: purple;
		color: purple;
		border-width: 2px;
	}

	.task {
		padding: 10px;
		margin: 5px;
		text-align: left;
		background-color: lemonchiffon;
		display: grid;
		grid-template-columns: [check] 30px [task] auto [end];
		border-style: solid;
		border-color: purple;
		border-width: 2px;
	}

	.tasktitle {
		font-weight: bold; 
		font-size: 1.1em;
		color: purple;
	}

	.tasktitle:hover {
		color: deeppink;
	}

	.taskdate {
		color: purple;
	}
	
	.text {
		font-style: italic;
		color: purple;
	}

	button {
		background-color: lightgreen;
		border-style: solid;
		border-color: purple;
		color: purple; 
		padding: 5px;
	}

	a {
		background-color: lightgreen;
		border-style: solid;
		border-color: purple;
		color: purple; 
		border-width: 2px;
		padding: 5px;
		text-decoration: none;
		font-size: 14px;
	}

	input:hover {
		border-color: deeppink;
		color: deeppink;
	}

	button:hover {
		border-color: deeppink;
		color: deeppink;
	}

	a:hover {
		border-color: deeppink;
		color: deeppink;
	}

	input {
		background: lemonchiffon;
		border-style: solid;
		border-color: purple;
		margin-bottom: 10px;
		width: 100%;
	}

	.green {
		background-color: lightgreen;
	}

	span.message {
		font-size: 1.1em;
		color: palegreen;
		font-style: italic;
		background-color: purple;
	}

	.half {
		display: grid;
		grid-template-columns: [col1] 25% [col2] 25% [middle] 50% [end];
	}

	.yippee {
		background: url(src/lib/images/yippee.gif);
		background-size: contain;
		background-repeat: no-repeat;
		color: deeppink;
		margin: 5px;
		background-position: top;
		height: 200px;
		padding: 10px;
		text-align: center;
	}

	.title {
		background: url(src/lib/images/title.gif);
		background-size: contain;
		width: 100%;
		height: 70px;
		background-repeat: no-repeat;
		background-position: center;
		text-align: center;
	}

	.submit {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 10px;
		padding: 10px;
	}

	.salmon {
		background: salmon;
	}

	.cateLabel {
		font-style: italic;
		font-size: 12px;
		text-align: center;
		display: flex;
		align-items: center;
		grid-column-start: col1;
		grid-column-end: col2;
		padding: 5px;
	}

	.container {
		border-style: solid;
		border-width: 2px;
		border-color: purple;
		background-color: lemonchiffon;
		padding: 5px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.caol {
		background: url(src/lib/images/caol.jpg);
		width: 200px;
		height: 200px;
		position: fixed;
		bottom: 10px;
		right: 10px;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}

	div {
		overflow-x: hidden;
	}

	.dawg {
		background: url(src/lib/images/dawg.jpg);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		padding: 10px;
		height: 300px;
	}

	.cat {
		background: url(src/lib/images/cat.gif);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		padding: 10px;
		height: 300px;
	}
</style>
