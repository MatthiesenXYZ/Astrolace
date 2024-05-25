import { addDts, addVirtualImports, createResolver, defineIntegration } from "astro-integration-kit";
import { integrationLogger } from "./utils";
import { optionsSchema, } from "./schemas";
import { componentFile, typesFile, toolsFile } from "./stubs";

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
					const { logger, injectScript } = params;

					// Log the setup of the integration
					integrationLogger(logger, verbose, "info", "Setting up Astrolace integration");

					const virtualComponents = {
						Alert: resolve('./components/Alert.astro'),
						AnimatedImage: resolve('./components/AnimatedImage.astro'),
						Avatar: resolve('./components/Avatar.astro'),
						Badge: resolve('./components/Badge.astro'),
						Breadcrumb: resolve('./components/breadcrumbs/Breadcrumb.astro'),
						BreadcrumbItem: resolve('./components/breadcrumbs/BreadcrumbItem.astro'),
						Button: resolve('./components/buttons/Button.astro'),
						ButtonGroup: resolve('./components/buttons/ButtonGroup.astro'),
						CopyButton: resolve('./components/buttons/CopyButton.astro'),
						Card: resolve('./components/Card.astro'),
						Carousel: resolve('./components/carousel/Carousel.astro'),
						CarouselItem: resolve('./components/carousel/CarouselItem.astro'),
						Checkbox: resolve('./components/Checkbox.astro'),
						ColorPicker: resolve('./components/ColorPicker.astro'),
						Details: resolve('./components/Details.astro'),
						Dialog: resolve('./components/Dialog.astro'),
						Divider: resolve('./components/Divider.astro'),
						Drawer: resolve('./components/Drawer.astro'),
						Dropdown: resolve('./components/Dropdown.astro'),
						FormatBytes: resolve('./components/formatters/FormatBytes.astro'),
						FormatDate: resolve('./components/formatters/FormatDate.astro'),
						FormatNumber: resolve('./components/formatters/FormatNumber.astro'),
						Icon: resolve('./components/icon/Icon.astro'),
						IconButton: resolve('./components/icon/IconButton.astro'),
						ImageComparer: resolve('./components/ImageComparer.astro'),
						Include: resolve('./components/Include.astro'),
						Input: resolve('./components/Input.astro'),
						Menu: resolve('./components/menu/Menu.astro'),
						MenuItem: resolve('./components/menu/MenuItem.astro'),
						MenuLabel: resolve('./components/menu/MenuLabel.astro'),
						MutationObserver: resolve('./components/MutationObserver.astro'),
						Option: resolve('./components/select/Option.astro'),
						Select: resolve('./components/select/Select.astro'),
						Tooltip: resolve('./components/Tooltip.astro'),
					};

					const astrolaceComponents = Object
							.entries(virtualComponents)
							.map(([name, path]) => `export { default as ${name} } from '${path}';`)
							.join('\n');

					const virtualComponentsHeader = {
						ShoelaceHeader: resolve('./components/header/ShoelaceHeader.astro'),
					}

					const astrolaceComponentsHeader = Object
							.entries(virtualComponentsHeader)
							.map(([name, path]) => `export { default as ${name} } from '${path}';`)
							.join('\n');

					// Add virtual imports
					addVirtualImports(params, {
						name,
						imports: {
							'astrolace:components': astrolaceComponents,
							'astrolace:components/header': astrolaceComponentsHeader,
							'astrolace:types': `export * from '${resolve('./types/index.ts')}';`,
							'astrolace:tools': `export * from '${resolve('./tools/index.ts')}';`,
						}
					});

					injectScript("page-ssr", `import "${resolve('./shoelaceLib/light.css')}";`);
					injectScript("page-ssr", `import "${resolve('./shoelaceLib/dark.css')}";`);

					// Add the .d.ts files
					addDts(params, {
						name: 'astrolace-components',
						content: componentFile
					});

					addDts(params, {
						name: 'astrolace-types',
						content: typesFile
					});

					addDts(params, {
						name: 'astrolace-tools',
						content: toolsFile
					});

					// Log the setup of the integration
					integrationLogger(logger, verbose, "info", "Astrolace integration setup complete");
				},
			},
		};
	},
});
