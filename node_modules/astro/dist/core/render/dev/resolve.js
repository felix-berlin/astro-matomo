import { resolveIdToUrl } from "../../util.js";
function createResolve(loader, root) {
  return async function(s) {
    const url = await resolveIdToUrl(loader, s, root);
    if (url.startsWith("/") && url.endsWith(".jsx")) {
      return url.slice(0, -4);
    } else {
      return url;
    }
  };
}
export {
  createResolve
};
