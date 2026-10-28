export type NavLink = {
	label: string;
	href: string;
};

export type SocialMediaLink = {
	iconName?: string;
	platform: string;
	username: string;
	url: string;
};

export type Theme = "light" | "dark";
