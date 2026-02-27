# Portfolio Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add code quality tooling, update content, and polish UI/UX to better showcase professional skills.

**Architecture:** Incremental improvements on existing TypeScript/React/Tailwind portfolio. Code quality tools first (enables clean development), then content updates, then UI polish.

**Tech Stack:** React 19, TypeScript 5.7, Vite 6, Tailwind CSS 4, Vitest, ESLint 9, Prettier

---

## Task 1: Add ESLint and Prettier ✅ COMPLETED

**Files:**
- Create: `eslint.config.js`
- Create: `.prettierrc`
- Modify: `package.json`

**Step 1: Install dependencies**

Run:
```bash
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react-hooks eslint-plugin-react-refresh prettier
```

**Step 2: Create eslint.config.js**

```javascript
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  }
)
```

**Step 3: Create .prettierrc**

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

**Step 4: Add scripts to package.json**

Add to "scripts":
```json
"lint": "eslint .",
"format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
"format:check": "prettier --check \"src/**/*.{ts,tsx,css}\""
```

**Step 5: Run format to fix existing files**

Run: `npm run format`

**Step 6: Run lint to verify no errors**

Run: `npm run lint`
Expected: No errors (warnings OK)

**Step 7: Commit**

```bash
git add eslint.config.js .prettierrc package.json package-lock.json src/
git commit -m "chore: add ESLint and Prettier configuration"
```

---

## Task 2: Add Vitest Testing ✅ COMPLETED

**Files:**
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/components/Footer.test.tsx`
- Modify: `package.json`

**Step 1: Install dependencies**

Run:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @types/jest
```

**Step 2: Update vite.config.ts**

```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
```

**Step 3: Create src/test/setup.ts**

```typescript
import '@testing-library/jest-dom'
```

**Step 4: Add test types to tsconfig.json**

Add to "compilerOptions":
```json
"types": ["vitest/globals", "@testing-library/jest-dom"]
```

**Step 5: Create src/components/Footer.test.tsx**

```tsx
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

describe('Footer', () => {
  it('renders copyright with current year', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument()
  })

  it('renders GitHub link', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/jason-lieb')
  })

  it('renders LinkedIn link', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/jasonlieb/')
  })
})
```

**Step 6: Add test script to package.json**

Add to "scripts":
```json
"test": "vitest run",
"test:watch": "vitest"
```

**Step 7: Run tests (expect failure - copyright year is hardcoded)**

Run: `npm run test`
Expected: FAIL on "renders copyright with current year" (shows 2024, not 2025)

**Step 8: Commit test setup (test will pass after Task 5)**

```bash
git add vite.config.ts src/test/setup.ts src/components/Footer.test.tsx package.json package-lock.json tsconfig.json
git commit -m "test: add Vitest setup and Footer tests"
```

---

## Task 3: Add GitHub Actions CI ✅ COMPLETED

**Files:**
- Create: `.github/workflows/ci.yml`

**Step 1: Create .github/workflows directory**

Run: `mkdir -p .github/workflows`

**Step 2: Create .github/workflows/ci.yml**

```yaml
name: CI

on:
  push:
    branches: [main, modernize-portfolio]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Check formatting
        run: npm run format:check

      - name: Lint
        run: npm run lint

      - name: Type check
        run: tsc -b

      - name: Test
        run: npm run test

      - name: Build
        run: npm run build
```

**Step 3: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: add GitHub Actions workflow"
```

---

## Task 4: Add Pre-commit Hooks ✅ COMPLETED

**Files:**
- Create: `.husky/pre-commit`
- Modify: `package.json`

**Step 1: Install dependencies**

Run:
```bash
npm install -D husky lint-staged
```

**Step 2: Initialize husky**

Run: `npx husky init`

**Step 3: Create .husky/pre-commit**

```bash
npx lint-staged
```

**Step 4: Add lint-staged config to package.json**

Add to package.json (top level):
```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.css": ["prettier --write"]
}
```

**Step 5: Test pre-commit hook**

Run:
```bash
echo "// test" >> src/App.tsx
git add src/App.tsx
git commit -m "test commit" --dry-run
```
Expected: lint-staged runs

**Step 6: Reset test change**

Run: `git checkout src/App.tsx`

**Step 7: Commit**

```bash
git add .husky/ package.json package-lock.json
git commit -m "chore: add husky pre-commit hooks with lint-staged"
```

---

## Task 5: Fix Copyright Year ✅ COMPLETED

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Update Footer.tsx**

Change line 32 from:
```tsx
<h6 className="text-accent text-sm">© 2024 Jason Lieb</h6>
```
to:
```tsx
<h6 className="text-accent text-sm">© {new Date().getFullYear()} Jason Lieb</h6>
```

**Step 2: Run tests to verify fix**

Run: `npm run test`
Expected: All tests PASS

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "fix: make copyright year dynamic"
```

---

## Task 6: Create TypeScript Icon ✅ COMPLETED

**Files:**
- Create: `src/assets/icons/Typescript.tsx`

**Step 1: Create src/assets/icons/Typescript.tsx**

```tsx
import type { IconProps } from '../../types'

export default function Typescript({ className }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 0 1 7.82 4.5 20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a6.54 6.54 0 0 0-5.35-3.05c-3.44-.24-5.66 1.59-5.65 4.64a4.24 4.24 0 0 0 .55 2.34c.74 1.42 2.14 2.27 6.33 3.84 7.73 2.89 11 4.79 13.65 7.86a17.08 17.08 0 0 1 3.15 8.4 20.47 20.47 0 0 1-1.68 10.2c-2.48 4.7-6.92 7.78-12.58 8.72a36.37 36.37 0 0 1-8.9 0c-5.94-.89-11.56-4.07-14.59-8.25a24.58 24.58 0 0 1-2.38-4.09c.15-.11 1.27-.75 2.48-1.41l3.54-1.87 1.4-.78.94 1.38a15.39 15.39 0 0 0 4.76 4.39c4.08 2 9.53 1.7 12.2-.64a5.54 5.54 0 0 0 1.87-4.57c0-1.73-.34-2.56-1.62-3.85-1.63-1.64-4.58-2.93-10.4-4.56-6.65-1.86-9.53-3.13-12.28-5.39a15.38 15.38 0 0 1-4.89-8 23.58 23.58 0 0 1-.37-7.69c.94-5.74 4.64-10.32 10.08-12.48a28.19 28.19 0 0 1 11.4-1.7 23.87 23.87 0 0 1 11.84 3.66zm-37.95 4.16L65 63.07h-8.9v37h-10v-37H37.3v-8.16h27.48z" />
    </svg>
  )
}
```

**Step 2: Commit**

```bash
git add src/assets/icons/Typescript.tsx
git commit -m "feat: add TypeScript icon component"
```

---

## Task 7: Add train-smart Project ✅ COMPLETED

**Files:**
- Modify: `src/components/Project.tsx`
- Modify: `src/pages/Portfolio.tsx`

**Note:** You will need a screenshot for train-smart. Save it as `src/assets/images/train-smart.webp`. If no screenshot is available, skip the image for now.

**Step 1: Add icons to Project.tsx**

Add imports at top of `src/components/Project.tsx`:
```tsx
import Typescript from '../assets/icons/Typescript'
```

Add to icons object:
```typescript
const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  React: ReactIcon,
  Bootstrap,
  NodeJS,
  Express,
  Handlebars,
  MongoDB,
  MySQL,
  Tailwind,
  Sequelize,
  Vite,
  Svelte,
  Heroku,
  'Spotify API': Spotify,
  GraphQL,
  TypeScript: Typescript,
  Zustand: undefined, // No icon, will show text only
  Dexie: undefined,   // No icon, will show text only
  'React Native': ReactIcon, // Reuse React icon
}
```

**Step 2: Add train-smart to Portfolio.tsx**

Add as first project in the array:
```typescript
{
  title: 'Train Smart',
  description:
    'A cross-platform fitness tracking app with web and mobile versions for logging workouts, tracking progress, and managing exercises.',
  image: 'train-smart.webp',
  alt: 'Train Smart fitness tracking app screenshot',
  technologies: ['TypeScript', 'React', 'React Native', 'Vite', 'Tailwind', 'Zustand', 'Dexie'],
  repo: 'https://github.com/jason-lieb/train-smart',
},
```

**Step 3: Run dev server and verify**

Run: `npm run dev`
Verify: train-smart appears first in projects list

**Step 4: Commit**

```bash
git add src/components/Project.tsx src/pages/Portfolio.tsx
git commit -m "feat: add train-smart project and TypeScript icon"
```

---

## Task 8: Add Accessibility to Header ✅ COMPLETED

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Update Header.tsx with accessibility improvements**

Replace entire file:
```tsx
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `mx-1 px-3 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
      isActive ? 'border border-accent text-accent' : 'text-text hover:text-accent'
    }`

  return (
    <header>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded"
      >
        Skip to main content
      </a>
      <nav className="min-h-[4.5rem] flex items-center px-4" aria-label="Main navigation">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-2xl text-text">Jason Lieb</span>
          <button
            className="sm:hidden text-text p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            id="nav-menu"
            className={`${isOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center absolute sm:static top-[4.5rem] left-0 right-0 bg-background sm:bg-transparent p-4 sm:p-0 z-20`}
          >
            <NavLink to="/Portfolio" end className={linkClass}>
              About
            </NavLink>
            <NavLink to="/Portfolio/projects" className={linkClass}>
              Projects
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
```

**Step 2: Run lint and format**

Run: `npm run lint && npm run format`

**Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: improve Header accessibility"
```

---

## Task 9: Add Accessibility to Footer ✅ COMPLETED

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Update Footer.tsx with ARIA labels**

Replace entire file:
```tsx
import Github from '../assets/icons/Github'
import LinkedIn from '../assets/icons/LinkedIn'
import ReactIcon from '../assets/icons/React'
import Tailwind from '../assets/icons/Tailwind'

export default function Footer() {
  return (
    <footer className="h-24 flex items-center" role="contentinfo">
      <div className="w-full px-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h5 className="mx-2 text-accent text-base">Connect</h5>
            <div className="flex">
              <a
                href="https://github.com/jason-lieb"
                target="_blank"
                rel="noreferrer"
                className="m-1 p-1 min-w-[44px] min-h-[44px] flex items-center justify-center text-text hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
                aria-label="GitHub profile"
              >
                <Github className="w-10 fill-current" />
              </a>
              <a
                href="https://www.linkedin.com/in/jasonlieb/"
                target="_blank"
                rel="noreferrer"
                className="m-1 p-1 min-w-[44px] min-h-[44px] flex items-center justify-center text-text hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent rounded"
                aria-label="LinkedIn profile"
              >
                <LinkedIn className="w-10 fill-current" />
              </a>
            </div>
          </div>
          <h6 className="text-accent text-sm">© {new Date().getFullYear()} Jason Lieb</h6>
          <div className="flex flex-col items-end">
            <h5 className="mx-2 text-accent text-base">Built with</h5>
            <div className="flex" aria-label="Technologies used">
              <div className="m-1" aria-label="React">
                <ReactIcon className="w-12" />
              </div>
              <div className="m-1" aria-label="Tailwind CSS">
                <Tailwind className="w-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Run tests to ensure they still pass**

Run: `npm run test`
Expected: All tests PASS

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: improve Footer accessibility"
```

---

## Task 10: Add Page Transitions ✅ COMPLETED

**Files:**
- Modify: `src/App.css`
- Modify: `src/App.tsx`

**Step 1: Add transition CSS to App.css**

Add at end of file:
```css
/* Page transitions */
.page-enter {
  opacity: 0;
  transform: translateY(10px);
}

.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}

/* Focus styles */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

/* Skip link */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus {
  position: absolute;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

**Step 2: Update App.tsx to add main id**

Update the Routes section:
```tsx
<main id="main-content">
  <Routes>
    <Route path="/Portfolio/" element={<About />} />
    <Route path="/Portfolio/projects" element={<Portfolio />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
</main>
```

**Step 3: Run dev server and verify transitions**

Run: `npm run dev`
Verify: Skip link works, focus states visible

**Step 4: Commit**

```bash
git add src/App.css src/App.tsx
git commit -m "feat: add page transitions and focus styles"
```

---

## Task 11: Add Lazy Loading to Project Images ✅ COMPLETED

**Files:**
- Modify: `src/components/Project.tsx`

**Step 1: Update img tag in Project.tsx**

Change the img element (around line 63-68) from:
```tsx
<img
  src={getImageUrl(image)}
  alt={alt}
  className="w-full max-w-[600px] rounded-lg shadow-[0_0.5rem_1rem_rgba(52,152,219,0.5)]"
/>
```
to:
```tsx
<img
  src={getImageUrl(image)}
  alt={alt}
  loading="lazy"
  width={600}
  height={400}
  className="w-full max-w-[600px] rounded-lg shadow-[0_0.5rem_1rem_rgba(52,152,219,0.5)]"
/>
```

**Step 2: Run build to verify no errors**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/components/Project.tsx
git commit -m "perf: add lazy loading to project images"
```

---

## Task 12: Final Verification ✅ COMPLETED

**Step 1: Run all checks**

Run:
```bash
npm run format:check
npm run lint
npm run test
npm run build
```
Expected: All pass

**Step 2: Run dev server for manual review**

Run: `npm run dev`

Manual verification checklist:
- [ ] Skip link appears on Tab key press
- [ ] All links have visible focus states
- [ ] Mobile nav toggle has proper ARIA
- [ ] train-smart shows in projects list
- [ ] Copyright shows current year (2025)
- [ ] Page loads without errors

**Step 3: Commit any final fixes**

```bash
git add -A
git commit -m "chore: final cleanup and verification"
```
