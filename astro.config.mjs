import { defineConfig } from 'astro/config';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://lorenzolewis.github.io',
  base: 'sample',
  integrations: [db()]
});