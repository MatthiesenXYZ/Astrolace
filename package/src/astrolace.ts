import {
	addDts,
	addVirtualImports,
	createResolver,
	defineIntegration,
} from "astro-integration-kit";
import { integrationLogger, loggerOpts, makeComponentMap } from "./utils";
import { optionsSchema } from "./schemas";
import { astrolaceDTSFile } from "./stubs";
import { strings } from "./strings";

export default defineIntegration({
	name: "@matthiesenxyz/astrolace",
	optionsSchema,
	setup({ name, options: { verbose, injectCss, injectDarkTheme } }) {
		// Resolve the path to root of the integration
		const { resolve } = createResolver(import.meta.url);
		return {
			hooks: {
				"astro:config:setup": async (params) => {
					// Get the logger options
					const { infoLogger } = loggerOpts(params.logger, verbose);

					// Log the setup of the integration
					integrationLogger(infoLogger, strings.start);

					// Virtual component map
					const virtualComponents = {
						Alert: resolve("./components/Alert.astro"),
						AnimatedImage: resolve("./components/AnimatedImage.astro"),
						Avatar: resolve("./components/Avatar.astro"),
						Badge: resolve("./components/Badge.astro"),
						Breadcrumb: resolve("./components/breadcrumbs/Breadcrumb.astro"),
						BreadcrumbItem: resolve(
							"./components/breadcrumbs/BreadcrumbItem.astro",
						),
						Button: resolve("./components/buttons/Button.astro"),
						ButtonGroup: resolve("./components/buttons/ButtonGroup.astro"),
						CopyButton: resolve("./components/buttons/CopyButton.astro"),
						Card: resolve("./components/Card.astro"),
						Carousel: resolve("./components/carousel/Carousel.astro"),
						CarouselItem: resolve("./components/carousel/CarouselItem.astro"),
						Checkbox: resolve("./components/Checkbox.astro"),
						ColorPicker: resolve("./components/ColorPicker.astro"),
						Details: resolve("./components/Details.astro"),
						Dialog: resolve("./components/Dialog.astro"),
						Divider: resolve("./components/Divider.astro"),
						Drawer: resolve("./components/Drawer.astro"),
						Dropdown: resolve("./components/Dropdown.astro"),
						FormatBytes: resolve("./components/formatters/FormatBytes.astro"),
						FormatDate: resolve("./components/formatters/FormatDate.astro"),
						FormatNumber: resolve("./components/formatters/FormatNumber.astro"),
						Icon: resolve("./components/icon/Icon.astro"),
						IconButton: resolve("./components/icon/IconButton.astro"),
						ImageComparer: resolve("./components/ImageComparer.astro"),
						Include: resolve("./components/Include.astro"),
						Input: resolve("./components/Input.astro"),
						Menu: resolve("./components/menu/Menu.astro"),
						MenuItem: resolve("./components/menu/MenuItem.astro"),
						MenuLabel: resolve("./components/menu/MenuLabel.astro"),
						MutationObserver: resolve("./components/MutationObserver.astro"),
						Option: resolve("./components/select/Option.astro"),
						Popup: resolve("./components/Popup.astro"),
						ProgressBar: resolve("./components/ProgressBar.astro"),
						ProgressRing: resolve("./components/ProgressRing.astro"),
						QrCode: resolve("./components/QrCode.astro"),
						Radio: resolve("./components/radios/Radio.astro"),
						RadioButton: resolve("./components/radios/RadioButton.astro"),
						RadioGroup: resolve("./components/radios/RadioGroup.astro"),
						Range: resolve("./components/Range.astro"),
						Rating: resolve("./components/Rating.astro"),
						RelativeTime: resolve("./components/RelativeTime.astro"),
						ResizeObserver: resolve("./components/ResizeObserver.astro"),
						Select: resolve("./components/select/Select.astro"),
						Skeleton: resolve("./components/Skeleton.astro"),
						Spinner: resolve("./components/Spinner.astro"),
						SplitPanel: resolve("./components/SplitPanel.astro"),
						Switch: resolve("./components/Switch.astro"),
						Tab: resolve("./components/tabs/Tab.astro"),
						TabGroup: resolve("./components/tabs/TabGroup.astro"),
						TabPanel: resolve("./components/tabs/TabPanel.astro"),
						Tag: resolve("./components/Tag.astro"),
						Textarea: resolve("./components/Textarea.astro"),
						Tooltip: resolve("./components/Tooltip.astro"),
						Tree: resolve("./components/tree/Tree.astro"),
						TreeItem: resolve("./components/tree/TreeItem.astro"),
						VisuallyHidden: resolve("./components/VisuallyHidden.astro"),
					};

					// Add virtual imports
					integrationLogger(infoLogger, strings.virtualImports);
					addVirtualImports(params, {
						name,
						imports: {
							"astrolace:components": makeComponentMap(virtualComponents),
							"astrolace:components/header": `export { default as ShoelaceHeader } from '${resolve("./components/header/ShoelaceHeader.astro")}';`,
							"astrolace:types": `export * from '${resolve("./types/index.ts")}';`,
							"astrolace:tools": `export * from '${resolve("./tools/index.ts")}';`,
						},
					});

					// Inject the CSS
					if (injectCss) {
						integrationLogger(infoLogger, strings.injectCss);
						params.injectScript(
							"page-ssr",
							`import "@matthiesenxyz/astrolace/base.css";`,
						);
						if (injectDarkTheme) {
							integrationLogger(infoLogger, strings.injectDarkTheme);
							params.injectScript(
								"page-ssr",
								`import "@matthiesenxyz/astrolace/dark.css";`,
							);
						}
					}

					// Log the setup of the integration
					integrationLogger(infoLogger, strings.complete);
				},
				"astro:config:done": async (params) => {
					integrationLogger(
						loggerOpts(params.logger, verbose).infoLogger,
						strings.dts,
					);
					params.injectTypes({
						filename: "astrolace.d.ts",
						content: astrolaceDTSFile,
					});
				},
			},
		};
	},
});
