import type { AstroIntegration } from 'astro';

export type MatomoOptions = {
  enabled: boolean,
  host: string,
  siteId: number,
  cookieDomain?: string,
  heartBeatTimer?: number,
  disableCookies?: boolean,
  debug?: boolean
}

export default function createPlugin(options: MatomoOptions): AstroIntegration {
  return {
    name: 'astro-matomo',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        injectScript(
          "page",
          `import {initMatomo} from 'astro-matomo/matomo.ts'; initMatomo(${JSON.stringify(options)});`
        )
      },
    },
  };
}