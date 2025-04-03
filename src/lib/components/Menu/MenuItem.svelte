<script lang="ts">
	import { getMenuContext } from './context.js';
	import type { MenuItemProps } from './types.js';

	let {
		// Root
		base,
		padding,
		classes,
		// State
		stateHighlighted,
		// Snippets
		children,
		// Zag
		...zagProps
	}: MenuItemProps = $props();

	const context = getMenuContext();
</script>

<li
	{...context?.api.getItemProps(zagProps)}
	class="{base ?? context.itemBase} {padding ?? context.itemPadding} {stateHighlighted ??
		context.stateHighlighted} {classes ?? context.itemClasses}"
>
	{@render children()}
</li>
