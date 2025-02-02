import { defineConfig } from "astro/config";
import matomo from "astro-matomo";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [
    matomo({
      enabled: true,
      host: "https://analytics.webshaped.de/",
      setCookieDomain: "*.localhost",
      siteId: 9,
      debug: false,
      heartBeatTimer: 5,
      preconnect: true,
      viewTransition: true,
    }),
  ],
});
