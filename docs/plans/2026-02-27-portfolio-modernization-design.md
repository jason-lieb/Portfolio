# Portfolio Modernization Design

**Date:** 2026-02-27
**Goal:** Modernize portfolio codebase without changing visual design

## Summary

Clean slate rewrite of the portfolio site to:
- Remove Bootstrap, replace with Tailwind CSS v4
- Convert JavaScript (JSX) to TypeScript (TSX)
- Update all dependencies to latest versions
- Preserve existing visual design exactly

## Tech Stack

### Dependencies (Updated)

```
dependencies:
  react: ^19.0.0
  react-dom: ^19.0.0
  react-router-dom: ^7.2.0

devDependencies:
  typescript: ^5.7.0
  @types/react: ^19.0.0
  @types/react-dom: ^19.0.0
  vite: ^6.1.0
  @vitejs/plugin-react: ^4.3.4
  tailwindcss: ^4.0.0
  @tailwindcss/vite: ^4.0.0
  gh-pages: ^6.3.0
```

### Removed
- bootstrap
- react-bootstrap
- react-router-bootstrap

## Project Structure

```
src/
├── index.tsx
├── App.tsx
├── App.css
├── pages/
│   ├── About.tsx
│   ├── Portfolio.tsx
│   └── ErrorPage.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Project.tsx
├── assets/
│   ├── icons/            (SVG components as TSX)
│   └── images/           (webp files unchanged)
└── types/
    └── index.ts
```

## Tailwind Configuration

Using Tailwind v4 CSS-based configuration:

```css
@import "tailwindcss";

@theme {
  --color-background: #1c1d25;
  --color-card: #17202a;
  --color-text: #b0b2c3;
  --color-accent: #3498db;
  --font-family-sans: 'Roboto', sans-serif;
}
```

## TypeScript Types

```typescript
// src/types/index.ts
export interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  repo: string;
  deploy?: string;
}

interface IconProps {
  className?: string;
}
```

## Implementation Order

1. **Setup phase** - dependencies, config files (package.json, tsconfig.json, vite.config.ts, Tailwind)
2. **Types & entry points** - types/index.ts, index.tsx, App.tsx
3. **Components** - icons (batch), Footer, Header, Project
4. **Pages** - About, Portfolio, ErrorPage
5. **Cleanup** - remove old files, test deployment

## Design Constraints

- Visual design must remain identical to current site
- Dark theme with blue (#3498db) accent
- Responsive breakpoints preserved (mobile, tablet, desktop)
- All 6 current projects displayed in same layout
