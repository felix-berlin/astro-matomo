export {};

declare global {
  interface Window {
    _paq: Array<[string, ...unknown[]]>;
import type { MatomoCommand } from "../index.ts";

export {};

declare global {
  interface Window {
    _paq: Array<MatomoCommand | (() => void)>;
    _mtm: Array<Record<string, unknown> | MatomoCommand>;
  }
}

