import { z } from "astro/zod";

// Options for the main Integration
export const optionsSchema = z.object({
    /**
     * Enable verbose logging
     */
	verbose: z.boolean().optional().default(false),
});

export type Options = z.infer<typeof optionsSchema>;
