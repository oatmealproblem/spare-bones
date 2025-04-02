<script lang="ts">
	import { getMenuContext } from './context.js';
	import type { MenuItemProps } from './types.js';

	let {
		// Root
		base = 'cursor-pointer w-full',
		padding = 'px-2 py-1',
		highlight = 'data-highlighted:preset-filled-surface-950-50',
		classes = '',
		// Snippets
		children,
		// Zag
		...zagProps
	}: MenuItemProps = $props();

	const context = getMenuContext();
</script>

<li {...context?.api.getItemProps(zagProps)} class="{base} {padding} {highlight} {classes}">
	{@render children()}
</li>
