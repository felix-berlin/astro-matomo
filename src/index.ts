import type { AstroIntegration } from "astro";

export type MatomoOptions =
  | {
      enabled: boolean;
      host: string;
      siteId: number;
      trackerUrl?: string;
      srcUrl?: string;
      heartBeatTimer?: number;
      setCookieDomain?: string;
      disableCookies?: boolean;
      preconnect?: boolean;
      debug?: boolean;
      partytown?: boolean;
      viewTransition?: boolean | { contentElement: string };
    }
  | undefined;

export default function createPlugin(options: MatomoOptions): AstroIntegration {
  let script = `import {initMatomo, preconnectMatomo} from 'astro-matomo/matomo.ts'; initMatomo(${JSON.stringify(
    options
  )});`;

  if (options?.preconnect)
    script += `preconnectMatomo(${JSON.stringify(options)});`;

  if (!options?.enabled) {
    console.info(
      "\x1b[44m",
      "Matomo",
      "\x1b[0m",
      "\x1b[34m",
      "Is disabled.",
      "\x1b[0m"
    );

    script = "";
  }

  return {
    name: "astro-matomo",
    hooks: {
      "astro:config:setup": async ({ injectScript }) => {
        injectScript("page", script);
      },
    },
  };
}
