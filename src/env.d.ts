/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  PUBLIC_SPOTIFY_CLIENT_ID: string;
  PUBLIC_SPOTIFY_SCOPES: string;

  SPOTIFY_CLIENT_SECRET: string;
  PUBLIC_DEV_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
