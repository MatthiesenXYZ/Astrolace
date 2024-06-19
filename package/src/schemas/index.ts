import { z } from "astro/zod";

// Options for the main Integration
export const optionsSchema = z.object({
    /**
     * Enable verbose logging
     * 
     * @default false
     */
	verbose: z.boolean().optional().default(false),
    /**
     * Inject Shoelace CSS
     * 
     * Can also be disabled if you want to handle the CSS yourself
     * 
     * `import "@matthiesenxyz/astrolace/base.css";`
     * 
     * @default true
     */
    injectCss: z.boolean().optional().default(true),
    /**
     * Inject Shoelace Dark Theme CSS
     * 
     * **Note:** This option requires `injectCss` to be enabled
     * 
     * Can also be disabled if you want to handle the CSS yourself
     * 
     * `import "@matthiesenxyz/astrolace/dark.css";`
     * 
     * @default true
     */
    injectDarkTheme: z.boolean().optional().default(true),
});

export type Options = z.infer<typeof optionsSchema>;
