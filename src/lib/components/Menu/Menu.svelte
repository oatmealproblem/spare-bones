<script lang="ts">
	import * as menu from '@zag-js/menu';
	import { portal, normalizeProps, useMachine } from '@zag-js/svelte';
	import { setMenuContext } from './context.js';
	import type { MenuProps } from './types.js';
	import { fade } from 'svelte/transition';

	// props
	const {
		arrow = false,
		zIndex = 'auto',
		// Base
		base = '',
		classes = '',
		// Trigger
		triggerBase = 'btn',
		triggerBackground = '',
		triggerClasses = '',
		// Indicator
		indicatorBase = '',
		indicatorClasses = '',
		// Positioner
		positionerBase = '',
		positionerClasses = '',
		// Content
		contentBase = 'flex flex-col',
		contentBackground = 'bg-surface-50-950',
		contentBorder = 'border',
		contentBorderColor = 'border-surface-200-800',
		contentPadding = 'py-1',
		contentGap = '',
		contentRounded = 'rounded-base',
		contentWidth = '',
		contentClasses = '',
		// Arrow
		arrowBase = '',
		arrowBackground = '!bg-white',
		arrowClasses = '',
		// Item
		itemBase = 'cursor-pointer w-full',
		itemPadding = 'px-2 py-1',
		itemClasses = '',
		// State
		stateHighlighted = 'data-highlighted:preset-filled',
		// Snippets
		children,
		trigger,
		indicator,
		// Zag
		...zagProps
	}: MenuProps = $props();

	// zag
	const id = $props.id();
	const service = useMachine(menu.machine, () => ({ id, ...zagProps }));
	const api = $derived(menu.connect(service, normalizeProps));

	// context
	setMenuContext({
		get api() {
			return api;
		},
		get itemBase() {
			return itemBase;
		},
		get itemPadding() {
			return itemPadding;
		},
		get itemClasses() {
			return itemClasses;
		},
		get stateHighlighted() {
			return stateHighlighted;
		},
	});
</script>

<span class="{base} {classes}" data-testid="menu">
	<button {...api.getTriggerProps()} class="{triggerBase} {triggerBackground} {triggerClasses}">
		{@render trigger()}
		<span {...api.getIndicatorProps()} class="{indicatorBase} {indicatorClasses}">
			{#if indicator}{@render indicator()}{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					style="opacity: 0.5"
				>
					<path d="m6 9 6 6 6-6" />
				</svg>
			{/if}
		</span>
	</button>

	{#if api.open}
		<div
			use:portal
			{...api.getPositionerProps()}
			transition:fade={{ duration: 100 }}
			class="{positionerBase} {positionerClasses}"
		>
			{#if arrow}
				<div {...api.getArrowProps()}>
					<div
						{...api.getArrowTipProps()}
						class="{arrowBase} {arrowBackground} {arrowClasses}"
					></div>
				</div>
			{/if}
			<ul
				{...api.getContentProps()}
				class="{contentBase} {contentBackground} {contentBorder} {contentBorderColor} {contentPadding} {contentGap} {contentRounded} {contentWidth} {contentClasses}"
				style="z-index: {zIndex};"
			>
				{@render children()}
			</ul>
		</div>
	{/if}
</span>

<style>
	:global([data-part='arrow']) {
		--arrow-size: 10px;
		--arrow-background: white;
	}
</style>
