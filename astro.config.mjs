import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://docs.hyblocker.dev',
  integrations: [preact(), react(), sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
  }
});