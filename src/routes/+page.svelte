<script lang="ts">

	const correctpassword: string = "Chickens"
	const correctusername: string = "1540"
	let loggedin: string = "true"
	let password: string = ""
	let selected: number
	let username: String
	let cateNumber: number = 0
	let colorNumber: number = 0
	let sdate: Date = new Date()
	let months: Array<{submission: string, description: string, date: Date, category: number}> = [
		{ submission: "Mark this as complete", description: "Very difficult task", date: sdate, category: 0 }
	]

	let categories: Array<{color: number, name: string}> = [
		{ color: 25, name: "Unsorted" },
	]

	let completedtasks: Array<{submission: string, description: string, date: Date, category: number}> = [
		{ submission: "Completed task 1", description: "It's already complete", date: sdate, category: 0 }
	]

	//i'm sorry for this horrific block of an array but i don't know how to import data yet 😝
	let colors: Array<{color: string; name: string; text: string; custom: boolean}> = [
            { color: "Salmon", name: "🦐", text: "purple", custom: false},
            { color: "PeachPuff", name: "🦐", text: "purple", custom: false},
            { color: "PapayaWhip", name: "🦐", text: "purple", custom: false},
            { color: "PaleGreen", name: "🦐", text: "purple", custom: false},
            { color: "PaleTurquoise", name: "🦐", text: "purple", custom: false},
            { color: "LightSkyBlue", name: "🦐", text: "purple", custom: false},
            { color: "Plum", name: "🦐", text: "purple", custom: false},
            { color: "LightPink", name: "🦐", text: "purple", custom: false},
            { color: "Crimson", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "DarkOrange", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "Gold", name: "🦐", text: "purple", custom: false},
            { color: "YellowGreen", name: "🦐", text: "purple", custom: false},
            { color: "LightSeaGreen", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "SteelBlue", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "MediumOrchid", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "HotPink", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "FireBrick", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "Chocolate", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "Orange", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "SeaGreen", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "Teal", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "RoyalBlue", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "RebeccaPurple", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "MediumVioletRed", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "GhostWhite", name: "🦐", text: "purple", custom: false},
            { color: "LightSteelBlue", name: "🦐", text: "purple", custom: false},
            { color: "SlateGray", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "DarkSlateGray", name: "🦐", text: "lemonchiffon", custom: false},
            { color: "#008FC4", name: "🦐", text: "lemonchiffon", custom: false},
            
        ]

	let tasksubmission: string 
	let taskdescription: string = ""
	let ctCate: number
	let cttitle: string
	let ctdescription: string
	let categorysubmission: string = ""

	function addmonth() {
		if (tasksubmission.length < 1) {
			alert("Need a title!")
		} else {
			sdate = new Date()
			months = [
				...months,
				{ submission: tasksubmission, description: taskdescription, date: sdate, category: cateNumber, }
			]
			tasksubmission = ""
			taskdescription = ""
			cateNumber = 0
		}

		}

	function addCate() {
		if (categorysubmission.length < 1) {
			alert("Need a title!")
		} else {
			categories = [
				...categories,
				{color: colorNumber, name: categorysubmission}
			]
			categorysubmission = ""
			colorNumber = 0
			cateNumber = 0
		}
	}

	function selectCate() {
		cateNumber = selected
		cateNumber = cateNumber
	}

	function selectColor() {
		colorNumber = selected
		colorNumber = colorNumber
	}

	function completed() {
		cttitle = months[selected].submission
		ctdescription = months[selected].description
		ctCate = months[selected].category
		sdate = new Date()
		completedtasks = [
			...completedtasks,
			{ submission: cttitle, description: ctdescription, date: sdate, category: ctCate }
		]
		months.splice(selected, 1)
		months = months
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

	import Dialog from './selectDialog.svelte'
	import ColDialog from './colorDialog.svelte'
	import ComDialog from './completedDialog.svelte'
	let colorDialog: undefined
	let selectDialog: undefined
	let completedDialog: undefined
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
			<input bind:value={taskdescription} type="text" placeholder="Description">
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
					<button on:click={() => {selected = i;}} on:click={selectCate} on:click={selectDialog.closeDialog} style="background-color: {colors[color].color}; margin: 5px; color: {colors[color].text}">{name}</button>
				{/each}
			</Dialog>
			<button on:click={addmonth} style="display: block">
				Submit
			</button>
		</div>

		<!--ADD CATEGORY-->
		<div class="pink border submit">
			<h3>Add a category</h3>
			<input bind:value={categorysubmission} type="text" placeholder="Name">
			<div style="display: block; width: 100%">
				<label class="text">Color:
					<button on:click={() => colorDialog.openDialog()} style="margin-bottom: 10px; background-color: {colors[colorNumber].color}; color: {colors[colorNumber].text}">
						{colors[colorNumber].name}
					</button><br>
				</label>
			</div>

			<!--CHOOSE COLOR DIALOG-->
			<ColDialog bind:this={colorDialog}>
				{#each colors as { color, name, text }, i}
					<button on:click={() => {selected = i;}} on:click={selectColor} on:click={colorDialog.closeDialog} style="background-color: {color}; margin: 5px; color: {text}">
						{name}
					</button>
				{/each}
			</ColDialog>
			<button on:click={addCate}>
				Submit
			</button>
		</div>

	</section>


	<section class="middle">
		<div class="middle border">
			<div class="title"></div>
			<button on:click={completedDialog.openDialog}>akdhfks</button>
		</div>
		<ComDialog bind:this={completedDialog}>
			{#each completedtasks as { submission, description, date, category }}
				<div class="task">
					<!--CATEGORY OF TASK-->
					<div class="half" style="grid-column-start: check; grid-column-end: end">
						<div class="border cateLabel" style="background-color: {colors[categories[category].color].color}; color: {colors[categories[category].color].text}">
							{categories[category].name}
						</div>

						<!--TITLE OF TASK-->
						<div class="pink border" style="grid-column-start: col2; grid-column-end: end; margin-left: 5px; padding: 5px;">
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
			{/each}
		</ComDialog>
	</section>
	<section class="todolist border" style="padding: 5px;">
		{#if months.length >= 1}
			{#each months as { submission, description, date, category }, i}
			<!--TASK-->
				<div class="task">
						<button on:click={() => {selected = i;}} on:click={completed} style="grid-column-start: check; grid-column-end: task">
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
			{/each}
		{:else}
			<div class="yippee">
				All done!
			</div>
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
<style>
	h1 {
		color: purple;
		font-weight: bold;
	}

	h3 {
		color: purple;
		font-weight: bold;
	}

	section {
		margin: 5px;
		text-align: justify;
		overflow-x: visible;
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
		overflow-y: scroll;
	}

	div.middle {
		background-color: lightgreen;
		color: black;
		margin-bottom: 10px;
	}

	section.todolist {
		background-color: lightpink;
		color: black;
		grid-column-start: col4;
		grid-column-end: end;
		grid-row-start: body;
		overflow-y: scroll;
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
		padding: 5px;
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
		color: purple;
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

	input:hover {
		border-color: deeppink;
		color: deeppink;
	}

	button:hover {
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

	.half {
		display: grid;
		grid-template-columns: [col1] 20% [col2] 80% [end];
	}

	.yippee {
		background: url(src/lib/images/yippee.gif);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: top;
		width: 100%;
		height: 200px;
		padding: 10px;
		text-align: center;
	}

	.title {
		background: url(src/lib/images/title.gif);
		background-size: contain;
		width: 100%;
		height: 70px;
		repeat: no-repeat;
		background-position: top;
		text-align: center;
	}

	.submit {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 10px;
		padding: 10px;
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
</style>
