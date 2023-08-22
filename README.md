# Astro Matomo

![npm](https://img.shields.io/npm/dm/astro-matomo?logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/v/astro-matomo?logo=npm&style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/felix-berlin/astro-matomo?label=github&logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/felix-berlin/astro-matomo/release.yml?label=release&logo=github&style=flat-square)

## Installation

```bash
pnpm add astro-matomo

npm install astro-matomo

yarn add astro-matomo
```

Or via [Automatic Integration Setup](https://docs.astro.build/en/guides/integrations-guide/#automatic-integration-setup):

```bash
npx astro add astro-matomo
```

## Options

| Options            | Type      | Description                                               |
| ------------------ | --------- | --------------------------------------------------------- |
| `enabled`          | `boolean` | Controls if the matomo script should be loaded            |
| `host`             | `string`  | Url to your matomo installation                           |
| `siteId`           | `number`  | Matomo site id.                                           |
| `heartBeatTimer?`  | `number`  | If set the heart beat timer will be enabled               |
| `disableCookies?`  | `boolean` | If set cookies will be disabled                           |
| `preconnect?`      | `boolean` | Will create a preconnect link pointing to the matomo host |
| `setCookieDomain?` | `string`  | Share the tracking cookie across multiple domains         |
| `trackerUrl?`      | `string`  | Defaults to matomo.php                                    |
| `srcUrl?`          | `string`  | Defaults to matomo.js                                     |
| `debug?`           | `boolean` | Activate debug mode                                       |

## Example usage

```js
// astro.config.mjs

import { defineConfig } from 'astro/config';
import matomo from 'astro-matomo';

// https://astro.build/config
export default defineConfig({
  site: "https://example.lol",
  integrations: [
    matomo({
      enabled: import.meta.env.PROD, // Only load in production
      host: "https://analytics.example.lol/",
      setCookieDomain: "*.example.lol",
      trackerUrl: "js/", // defaults to matomo.php
      srcUrl: "js/", // defaults to matomo.js
      siteId: 666,
      heartBeatTimer: 5,
      disableCookies: true,
      debug: false,
    }),
  ]
});

```

## Development

Make the package available in your local environment:

```bash
pnpm link .

npm link
```

Go to the demo project and link the package:

```bash
pnpm link astro-matomo

npm link astro-matomo
```

Start the dev server:

```bash
pnpm run dev

npm run dev
```
