import { createResolver } from "astro-integration-kit";
import { fileFactory } from "../utils";

const { resolve } = createResolver(import.meta.url);
const componentsDTS = fileFactory();

componentsDTS.addLines(`declare module 'astrolace:components' {
    /** 
     * Shoelace.style <sl-alert> component
     * 
     * @see https://shoelace.style/components/alert 
     * 
     * @param {string} variant - The variant of the alert. Can be 'primary', 'success', 'neutral', 'warning', 'danger'.
     * @param {boolean} open - Whether the alert is open or not.
     * @param {boolean} closable - Whether the alert is dismissible or not.
     * @param {number} duration - The duration of the alert in milliseconds.
     */
    export const Alert: typeof import('${resolve('../components/index.ts')}').Alert;
    /**
     * Shoelace.style <sl-button> component
     * 
     * @see https://shoelace.style/components/button
     * 
     * @param {string} type - The type of the button. Can be 'submit', 'reset', 'button'.
     * @param {string} variant - The variant of the button. Can be 'primary', 'success', 'neutral', 'warning', 'danger', 'text'.
     * @param {string} size - The size of the button. Can be 'small', 'medium', 'large'.
     * @param {boolean} outline - Whether the button is outlined or not.
     * @param {boolean} disabled - Whether the button is disabled or not.
     * @param {boolean} loading - Whether the button is in a loading state or not.
     * @param {boolean} pill - Whether the button is pill-shaped or not.
     * @param {boolean} circle - Whether the button is circular or not.
     * @param {string} href - The URL the button links to.
     * @param {string} target - The target type of the link. Can be '_blank', '_self', '_parent', '_top'.
     * @param {boolean} download - Whether the link should be downloaded or not.
     * @param {boolean} caret - Whether the button has a caret or not.
     * @param {string} name - The name of the button.
     * @param {string} value - The value of the button.
     * @param {string} rel - When using href, this attribute will map to the underlying links rel attribute. Unlike regular links, the default is noreferrer noopener to prevent security exploits. However, if youre using target to point to a specific tab/window, this will prevent that from working correctly. You can remove or change the default value by setting the attribute to an empty string or a value of your choice, respectively.
     */
    export const Button: typeof import('${resolve('../components/index.ts')}').Button;
    /**
     * Shoelace.style <sl-button-group> component
     * 
     * @see https://shoelace.style/components/button-group
     * 
     * @param {string} label - The label of the button group.
     */
    export const ButtonGroup: typeof import('${resolve('../components/index.ts')}').ButtonGroup;
    /**
     * Shoelace.style <sl-icon> component
     * 
     * @see https://shoelace.style/components/icon
     * 
     * @param {string} name - The name of the icon to display.
     * @param {string} library - The icon library to use. Can be 'default', 'feather', 'heroicons', 'material', 'octicons'.
     * @param {string} src - The URL of the image to display.
     * @param {string} label - The accessible label of the icon.
     */
    export const Icon: typeof import('${resolve('../components/index.ts')}').Icon;
    /**
     * Shoelace.style <sl-icon-button> component
     * 
     * @see https://shoelace.style/components/icon-button
     * 
     * @param {string} name - The name of the icon to display.
     * @param {string} src - The URL of the image to display.
     * @param {string} label - The accessible label of the icon.
     * @param {string} href - The URL the icon links to.
     * @param {string} target - The target type of the link. Can be '_blank', '_self', '_parent', '_top'.
     * @param {boolean} download - Whether the link should be downloaded or not.
     * @param {boolean} disabled - Whether the icon is disabled or not.
     */
    export const IconButton: typeof import('${resolve('../components/index.ts')}').IconButton;
    /**
     * Shoelace.style <sl-tooltip> component
     * 
     * @see https://shoelace.style/components/tooltip
     * 
     * @param {string} placement - The placement of the tooltip. Can be 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end' 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'.
     * @param {string} trigger - The event that triggers the tooltip. Can be 'hover', 'click', 'focus', 'manual'.
     * @param {boolean} open - Whether the tooltip is open or not.
     * @param {boolean} disabled - Whether the tooltip is disabled or not.
     * @param {number} distance - The distance in pixels from which the tooltip will be visible.
     * @param {number} skidding - The distance in pixels from the edge of the trigger that the tooltip will be positioned.
     * @param {boolean} hoist - Whether the tooltip should be hoisted to the body to avoid clipping issues.
     */
    export const Tooltip: typeof import('${resolve('../components/index.ts')}').Tooltip;
};`);

export const componentFile = componentsDTS.text();