import * as menu from '@zag-js/menu';
import type { Snippet } from 'svelte';

export interface MenuContext {
	api: ReturnType<typeof menu.connect>;
}

// Menu ---

export interface MenuProps extends Omit<menu.Props, 'id'> {
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
	/** Set base classes for the root element. */
	base?: string;
	/** Set padding classes for the root element. */
	padding?: string;
	/** Set highlight classes for the root element. */
	highlight?: string;
	/** Provide arbitrary classes for the root element. */
	classes?: string;
	// Snippets ---
	/** The default child slot. */
	children: Snippet;
}
