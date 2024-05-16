import type { MatomoOptions } from "./index.js";

/**
 * Init Matomo
 *
 * @param   {MatomoOptions}  options
 *
 * @return  {void}
 */
export function initMatomo(options: MatomoOptions): void {
  const _paq = (window._paq = window._paq || []);

  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  if (options?.disableCookies) _paq.push(["disableCookies"]);
  if (options?.heartBeatTimer)
    _paq.push(["enableHeartBeatTimer", options.heartBeatTimer]);
  if (options?.setCookieDomain)
    _paq.push(["setCookieDomain", options.setCookieDomain]);

  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);

  if (options?.debug) {
    console.warn("Matomo debug mode enabled!");
    window._mtm = window._mtm || [];
    window._mtm.push(["enableDebugMode"]);
  }

  (function () {
    const u = options?.host;

    _paq.push(["setTrackerUrl", u + (options?.trackerUrl || "matomo.php")]);
    _paq.push(["setSiteId", options?.siteId]);

    const d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];

    if (options?.crossOrigin) g.crossOrigin = options.crossOrigin;

    g.id = "matomo-script";
    g.type = `text/${options?.partytown ? "partytown" : "javascript"}`;
    g.async = true;
    g.defer = true;
    g.src = u + (options?.srcUrl || "matomo.js");
    if (s.parentNode != null && u) s.parentNode.insertBefore(g, s);
  })();
}

/**
 * Generate a preconnect link for the Matomo host
 *
 * @param   {MatomoOptions}  options
 *
 * @return  {void}
 */
export function preconnectMatomo(options: MatomoOptions): void {
  if (!options?.host) return;

  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = options?.host;
  document.head.appendChild(link);
}
