import { defineConfig } from 'astro/config';
import matomo from 'astro-matomo';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    matomo({
      enabled: true,
      host: "https://analytics.webshaped.de/",
      siteId: 9,
      debug: true,
      heartBeatTimer: 5,
    }),
  ]

});
