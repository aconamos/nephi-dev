import { defineCollection, z } from "astro:content"
import { glob, file } from "astro/loaders"

export const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/collections/projects" }),
    schema: z.object({
        name: z.string(),
        tags: z.string().array(),
        subtitle: z.string(),
        description: z.string(),
        date: z.coerce.date()
    })
})