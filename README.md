# Astro Matomo

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
  site: "https://example.com",
  integrations: [
    matomo({
      enabled: true,
      host: "https://analytics.example.lol/",
      siteId: 666,
      heartBeatTimer: 5,
      disableCookies: true,
      debug: true,
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
