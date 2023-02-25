import type { AstroConfig, AstroIntegration } from 'astro';

export type MatomoOptions = {
  host: string,
  siteId: number,
  cookieDomain?: string,
  heartBeatTimer?: number,
  disableCookies?: boolean,
  debug?: boolean
}

export default function createPlugin(options: MatomoOptions): AstroIntegration {
  let config: AstroConfig;

  return {
    name: 'astro-matomo',
    hooks: {
      'astro:config:setup': ({ config, injectScript }) => {
        injectScript(
          "page",
          `import {initMatomo} from 'astro-matomo/matomo.ts'; initMatomo(${JSON.stringify(options)});`
        )
      },
    },
  };
}