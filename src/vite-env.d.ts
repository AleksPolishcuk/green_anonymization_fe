/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** When `"true"` together with dev server, skips auth API in useAuthGuard (local UI only). */
  readonly VITE_DEV_AUTH_BYPASS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
