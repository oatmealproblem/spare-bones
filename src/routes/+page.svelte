<script lang="ts">
	import Menu from '$lib/components/Menu/index.js';

	function onSelect(details: { value: string }) {
		alert(`${details.value} was selected!`);
	}

	let theme = $state.raw('cerberus');
	$effect(() => {
		const html = document.querySelector('html');
		if (html) {
			html.dataset.theme = $state.snapshot(theme);
		}
	});
</script>

<main class="flex flex-col gap-4 p-4">
	<label>
		Theme
		<select
			class="select"
			value={theme}
			onchange={(e) => {
				theme = e.currentTarget.value;
			}}
		>
			<option value="catppuccin">Catppuccin</option>
			<option value="cerberus">Cerberus</option>
			<option value="concord">Concord</option>
			<option value="crimson">Crimson</option>
			<option value="fennec">Fennec</option>
			<option value="hamlindigo">Hamlindigo</option>
			<option value="legacy">Legacy</option>
			<option value="mint">Mint</option>
			<option value="modern">Modern</option>
			<option value="mona">Mona</option>
			<option value="nosh">Nosh</option>
			<option value="nouveau">Nouveau</option>
			<option value="pine">Pine</option>
			<option value="reign">Reign</option>
			<option value="rocket">Rocket</option>
			<option value="rose">Rose</option>
			<option value="sahara">Sahara</option>
			<option value="seafoam">Seafoam</option>
			<option value="terminus">Terminus</option>
			<option value="vintage">Vintage</option>
			<option value="vox">Vox</option>
			<option value="wintry">Wintry</option>
		</select>
	</label>

	<Menu
		{onSelect}
		aria-label="Menu"
		contentWidth="w-32"
		triggerBackground="preset-filled-primary-500"
	>
		{#snippet trigger()}Menu{/snippet}
		<Menu.Item value="1">Item 1</Menu.Item>
		<Menu.Item value="2">Item 2</Menu.Item>
		<Menu.Item value="3">Item 3</Menu.Item>
		<Menu.Item value="4">Item 4</Menu.Item>
	</Menu>
</main>
