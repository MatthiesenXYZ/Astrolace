import { addDts, addVirtualImports, createResolver, defineIntegration } from "astro-integration-kit";
import { integrationLogger, makeComponentMap } from "./utils";
import { optionsSchema } from "./schemas";
import { astrolaceDTSFile } from "./stubs";

export default defineIntegration({
	name: "@matthiesenxyz/astrolace",
	optionsSchema,
	setup({ name, options: { verbose } }) {
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
						Popup: resolve('./components/Popup.astro'),
						ProgressBar: resolve('./components/ProgressBar.astro'),
						ProgressRing: resolve('./components/ProgressRing.astro'),
						QrCode: resolve('./components/QrCode.astro'),
						Radio: resolve('./components/radios/Radio.astro'),
						RadioButton: resolve('./components/radios/RadioButton.astro'),
						RadioGroup: resolve('./components/radios/RadioGroup.astro'),
						Range: resolve('./components/Range.astro'),
						Rating: resolve('./components/Rating.astro'),
						RelativeTime: resolve('./components/RelativeTime.astro'),
						ResizeObserver: resolve('./components/ResizeObserver.astro'),
						Select: resolve('./components/select/Select.astro'),
						Skeleton: resolve('./components/Skeleton.astro'),
						Spinner: resolve('./components/Spinner.astro'),
						SplitPanel: resolve('./components/SplitPanel.astro'),
						Switch: resolve('./components/Switch.astro'),
						Tab: resolve('./components/tabs/Tab.astro'),
						TabGroup: resolve('./components/tabs/TabGroup.astro'),
						TabPanel: resolve('./components/tabs/TabPanel.astro'),
						Tag: resolve('./components/Tag.astro'),
						Textarea: resolve('./components/Textarea.astro'),
						Tooltip: resolve('./components/Tooltip.astro'),
						Tree: resolve('./components/tree/Tree.astro'),
						TreeItem: resolve('./components/tree/TreeItem.astro'),
						VisuallyHidden: resolve('./components/VisuallyHidden.astro'),
					};

					// Add virtual imports
					integrationLogger(logger, verbose, "info", "Adding virtual mappings for components: 'astrolace:components', 'astrolace:types', and 'astrolace:tools'");
					addVirtualImports(params, {
						name,
						imports: {
							'astrolace:components': makeComponentMap(virtualComponents),
							'astrolace:components/header': `export { default as ShoelaceHeader } from '${resolve('./components/header/ShoelaceHeader.astro')}';`,
							'astrolace:types': `export * from '${resolve('./types/index.ts')}';`,
							'astrolace:tools': `export * from '${resolve('./tools/index.ts')}';`,
						}
					});

					// Inject the CSS
					integrationLogger(logger, verbose, "info", "Injecting CSS for Shoelace components");
					injectScript("page-ssr", `import "${resolve('./shoelaceLib/light.css')}";`);
					injectScript("page-ssr", `import "${resolve('./shoelaceLib/dark.css')}";`);

					// Add the .d.ts files
					integrationLogger(logger, verbose, "info", "Verifing .d.ts files for 'astrolace'");
					addDts(params, { name, content: astrolaceDTSFile });

					// Log the setup of the integration
					integrationLogger(logger, verbose, "info", "Astrolace integration setup complete");
				},
			},
		};
	},
});
