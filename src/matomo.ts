import type {MatomoOptions} from "./index.js";

export function initMatomo(options: MatomoOptions) {
  if (!options.enabled) {
    console.warn('Matomo is disabled!');
    return;
  }

  const _paq = (window._paq = window._paq || []);

  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  if (options?.disableCookies) _paq.push(['disableCookies']);
  if (options?.heartBeatTimer) _paq.push(['enableHeartBeatTimer', options.heartBeatTimer]);
  if (options?.cookieDomain) _paq.push(['setCookieDomain', options.cookieDomain]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);

  if (options?.debug) {
    console.warn('Matomo debug mode enabled!');
    window._mtm = window._mtm || [];
    window._mtm.push(['enableDebugMode']);
  }

  (function() {
    const u = options?.host;

    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', options?.siteId]);

    const d = document,
          g = d.createElement('script'),
          s = d.getElementsByTagName('script')[0];

    g.id = 'matomo-script';
    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'matomo.js';
    if (s.parentNode != null && u) s.parentNode.insertBefore(g, s);
  })();
};