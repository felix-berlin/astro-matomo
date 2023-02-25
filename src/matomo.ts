import type {MatomoOptions} from "./index.js";

export function initMatomo(options: MatomoOptions) {
  const _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['disableCookies']);
  _paq.push(['enableHeartBeatTimer', 5]);
  if (options?.cookieDomain)_paq.push(['setCookieDomain', options.cookieDomain]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);

  if (options?.debug) {
    window._mtm = window._mtm || [];
    window._mtm.push(['enableDebugMode']);
  }

  console.log('Matomo initialized!', options.host);


  (function() {
    const u = options?.host;
    _paq.push(['setTrackerUrl', u + 'matomo.php']);
    _paq.push(['setSiteId', options?.siteId]);
    const d = document;
    const g = d.createElement('script');
    const s = d.getElementsByTagName('script')[0];

    g.id = 'matomo-script';

    g.type = 'text/javascript';
    g.async = true;
    g.defer = true;
    g.src = u + 'matomo.js';
    if (s.parentNode != null && u) {
      console.log('Matomo script injected!');

      s.parentNode.insertBefore(g, s);
    }
  })();
};