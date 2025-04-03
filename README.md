# Spare Bones

Additional Svelte components to use with [Skeleton](https://skeleton.dev), powered by [Zag](https://zagjs.com).

## Set Up

Install with `npm install spare-bones`, then add package's dist folder as a Tailwind source:

```css
@source @source '../node_modules/spare-bones/dist';
```

Adjust the path as needed for your project structure. [See the Tailwind documentation](https://tailwindcss.com/docs/detecting-classes-in-source-files#explicitly-registering-sources) for more info.

## Components

### Menu

Basic usage:

```svelte
<script>
	import { Menu } from 'spare-bones';
</script>

<Menu
	onSelect={(details) => alert(details.value)}
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
```

See [the types](https://github.com/oatmealproblem/spare-bones/blob/main/src/lib/components/Menu/types.ts) and [Zag documentation](https://zagjs.com/components/svelte/menu) for more information.

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

Everything inside `src/lib` is part of your library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build the library:

```bash
pnpm run package
```

To create a production version of the showcase app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.
