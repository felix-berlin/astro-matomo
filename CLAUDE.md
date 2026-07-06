# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo structure

pnpm monorepo with two workspaces:

- `packages/astro-matomo/` — the published npm package (`astro-matomo`)
- `demo/` — local Astro site used to test the integration manually

## Commands

From repo root:

```bash
pnpm install          # install all workspaces
pnpm release          # semantic-release publish (delegates to packages/astro-matomo)
```

From `demo/`:

```bash
pnpm dev              # start dev server at localhost:4321
pnpm build            # production build
pnpm check            # astro type-check
```

## Architecture

**No build step.** The package ships raw TypeScript (`src/`) directly via `exports` in `package.json`. Astro consumes it with its own build pipeline.

### Package entry points

| Export | File | Role |
|--------|------|------|
| `astro-matomo` | `src/index.ts` | Astro integration factory (`createPlugin`) |
| `astro-matomo/matomo.ts` | `src/matomo.ts` | Client-side tracking code injected into pages |

### Integration flow

1. `createPlugin(options)` in `src/index.ts` builds an inline script string that calls `initMatomo(options)` from `matomo.ts`.
2. The script is injected via Astro's `injectScript("page", script)` hook — runs on every page.
3. `initMatomo` pushes commands to `window._paq`, dynamically inserts the Matomo `<script>` tag, and optionally starts `spaMode`.
4. `spaMode` listens for `astro:after-swap` (View Transitions API) to track navigation in SPAs.
5. `preconnectMatomo` appends a `<link rel="preconnect">` to `<head>` when `preconnect: true`.

### Type augmentation

`src/types/index.d.ts` extends `Window` with `_paq` and `_mtm` so TypeScript knows about Matomo's global arrays.

## Release process

Uses semantic-release with conventional commits. Releases publish to npm and create a GitHub release. Run from repo root: `pnpm release`. Changelog is auto-generated in `packages/astro-matomo/CHANGELOG.md`.

## Peer dependency support

Must remain compatible with astro `^2 || ^3 || ^4 || ^5 || ^6 || ^7`. Avoid APIs introduced after Astro 2.
