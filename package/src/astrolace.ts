import { addDts, addVirtualImports, createResolver, defineIntegration } from "astro-integration-kit";
import { integrationLogger } from "./utils";
import { optionsSchema, } from "./schemas";
import { componentFile, componentHeaderFile, typesFile, toolsFile } from "./stubs";

export default defineIntegration({
	name: "@matthiesenxyz/astrolace",
	optionsSchema,
	setup({ 
		name,
		options: { 
			verbose,
		}
	}) {
		// Resolve the path to root of the integration
		const { resolve } = createResolver(import.meta.url);
		return {
			hooks: {
				"astro:config:setup": async (params) => {

					// Destructure the parameters
					const { logger } = params;

					// Log the setup of the integration
					integrationLogger(logger, verbose, "info", "Setting up Astrolace integration");

					// Add virtual imports
					addVirtualImports(params, {
						name,
						imports: {
							'astrolace:components': `export * from '${resolve('./components/index.ts')}';`,
							'astrolace:components/header': `export * from '${resolve('./components/header/index.ts')}';`,
							'astrolace:types': `export * from '${resolve('./types/index.ts')}';`,
							'astrolace:utils': `export * from '${resolve('./tools/index.ts')}';`,
						}
					})

					// Add the .d.ts file
					addDts(params, {
						name: 'astrolace-components-header',
						content: componentHeaderFile
					})

					addDts(params, {
						name: 'astrolace-components',
						content: componentFile
					})

					addDts(params, {
						name: 'astrolace-types',
						content: typesFile
					})

					addDts(params, {
						name: 'astrolace-tools',
						content: toolsFile
					})
				},
			},
		};
	},
});
