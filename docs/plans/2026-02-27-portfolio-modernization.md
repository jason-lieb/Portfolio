# Portfolio Modernization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert portfolio from Bootstrap/JavaScript to Tailwind CSS/TypeScript while preserving visual design.

**Architecture:** Clean slate rewrite - create new TypeScript files with Tailwind styling that visually match the current Bootstrap implementation. Components are converted bottom-up (icons first, then components, then pages).

**Tech Stack:** React 19, TypeScript 5.7, Vite 6, Tailwind CSS 4, React Router 7

---

## Task 1: Update Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Update package.json**

Replace entire contents with:

```json
{
  "name": "portfolio",
  "version": "0.1.0",
  "homepage": "https://jason-lieb.github.io/Portfolio",
  "type": "module",
  "scripts": {
    "dev": "vite --open",
    "build": "tsc -b && vite build",
    "preview": "vite preview --open",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "gh-pages": "^6.3.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^6.1.0"
  }
}
```

**Step 2: Verify file saved correctly**

Run: `cat package.json | head -20`

**Step 3: Commit**

```bash
git add package.json
git commit -m "chore: update dependencies for modernization

- React 19, Vite 6, React Router 7
- Add TypeScript and Tailwind CSS 4
- Remove Bootstrap dependencies"
```

---

## Task 2: Add TypeScript Configuration

**Files:**
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`

**Step 1: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Step 2: Create tsconfig.node.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

**Step 3: Commit**

```bash
git add tsconfig.json tsconfig.node.json
git commit -m "chore: add TypeScript configuration"
```

---

## Task 3: Update Vite Configuration

**Files:**
- Create: `vite.config.ts`
- Delete: `vite.config.js`

**Step 1: Create vite.config.ts**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
```

**Step 2: Delete old config**

```bash
rm vite.config.js
```

**Step 3: Commit**

```bash
git add vite.config.ts
git add -u vite.config.js
git commit -m "chore: convert vite config to TypeScript and add Tailwind plugin"
```

---

## Task 4: Create Types

**Files:**
- Create: `src/types/index.ts`

**Step 1: Create types directory and file**

```typescript
export interface Project {
  title: string
  description: string
  image: string
  alt: string
  technologies: string[]
  repo: string
  deploy?: string
}

export interface IconProps {
  className?: string
}
```

**Step 2: Commit**

```bash
git add src/types/index.ts
git commit -m "feat: add TypeScript type definitions"
```

---

## Task 5: Update Entry Point and App CSS

**Files:**
- Create: `src/index.tsx`
- Modify: `src/App.css`
- Modify: `index.html`

**Step 1: Create src/index.tsx**

```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

**Step 2: Update index.html**

Change line 11 from:
```html
<script type="module" src="/src/index.jsx"></script>
```
to:
```html
<script type="module" src="/src/index.tsx"></script>
```

**Step 3: Replace App.css with Tailwind setup**

```css
@import "tailwindcss";

@theme {
  --color-background: #1c1d25;
  --color-card: #17202a;
  --color-text: #b0b2c3;
  --color-accent: #3498db;
  --font-family-sans: 'Roboto', sans-serif;
}

*::-webkit-scrollbar {
  display: none;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background);
  font-family: var(--font-family-sans);
}
```

**Step 4: Commit**

```bash
git add src/index.tsx src/App.css index.html
git commit -m "feat: add TypeScript entry point and Tailwind CSS config"
```

---

## Task 6: Convert Icon Components

**Files:**
- Modify: All files in `src/assets/icons/` (rename .jsx to .tsx, add types)

**Step 1: Create a batch conversion script**

For each icon file, the pattern is the same. Example for Github.tsx:

```typescript
import type { IconProps } from '../../types'

export default function Github({ className }: IconProps) {
  return (
    <svg fill="currentColor" viewBox="0 0 36 36" className={className}>
      <path d="M18 0C8.055 0 0 8.25874 0 18.4553C0 26.6218 5.1525 33.5194 12.3075 35.9647C13.2075 36.1262 13.545 35.5726 13.545 35.0881C13.545 34.6498 13.5225 33.1965 13.5225 31.6508C9 32.5044 7.83 30.5204 7.47 29.4823C7.2675 28.9517 6.39 27.3138 5.625 26.8755C4.995 26.5295 4.095 25.6759 5.6025 25.6529C7.02 25.6298 8.0325 26.9909 8.37 27.5445C9.99 30.3359 12.5775 29.5515 13.6125 29.0671C13.77 27.8675 14.2425 27.0601 14.76 26.5987C10.755 26.1373 6.57 24.5455 6.57 17.4864C6.57 15.4794 7.2675 13.8184 8.415 12.5265C8.235 12.0651 7.605 10.1735 8.595 7.63588C8.595 7.63588 10.1025 7.15142 13.545 9.52754C14.985 9.1123 16.515 8.90468 18.045 8.90468C19.575 8.90468 21.105 9.1123 22.545 9.52754C25.9875 7.12836 27.495 7.63588 27.495 7.63588C28.485 10.1735 27.855 12.0651 27.675 12.5265C28.8225 13.8184 29.52 15.4563 29.52 17.4864C29.52 24.5686 25.3125 26.1373 21.3075 26.5987C21.96 27.1754 22.5225 28.2827 22.5225 30.0129C22.5225 32.4813 22.5 34.4653 22.5 35.0881C22.5 35.5726 22.8375 36.1493 23.7375 35.9647C27.3108 34.7278 30.4158 32.3732 32.6155 29.2322C34.8152 26.0912 35.9989 22.3221 36 18.4553C36 8.25874 27.945 0 18 0Z" />
    </svg>
  )
}
```

Apply this pattern to all 26 icon files:
- Add `import type { IconProps } from '../../types'`
- Add `{ className }: IconProps` parameter
- Add `className={className}` to svg element
- Change hardcoded fill colors to `currentColor` where appropriate (Github, LinkedIn, ExternalLink)
- Rename from .jsx to .tsx

**Step 2: Delete old .jsx icon files after creating .tsx versions**

**Step 3: Commit**

```bash
git add src/assets/icons/
git commit -m "feat: convert icon components to TypeScript"
```

---

## Task 7: Convert Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Delete: `src/components/Footer.jsx`

**Step 1: Create Footer.tsx**

```typescript
import Github from '../assets/icons/Github'
import LinkedIn from '../assets/icons/LinkedIn'
import ReactIcon from '../assets/icons/React'
import Tailwind from '../assets/icons/Tailwind'

export default function Footer() {
  return (
    <footer className="h-24 flex items-center">
      <div className="w-full px-4">
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <h5 className="mx-2 text-accent text-base">Connect</h5>
            <div className="flex">
              <a
                href="https://github.com/jason-lieb"
                target="_blank"
                rel="noreferrer"
                className="m-1 text-text hover:text-accent"
              >
                <Github className="w-12 fill-current" />
              </a>
              <a
                href="https://www.linkedin.com/in/jasonlieb/"
                target="_blank"
                rel="noreferrer"
                className="m-1 text-text hover:text-accent"
              >
                <LinkedIn className="w-12 fill-current" />
              </a>
            </div>
          </div>
          <h6 className="text-accent text-sm">© 2024 Jason Lieb</h6>
          <div className="flex flex-col items-end">
            <h5 className="mx-2 text-accent text-base">Built with</h5>
            <div className="flex">
              <div className="m-1">
                <ReactIcon className="w-12" />
              </div>
              <div className="m-1">
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

**Step 2: Delete old file**

```bash
rm src/components/Footer.jsx
```

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git add -u src/components/Footer.jsx
git commit -m "feat: convert Footer to TypeScript with Tailwind"
```

---

## Task 8: Convert Header Component

**Files:**
- Create: `src/components/Header.tsx`
- Delete: `src/components/Header.jsx`

**Step 1: Create Header.tsx**

```typescript
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `mx-1 px-2 py-1.5 rounded transition-colors ${
      isActive
        ? 'border border-accent text-accent'
        : 'text-text hover:text-accent'
    }`

  return (
    <header>
      <nav className="min-h-[4.5rem] flex items-center px-4">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-2xl text-text">Jason Lieb</span>
          <button
            className="sm:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`${isOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center absolute sm:static top-[4.5rem] left-0 right-0 bg-background sm:bg-transparent p-4 sm:p-0`}>
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

**Step 2: Delete old file**

```bash
rm src/components/Header.jsx
```

**Step 3: Commit**

```bash
git add src/components/Header.tsx
git add -u src/components/Header.jsx
git commit -m "feat: convert Header to TypeScript with Tailwind"
```

---

## Task 9: Convert Project Component

**Files:**
- Create: `src/components/Project.tsx`
- Delete: `src/components/Project.jsx`

**Step 1: Create Project.tsx**

```typescript
import type { Project as ProjectType } from '../types'
import ReactIcon from '../assets/icons/React'
import Bootstrap from '../assets/icons/Bootstrap'
import Express from '../assets/icons/Express'
import Handlebars from '../assets/icons/Handlebars'
import MySQL from '../assets/icons/MySQL'
import MongoDB from '../assets/icons/MongoDB'
import Sequelize from '../assets/icons/Sequelize'
import Tailwind from '../assets/icons/Tailwind'
import NodeJS from '../assets/icons/NodeJS'
import Vite from '../assets/icons/Vite'
import Svelte from '../assets/icons/Svelte'
import Heroku from '../assets/icons/Heroku'
import Github from '../assets/icons/Github'
import ExternalLink from '../assets/icons/ExternalLink'
import Spotify from '../assets/icons/Spotify'
import GraphQL from '../assets/icons/GraphQL'

interface ProjectProps extends ProjectType {
  index: number
}

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
}

function getImageUrl(imageName: string): string {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href
}

export default function Project({
  title,
  description,
  image,
  alt,
  technologies,
  repo,
  deploy,
  index,
}: ProjectProps) {
  const isEven = index % 2 === 0
  const textAlign = isEven ? 'text-right' : 'text-left'
  const selfAlign = isEven ? 'self-end' : 'self-start'

  return (
    <div className="py-4 px-4 md:px-12 max-w-4xl mx-auto">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-0 relative">
        {/* Image */}
        <div className={`col-span-12 md:col-span-7 ${isEven ? 'md:col-start-1' : 'md:col-start-6'} row-start-1`}>
          <img
            src={getImageUrl(image)}
            alt={alt}
            className="w-full max-w-[600px] rounded-lg shadow-[0_0.5rem_1rem_rgba(52,152,219,0.5)]"
          />
        </div>

        {/* Content */}
        <div className={`col-span-12 md:col-span-7 ${isEven ? 'md:col-start-6' : 'md:col-start-1'} row-start-1 flex flex-col justify-center py-4 md:py-8 z-10`}>
          <h3 className={`text-accent text-xl font-semibold px-3 ${textAlign}`}>
            {title}
          </h3>
          <div className="bg-card rounded-lg p-4 shadow-[0_0.5rem_1rem_rgba(52,152,219,0.25)] mt-2">
            <p className="text-text mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => {
                const Icon = icons[tech]
                return (
                  <span key={tech} className="text-text text-sm flex items-center mr-2">
                    {Icon && <Icon className="w-5 mr-1" />}
                    {tech}
                  </span>
                )
              })}
            </div>
          </div>
          <div className={`flex gap-2 p-2 mt-2 ${selfAlign}`}>
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:text-text transition-colors"
            >
              <Github className="w-8 fill-current" />
            </a>
            {deploy && (
              <a
                href={deploy}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-text transition-colors"
              >
                <ExternalLink className="w-8 fill-current" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
```

**Step 2: Delete old file**

```bash
rm src/components/Project.jsx
```

**Step 3: Commit**

```bash
git add src/components/Project.tsx
git add -u src/components/Project.jsx
git commit -m "feat: convert Project component to TypeScript with Tailwind"
```

---

## Task 10: Convert About Page

**Files:**
- Create: `src/pages/About.tsx`
- Delete: `src/pages/About.jsx`

**Step 1: Create About.tsx**

```typescript
import profilePic from '../assets/images/profile-pic.webp'

export default function About() {
  return (
    <main>
      <div className="min-h-[calc(100vh-10.5rem)] flex justify-center items-center px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="relative m-12">
            <div className="absolute inset-0 translate-x-3 translate-y-3 border-4 border-accent rounded-2xl" />
            <img
              className="relative rounded-2xl w-[clamp(200px,calc(200px+12vw),350px)]"
              src={profilePic}
              alt="Profile"
            />
          </div>
          <div className="flex flex-col justify-center px-4 lg:mx-12">
            <h5 className="text-text text-base">Hi, my name is</h5>
            <h1 className="text-accent text-4xl font-bold">Jason Lieb</h1>
            <h4 className="text-text text-xl">Full Stack Software Engineer</h4>
            <p className="text-text">
              I'm a <span className="text-accent">software engineer</span> based in Atlanta, GA.
            </p>
            <p className="text-text">I write mostly Typescript, React, Haskell, and Nix.</p>
            <div className="mt-4">
              <a
                className="inline-block border border-accent text-text hover:text-accent px-4 py-2 rounded-lg text-center w-32"
                href="/Portfolio/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
```

**Step 2: Delete old file**

```bash
rm src/pages/About.jsx
```

**Step 3: Commit**

```bash
git add src/pages/About.tsx
git add -u src/pages/About.jsx
git commit -m "feat: convert About page to TypeScript with Tailwind"
```

---

## Task 11: Convert Portfolio Page

**Files:**
- Create: `src/pages/Portfolio.tsx`
- Delete: `src/pages/Portfolio.jsx`

**Step 1: Create Portfolio.tsx**

```typescript
import type { Project as ProjectType } from '../types'
import Project from '../components/Project'

const projects: ProjectType[] = [
  {
    title: 'Browser Interface',
    description:
      'A chromium-based extension that saves tabs as markdown to your filesystem to manage them.',
    image: 'browser-interface.webp',
    alt: 'Browser Interface screenshot',
    technologies: ['Typescript', 'React', 'Vite', 'Pico.CSS', 'Chrome Manifest V3'],
    repo: 'https://github.com/jason-lieb/Browser-Interface',
    deploy:
      'https://chromewebstore.google.com/detail/browser-interface/eciohhdfhkkihkiiefldkejohdoghogo',
  },
  {
    title: 'Obsidian Plugin',
    description:
      'An obsidian plugin that pairs with a chrome extension to manage your tabs in obsidian.',
    image: 'obsidian-browser-interface-plugin.webp',
    alt: 'Obsidian Browser Interface Plugin screenshot',
    technologies: ['Typescript', 'OOP'],
    repo: 'https://github.com/jason-lieb/Browser-Interface',
    deploy: 'https://obsidian.md/plugins?id=browser-interface',
  },
  {
    title: 'Rhythm Room',
    description:
      'A full-stack MERN web application to create and share playlists using Spotify and OpenAI APIs',
    image: 'rhythm-room.webp',
    alt: 'Rhythm Room screenshot',
    technologies: [
      'React',
      'NodeJS',
      'Express',
      'MongoDB',
      'GraphQL',
      'Heroku',
      'Spotify API',
      'OpenAI API',
      'Material UI',
    ],
    repo: 'https://github.com/jason-lieb/Rhythm-Room',
  },
  {
    title: 'Browse Smart',
    description:
      'A Chrome Extension that creates a pinned tab in each window and syncs with a background service worker to display open tabs and allow the user to delete or sleep tabs for organization and speed. Published on the Chrome Web Store.',
    image: 'browse-smart.webp',
    alt: 'Browse Smart screenshot',
    technologies: ['Svelte', 'Vite', 'Pico.CSS', 'Chrome Manifest V3'],
    repo: 'https://github.com/jason-lieb/Browse-Smart',
  },
  {
    title: 'Fiesta Collector',
    description:
      'An inventory application for collections of Art Deco style dinnerware using Express and MySQL',
    image: 'fiesta-collector.webp',
    alt: 'Collection of fiestaware',
    technologies: ['NodeJS', 'Express', 'MySQL', 'Handlebars', 'Tailwind', 'Heroku'],
    repo: 'https://github.com/jason-lieb/Fiesta-Collector',
  },
  {
    title: 'Stock Visualizer',
    description:
      'A single page application that shows historical data for popular stocks, currency exchange rates, and US government data',
    image: 'stock-visualizer.webp',
    alt: 'Stock chart on computer',
    technologies: ['React', 'Bootstrap', 'Vite', 'React Query', 'Google Charts'],
    repo: 'https://github.com/jason-lieb/Stock-Visualizer',
  },
]

export default function Portfolio() {
  return (
    <main className="min-h-[calc(100vh-10.5rem)] py-4">
      {projects.map((project, index) => (
        <Project key={project.title} index={index} {...project} />
      ))}
    </main>
  )
}
```

**Step 2: Delete old file**

```bash
rm src/pages/Portfolio.jsx
```

**Step 3: Commit**

```bash
git add src/pages/Portfolio.tsx
git add -u src/pages/Portfolio.jsx
git commit -m "feat: convert Portfolio page to TypeScript with Tailwind"
```

---

## Task 12: Convert ErrorPage

**Files:**
- Create: `src/pages/ErrorPage.tsx`
- Delete: `src/pages/ErrorPage.jsx`

**Step 1: Create ErrorPage.tsx**

```typescript
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <main className="min-h-[calc(100vh-10.5rem)] flex flex-col items-center justify-center">
      <h1 className="text-accent text-4xl font-bold mb-4">404</h1>
      <p className="text-text mb-4">Page not found</p>
      <Link
        to="/Portfolio"
        className="border border-accent text-text hover:text-accent px-4 py-2 rounded-lg"
      >
        Go Home
      </Link>
    </main>
  )
}
```

**Step 2: Delete old file**

```bash
rm src/pages/ErrorPage.jsx
```

**Step 3: Commit**

```bash
git add src/pages/ErrorPage.tsx
git add -u src/pages/ErrorPage.jsx
git commit -m "feat: convert ErrorPage to TypeScript with Tailwind"
```

---

## Task 13: Convert App Component

**Files:**
- Create: `src/App.tsx`
- Delete: `src/App.jsx`

**Step 1: Create App.tsx**

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Portfolio/" element={<About />} />
        <Route path="/Portfolio/projects" element={<Portfolio />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
```

**Step 2: Delete old file**

```bash
rm src/App.jsx
```

**Step 3: Commit**

```bash
git add src/App.tsx
git add -u src/App.jsx
git commit -m "feat: convert App to TypeScript"
```

---

## Task 14: Cleanup Old Files

**Files:**
- Delete: `src/index.jsx`
- Delete: All remaining `.jsx` files

**Step 1: Remove old entry point**

```bash
rm src/index.jsx
```

**Step 2: Verify no .jsx files remain**

```bash
find src -name "*.jsx" -type f
```

Expected: No output (all converted)

**Step 3: Commit cleanup**

```bash
git add -u
git commit -m "chore: remove old JavaScript files"
```

---

## Task 15: Install Dependencies and Test

**Step 1: Install dependencies**

```bash
npm install
```

**Step 2: Run development server**

```bash
npm run dev
```

**Step 3: Visual verification checklist**

- [ ] Home page loads with profile photo and bio
- [ ] Navigation works (About / Projects links)
- [ ] Projects page shows all 6 projects
- [ ] Project cards alternate left/right layout
- [ ] Footer shows social links and "Built with" icons
- [ ] Mobile responsive menu works
- [ ] All links open in new tabs

**Step 4: Build for production**

```bash
npm run build
```

Expected: Build completes without errors

**Step 5: Commit verification**

```bash
git add -A
git commit -m "chore: verify build and visual parity"
```

---

## Task 16: Deploy to GitHub Pages

**Step 1: Deploy**

```bash
npm run deploy
```

**Step 2: Verify live site**

Visit: https://jason-lieb.github.io/Portfolio/

**Step 3: Final commit if any adjustments needed**

```bash
git add -A
git commit -m "fix: deployment adjustments"
```
