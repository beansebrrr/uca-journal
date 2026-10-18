export type NavLink = {
	text: string;
	url: string;
};

export type SocialMediaLink = {
	iconName?: string;
	platform: string;
	username: string;
	url: string;
};

export type Theme = "light" | "dark";
