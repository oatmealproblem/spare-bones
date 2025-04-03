import * as menu from '@zag-js/menu';
import type { Snippet } from 'svelte';

export interface MenuContext
	extends Pick<MenuProps, 'itemBase' | 'itemPadding' | 'itemClasses' | 'stateHighlighted'> {
	api: ReturnType<typeof menu.connect>;
}

// Menu ---

export interface MenuProps extends Omit<menu.Props, 'id'> {
	/** Enable display of the popover arrow. */
	arrow?: boolean;
	/** Set z-index for the positioner. */
	zIndex?: string;

	// Base ---
	/** Set base classes for the root element. */
	base?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;

	// Trigger ---
	/** Set base styles for the trigger. */
	triggerBase?: string;
	/** Set background styles for the trigger. */
	triggerBackground?: string;
	/** Provide arbitrary styles for the trigger. */
	triggerClasses?: string;

	// Indicator ---
	/** Set base styles for the indicator. */
	indicatorBase?: string;
	/** Provide arbitrary styles for the indicator. */
	indicatorClasses?: string;

	// Positioner ---
	/** Set base classes for the positioner. */
	positionerBase?: string;
	/** Provide arbitrary classes for the positioner. */
	positionerClasses?: string;

	// Content ---
	/** Set base classes for the content. */
	contentBase?: string;
	/** Set background classes for the content. */
	contentBackground?: string;
	/** Set border classes for the content. */
	contentBorder?: string;
	/** Set border color classes for the content. */
	contentBorderColor?: string;
	/** Set padding classes for the content. */
	contentPadding?: string;
	/** Set gap classes for the content. */
	contentGap?: string;
	/** Set border-radius classes for the content. */
	contentRounded?: string;
	/** Set width classes for the content. */
	contentWidth?: string;
	/** Provide arbitrary classes for the content. */
	contentClasses?: string;

	// Arrow ---
	/** Set base classes for the arrow. */
	arrowBase?: string;
	/** Set background classes for the arrow. */
	arrowBackground?: string;
	/** Provide arbitrary classes for the arrow. */
	arrowClasses?: string;

	// Item ---
	/** Set base classes for the item elements. Can be individually overridden with the `base` prop on the <Menu.Item> component. */
	itemBase?: string;
	/** Set padding classes for the item elements. Can be individually overridden with the `padding` prop on the <Menu.Item> component. */
	itemPadding?: string;
	/** Provide arbitrary classes for the item elements. Can be individually overridden with the `classes` prop on the <Menu.Item> component. */
	itemClasses?: string;

	// State ---
	/** Set highlight classes for the item elements. These classes should start with the `data-highlighted:` variant. Can be individually overridden with the `stateHighlighted` prop on the <Menu.Item> component. */
	stateHighlighted?: string;

	// Snippets ---
	/** The default child slot. */
	children: Snippet;
	/** The trigger's default slot. */
	trigger: Snippet;
	/** Set the trigger's indicator icon. */
	indicator?: Snippet;
}

// Menu Item ---

export interface MenuItemProps extends menu.ItemProps {
	// Base ---
	/** Set base classes for the root element. Defaults to the `itemBase` prop of the parent <Menu> component. */
	base?: string;
	/** Set padding classes for the root element. Defaults to the `itemPadding` prop of the parent <Menu> component. */
	padding?: string;
	/** Provide arbitrary classes for the root element. Defaults to the `itemClasses` prop of the parent <Menu> component. */
	classes?: string;

	// State ---
	/** Set highlight classes for the root element. These classes should start with the `data-highlighted:` variant. Defaults to the `stateHighlighted` prop of the parent <Menu> component. */
	stateHighlighted?: string;

	// Snippets ---
	/** The default child slot. */
	children: Snippet;
}
