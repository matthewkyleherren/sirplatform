# Repository Guidelines

## Project Structure & Module Organization
This codebase uses the Next.js App Router: primary routes live inside `app/`, with `app/page.tsx` powering the landing screen and feature folders such as `app/our-story/page.tsx` supplying additional views. Shared UI exists under `components/` (header/footer shells, link primitives, sections, and slider widgets), while domain logic, hooks, and tokens are grouped under `lib/data`, `lib/hooks`, `lib/styles`, and `lib/utils`. Static assets belong in `public/`, and global styles sit in `app/globals.css` with component-scoped overrides stored beside each `.tsx` file as `*.module.css`.

## Build, Test, and Development Commands
- `bun install` — install dependencies (use Bun for reproducible lockfile + scripts).
- `bun run dev` — launch the Turbopack-powered Next.js dev server at `http://localhost:3000`.
- `bun run build` — create the optimized production bundle (runs type checking by default).
- `bun run start` — serve the latest build; use this when validating deployment artifacts.
- `bunx next lint` — run Next.js’ lint pipeline against the project.
- `bunx biome check .` — enforce Biome formatting/lint rules before committing.
- (When tests are added) `bun test` — run colocated `*.test.tsx`/`*.test.ts` suites with the Bun test runner.

## Bun-First Workflow & Runtime APIs
Always reach for Bun tooling before Node.js alternatives: use `bun <script.ts>` or `bun --hot index.ts` for one-off scripts, `bun build` for bundling, and `bunx <pkg>` rather than `npx`. When implementing backend utilities, prefer `Bun.serve()` for HTTP/WebSocket endpoints, `Bun.file` for filesystem reads, `bun:sqlite` or `Bun.sql` for databases, and Bun’s builtin `WebSocket` instead of Express, better-sqlite3, pg, or ws. Bun already loads `.env` files, so avoid dotenv and keep secrets in `.env.local`. This ensures consistency with the CLAUDE-to-Codex migration requirements and keeps the repo aligned with the Bun runtime.

## Coding Style & Naming Conventions
Code is TypeScript-first; default to `.tsx` modules, using Server Components unless a browser API forces `"use client"`. Follow the observed `kebab-case` file naming (for example `components/header/header-nav.tsx`), `PascalCase` component exports, and `camelCase` helpers. Tailwind CSS v4 utilities are encouraged for layout, with CSS modules reserved for animations (see `components/header/header-ticker.module.css`). Biome enforces tab indentation and a 100 character line width; run `bunx biome format .` when bulk-editing files. Keep hooks under `lib/hooks`, data constants in `lib/data`, and avoid importing across layers unless absolutely necessary.

## Testing Guidelines
An automated suite is not yet committed, so manual QA via `bun run dev` remains the baseline. When adding coverage, colocate unit tests next to the source as `component.test.tsx` (or use an adjacent `__tests__` directory) and run them with `bun test` (Bun’s `bun:test` module). React Testing Library pairs well with `bun test`, and you should include accessibility assertions (focus order, ARIA landmarks) for interactive pieces like the navigation menu and keen-slider sections. Document any new test helpers inside `lib/utils/testing` so they can be reused.

## Commit & Pull Request Guidelines
Adopt Conventional Commits (`feat: add accordion section`, `fix: guard keen slider SSR`) to keep the history searchable; keep subject lines under 72 characters and reference tickets when available. Every PR should contain: a short problem/solution summary, screenshots or recordings for visual tweaks, a checklist of commands executed (`bun run build`, lint/test runs), and disclosure of new environment variables or migrations. Request a reviewer for any change touching shared primitives or layout so downstream pages stay consistent.

## Environment & Configuration Tips
Use `.env.local` for secrets; both Next.js and Bun load it automatically, and only `NEXT_PUBLIC_*` keys are safe for client bundles. Record any new configuration knobs in `README.md` and provide sensible defaults inside `next.config.ts` or `lib/styles/tokens`. Static imagery should be added to `public/` and referenced via `next/image` to leverage automatic optimization.
