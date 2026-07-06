# astro-matomo

![npm](https://img.shields.io/npm/dm/astro-matomo?logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/v/astro-matomo?logo=npm&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/felix-berlin/astro-matomo/release.yml?label=release&logo=github&style=flat-square)

Matomo integration for Astro.

Package docs, options and usage examples: [packages/astro-matomo/README.md](packages/astro-matomo/README.md)

## Repo structure

pnpm monorepo:

- [`packages/astro-matomo/`](packages/astro-matomo) — the published npm package (`astro-matomo`)
- [`demo/`](demo) — local Astro site used to test the integration manually

## Development

```bash
pnpm install          # install all workspaces
```

From `demo/`:

```bash
pnpm dev              # start dev server at localhost:4321
pnpm build            # production build
pnpm check            # astro type-check
```

## Release

Uses [semantic-release](https://semantic-release.gitbook.io/) with [Conventional Commits](https://www.conventionalcommits.org/). Run from repo root:

```bash
pnpm release
```

## License

GPL-3.0
