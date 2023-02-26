# Astro Matomo

![npm](https://img.shields.io/npm/dm/astro-matomo?logo=npm&style=flat-square)
![npm](https://img.shields.io/npm/v/astro-matomo?logo=npm&style=flat-square)
![GitHub package.json version](https://img.shields.io/github/package-json/v/felix-berlin/astro-matomo?label=github&logo=github&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/felix-berlin/astro-matomo/release.yml?label=release&logo=github&style=flat-square)

## Installation

```bash
npm install astro-matomo
```

Or via [Automatic Integration Setup](https://docs.astro.build/en/guides/integrations-guide/#automatic-integration-setup):

```bash
npx astro add astro-matomo
```

## Options

| Options        | Type      | Description                                    |
| -------------- | --------- | ---------------------------------------------- |
| enabled        | `boolean` | Controls if the matomo script should be loaded |
| host           | `string`  | Url to your matomo installation                |
| siteId         | `number`  | Matomo site id.                                |
| heartBeatTimer | `number`  | If set the heart beat time will be enabled     |
| disableCookies | `boolean` | If set cookies will be disabled                |
| debug          | `boolean` | Activate debug mode                            |

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
npm link
```

Go to the demo project and link the package:

```bash
npm link astro-matomo
```

Start the dev server:

```bash
npm run dev
```
