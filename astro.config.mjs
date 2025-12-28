// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://minh-portfolio-ten.vercel.app/",
  integrations: [
    mdx(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "plastic",
      wrap: true,
    },
  },
  image: {
    service: passthroughImageService(),
  },
  experimental: {
    // svg: true,
  },
});
