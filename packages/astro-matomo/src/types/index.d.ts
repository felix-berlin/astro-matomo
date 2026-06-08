export {};

declare global {
  interface Window {
    _paq: Array<[string, ...unknown[]]>;
    _mtm: Array<[string, ...unknown[]]>;
  }
}
