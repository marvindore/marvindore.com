// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs, share-image URLs and the sitemap.
  site: 'https://marvindore.com',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: "cloudflare"
  }),
  devToolbar: {
    enabled: false
  },

  vite: {
    plugins: []
  }
});
