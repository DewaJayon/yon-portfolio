# Repository Guide

## Commands

- Use npm (`package-lock.json` is committed): `npm run dev`, `npm run build`, `npm run lint`, `npm run test:run`, and `npm run format:check`.
- `npm run test` starts Vitest in watch mode. Tests live in `tests/` and run in JSDOM with Vitest globals.
- Prettier uses single quotes, semicolons, and four-space indentation. `src/components/ui/` is intentionally ignored by Prettier.

## Application Structure

- This is a JavaScript-only Vue 3 Vite SPA. `src/main.js` loads `src/style.css` and mounts `src/App.vue`.
- `@/` resolves to `src/` in both `vite.config.js` and `jsconfig.json`; use it for app imports.
- Tailwind is v4 via `@tailwindcss/vite`; there is no Tailwind config file. Global theme tokens belong in `src/style.css`.

## UI And Styling

- Follow `page-template/DESIGN.md`: the visual system is sharp-cornered, emerald/black brutalism with Anton, Hanken Grotesk, and Space Grotesk. Preserve the tokens, font import, dot grid, and hard-shadow treatment in `src/style.css`.
- shadcn components are Vue source files in `src/components/ui/`. Use `npx shadcn-vue@latest`, never `npx shadcn` (the latter is the React CLI).
- `shadcn-vue add` can rewrite `src/style.css`; inspect and restore the project theme after each add. Do not run `init --force` or apply a preset without explicit approval because they overwrite CSS variables and components.
- For shadcn-vue work, follow `.agents/skills/shadcn-vue/SKILL.md`, including its component, form, icon, and semantic-token rules.
- ESLint relaxes multi-word component names and default prop requirements only for generated `src/components/ui/**/*.vue` files.
