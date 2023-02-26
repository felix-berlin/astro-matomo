import type { AstroIntegration } from 'astro';

export type MatomoOptions = | {
  enabled: boolean,
  host: string,
  siteId: number,
  heartBeatTimer?: number,
  disableCookies?: boolean,
  preconnect?: boolean,
  debug?: boolean
} | undefined;

export default function createPlugin(options: MatomoOptions): AstroIntegration {
  let script = `import {initMatomo, preconnectMatomo} from 'astro-matomo/matomo.ts'; initMatomo(${JSON.stringify(options)});`

  if (options?.preconnect) script += `preconnectMatomo(${JSON.stringify(options)});`

  if (!options?.enabled) {
    console.warn('Matomo is disabled!');
    script = "";
  }

  return {
    name: 'astro-matomo',
    hooks: {
      'astro:config:setup': async ({ injectScript }) => {
        injectScript(
          "page",
          script
        )
      },
    },
  };
}