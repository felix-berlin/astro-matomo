import { defineConfig } from 'astro/config';
import matomo from 'astro-matomo';

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    matomo({
      host: "https://analytics.webshaped.de/",
      debug: true,
    }),
  ]

});
