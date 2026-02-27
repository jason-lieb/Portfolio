# Portfolio Improvements Design

**Goal:** Enhance the Portfolio with code quality tooling, UI/UX polish, and updated content to better showcase professional skills for job opportunities.

**Context:** The Portfolio was recently modernized to TypeScript, Tailwind CSS 4, React 19, and Vite 6. This design adds professional tooling and polish on top of that foundation.

---

## 1. Code Quality Foundation

### ESLint + Prettier
- Add `eslint.config.js` with TypeScript and React rules (flat config format)
- Add `.prettierrc` with consistent formatting settings
- Add `lint` and `format` scripts to package.json

### Testing with Vitest
- Add Vitest + React Testing Library + jsdom
- Create tests for Header, Footer, and Project components
- Add `test` script to package.json

### GitHub Actions CI
- Create `.github/workflows/ci.yml`
- Run on pull requests: lint, type-check, test, build
- Fail fast on any errors

### Pre-commit Hooks
- Add husky + lint-staged
- Run prettier and eslint on staged files before commit

### Dependencies to Add
```
devDependencies:
  eslint
  prettier
  eslint-plugin-react
  eslint-plugin-react-hooks
  @typescript-eslint/eslint-plugin
  @typescript-eslint/parser
  vitest
  @testing-library/react
  @testing-library/jest-dom
  jsdom
  husky
  lint-staged
```

---

## 2. UI/UX Polish

### Page Transitions
- Add CSS fade transitions when navigating between pages
- Use view transitions or simple opacity/transform transitions
- Add subtle scale/shadow hover effects on project cards

### Accessibility
- Add ARIA labels to mobile nav toggle button
- Add visible focus states for keyboard navigation
- Add `aria-current="page"` to active nav links
- Add skip-to-content link at top of page

### Performance
- Add `loading="lazy"` to project images
- Add explicit `width` and `height` attributes to prevent layout shift
- Verify all images are optimized WebP format

### Responsive
- Ensure touch targets are minimum 44x44px
- Review mobile nav UX

### No new dependencies required

---

## 3. Content Update

### Add train-smart Project
- Position: First or second in projects list
- Title: "Train Smart"
- Description: Cross-platform fitness tracking app with web and mobile versions for logging workouts and tracking progress
- Technologies: TypeScript, React, React Native, Vite, Tailwind, Zustand, Dexie
- Repo: https://github.com/jason-lieb/train-smart
- Screenshot: Need to create/obtain

### Update TypeScript Display
- Add TypeScript to technologies for projects that use it
- TypeScript icon already exists in `src/assets/icons/`

### Fix Copyright Year
- Update Footer.tsx from "© 2024" to "© 2025"
- Consider making year dynamic: `new Date().getFullYear()`

---

## Implementation Order

1. Code Quality Foundation (enables clean development for remaining work)
2. Content Update (quick wins, high visibility)
3. UI/UX Polish (refinement layer)

---

## Success Criteria

- [ ] `npm run lint` passes with no errors
- [ ] `npm run test` runs component tests successfully
- [ ] GitHub Actions CI runs on PRs
- [ ] Pre-commit hooks format code automatically
- [ ] Page transitions are smooth and accessible
- [ ] Keyboard navigation works throughout site
- [ ] train-smart appears in projects list
- [ ] Copyright shows current year
- [ ] Lighthouse accessibility score >= 90
