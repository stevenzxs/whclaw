# Agent Coding Guidelines

This document provides guidelines for AI agents working in this codebase.

## Project Overview

React + TypeScript + Vite application using Tailwind CSS and shadcn/ui. Features internationalization (i18n) with English and Chinese support.

## Build Commands

All commands run from the `app/` directory:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

**Note**: No test runner is currently configured. If adding tests, consider Vitest for Vite compatibility.

## Code Style Guidelines

### TypeScript

- Use strict TypeScript with explicit types
- Define interfaces for props and config objects in `config.ts`
- Use `type` imports: `import type { Product } from './config'`
- Export types from config: `export interface Product { ... }`

### React Patterns

- Use functional components with arrow functions: `const Hero = () => { ... }`
- Memoize callbacks with `useCallback`: `const handleClick = useCallback(() => { ... }, [])`
- Use React hooks: `useState`, `useEffect`, `useRef`
- Wrap components in `React.StrictMode` in `main.tsx`

### Imports

Order imports as follows:
1. React imports
2. Third-party libraries (lucide-react, react-i18next)
3. Absolute imports (`@/components`, `@/lib/utils`)
4. Relative imports (`../config`, `./sections/Hero`)
5. Type imports

Example:
```typescript
import { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { heroConfig } from '../config';
import type { Product } from './config';
```

### Naming Conventions

- Components: PascalCase (`Hero.tsx`, `Navigation.tsx`)
- Hooks: camelCase starting with `use`
- Interfaces: PascalCase with suffix (e.g., `HeroConfig`, `Product`)
- Config exports: camelCase ending with `Config` (e.g., `heroConfig`, `siteConfig`)
- CSS classes: Tailwind utility classes with kebab-case for custom classes

### Styling

- Use Tailwind CSS utility classes exclusively
- Custom styles go in `src/index.css` using `@layer` directives
- CSS variables for theme colors in `:root`
- Responsive design with Tailwind breakpoints: `md:`, `lg:`
- Custom animations defined in `index.css` keyframes

### Internationalization (i18n)

- Use `useTranslation()` hook for all user-facing text
- Add translations to `src/i18n/locales/en.json` and `zh.json`
- Access with dot notation: `t('hero.title')`, `t('nav.home')`
- Support both English (en) and Chinese (zh)

### Error Handling

- Type-safe error handling with TypeScript
- Use optional chaining: `document.querySelector('#hero')?.scrollIntoView()`
- Check for null before accessing DOM elements
- Validate props with TypeScript interfaces

### File Organization

```
src/
  sections/        # Page sections (Hero, About, etc.)
  components/      # Reusable components
  i18n/           # Translations
    locales/
      en.json
      zh.json
    index.ts
  config.ts       # All configuration & types
  main.tsx        # Entry point
  App.tsx         # Root component
  index.css       # Global styles
```

### ESLint Rules

- Uses `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`
- Ignores `dist/` directory
- Follow recommended configs for TypeScript and React Hooks

### Performance

- Use `useCallback` for event handlers passed to children
- Use CSS transitions for animations (GPU accelerated)
- Lazy load images with native loading attribute
- Keep bundle size small with tree-shakeable imports

### Git Workflow

- No specific rules configured
- Follow conventional commits if creating commit messages
- Do not commit without explicit user request

## Configuration Files

- `vite.config.ts` - Vite configuration with @ alias
- `tsconfig.json` - TypeScript with project references
- `tailwind.config.js` - Tailwind with custom colors and animations
- `eslint.config.js` - ESLint flat config
- `components.json` - shadcn/ui configuration

## Environment

- Node.js with ES modules (`"type": "module"`)
- Vite 7.x for development and building
- TypeScript 5.9+
- React 19.x
- Tailwind CSS 3.x
