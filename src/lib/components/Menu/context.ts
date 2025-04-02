import { getContext, setContext } from 'svelte';
import type { MenuContext } from './types.js';

const key = Symbol('MenuContext');

export function getMenuContext(): MenuContext {
	return getContext(key);
}

export function setMenuContext(value: MenuContext): MenuContext {
	return setContext(key, value);
}
