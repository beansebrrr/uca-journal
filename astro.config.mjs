// @ts-check

import { satteri } from "@astrojs/markdown-satteri";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import { demoteHeadings, unwrapImages } from "./src/satteri-plugins.mjs";

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon({
			iconDir: "src/assets/icons",
		}),
	],
	markdown: {
		processor: satteri({
			mdastPlugins: [unwrapImages, demoteHeadings],
			features: {
				headingAttributes: true,
			},
		}),
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Boldonse",
			cssVariable: "--font-boldonse",
		},
		{
			provider: fontProviders.fontsource(),
			name: "Space Mono",
			cssVariable: "--font-space-mono",
		},
		{
			provider: fontProviders.fontsource(),
			name: "Atkinson Hyperlegible Next",
			cssVariable: "--font-atkinson",
			weights: ["200 800"],
		},
	],
	redirects: {
		"/journal": "/",
	},
});
