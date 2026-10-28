// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon({
			iconDir: "src/assets/icons",
		}),
	],
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Boldonse",
			cssVariable: "--font-boldonse",
		},
	],
	redirects: {
		"/journal": "/",
	},
});
