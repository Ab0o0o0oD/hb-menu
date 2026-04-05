/// <reference types="vite/client" />
declare module '*.jpg';

interface Window {
  gtag: (...args: unknown[]) => void;
  dataLayer: unknown[];
}
