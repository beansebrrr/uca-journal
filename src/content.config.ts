import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const journal = defineCollection({
	loader: glob({ base: "./src/content/journal", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		week: z.int(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { journal };
