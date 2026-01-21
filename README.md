# Svelte Todo List

A modern, minimalist todo list application built with SvelteKit and styled with Pico CSS.

## Tech Stack

- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack web application framework
- **[Svelte 5](https://svelte.dev/)** - Component-based UI framework with runes
- **[Pico CSS](https://picocss.com/)** - Minimal CSS framework for semantic HTML
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[Lucide Icons](https://lucide.dev/)** - Beautiful, consistent icon set
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed on your system.

### Installation

Install dependencies:

```sh
bun install
```

### Development

Start the development server:

```sh
bun run dev
```

Or start the server and open the app in a new browser tab:

```sh
bun run dev -- --open
```

The app will be available at `http://localhost:5173` by default.

### Building

To create a production version of your app:

```sh
bun run build
```

You can preview the production build with:

```sh
bun run preview
```

## Project Structure

This project was created with the Svelte CLI ([`sv`](https://github.com/sveltejs/cli)):

```sh
bun x sv create --template minimal --types ts --add prettier eslint --install bun ./svelte-todo-list
```
