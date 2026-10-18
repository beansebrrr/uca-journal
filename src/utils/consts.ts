import type { SocialMediaLink } from "@utils/types";

export const SITE = {
	name: "Temploot",
	description: "A starter template for my websites",
	author: {
		name: "Vince",
		email: "vincemcaballero@gmail.com",
	},
} as const;

export const SOCIAlS: SocialMediaLink[] = [
	{
		iconName: "fa6-brands:github-alt",
		platform: "GitHub",
		username: "beansebrrr",
		url: "https://github.com/beansebrrr",
	},
	{
		iconName: "fa6-brands:linkedin-in",
		platform: "LinkedIn",
		username: "Vince Caballero",
		url: "https://linkedin.com/in/vincecaballero",
	},
] as const;
