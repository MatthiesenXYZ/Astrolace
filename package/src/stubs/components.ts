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
     * Shoelace.style <sl-animated-image> component
     * 
     * @see https://shoelace.style/components/animated-image
     * 
     * @param {string} src - The URL of the image to display.
     * @param {string} alt - The accessible label of the image.
     * @param {boolean} play - Whether the image is playing or not. (autoplay)
     * @param {object} slots
     * @param {object} slots.playIcon - The icon to display when the image is paused. (SlIcon name | default: 'play')
     * @param {object} slots.pauseIcon - The icon to display when the image is playing. (SlIcon name | default: 'pause')
     */
    export const AnimatedImage: typeof import('${resolve('../components/index.ts')}').AnimatedImage;
    /**
     * Shoelace.style <sl-avatar> component
     * 
     * @see https://shoelace.style/components/avatar
     * 
     * @param {string} image - The URL of the image to display.
     * @param {string} label - The accessible label of the image.
     * @param {string} initials - The initials to display.
     * @param {string} shape - The shape of the avatar. Can be 'circle', 'square', 'rounded'.
     * @param {string} loading - The loading state of the avatar. Can be 'lazy', 'eager'.
     * @param {string} defaultImage - The sl-icon to display when no image is provided or the image fails to load. 
     */
    export const Avatar: typeof import('${resolve('../components/index.ts')}').Avatar;
    /**
     * Shoelace.style <sl-badge> component
     * 
     * @see https://shoelace.style/components/badge
     * 
     * @param {string} variant - The variant of the badge. Can be 'primary', 'success', 'neutral', 'warning', 'danger'.
     * @param {boolean} pill - Whether the badge is pill-shaped or not.
     * @param {boolean} pulse - Whether the badge is pulsing or not.
     */
    export const Badge: typeof import('${resolve('../components/index.ts')}').Badge;
    /**
     * Shoelace.style <sl-breadcrumb> component
     * 
     * @see https://shoelace.style/components/breadcrumb
     */
    export const Breadcrumb: typeof import('${resolve('../components/index.ts')}').Breadcrumb;
    /**
     * Shoelace.style <sl-breadcrumb-item> component
     * 
     * @see https://shoelace.style/components/breadcrumb-item
     * 
     * @param {string} href - The URL the breadcrumb item links to.
     * @param {string} target - The target type of the link. Can be '_blank', '_self', '_parent', '_top'.
     * @param {string} rel - The rel attribute to use on the link. Only used when href is set.
     */
    export const BreadcrumbItem: typeof import('${resolve('../components/index.ts')}').BreadcrumbItem;
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
     * Shoelace.style <sl-card> component
     * 
     * @see https://shoelace.style/components/card
     */
    export const Card: typeof import('${resolve('../components/index.ts')}').Card;
    /**
     * Shoelace.style <sl-carousel> component
     * 
     * @see https://shoelace.style/components/carousel
     * 
     * @param {boolean} loop - Whether the carousel should loop or not.
     * @param {boolean} navigation - Whether the carousel should show navigation arrows or not.
     * @param {boolean} pagination - Whether the carousel should show pagination or not.
     * @param {boolean} autoplay - Whether the carousel should autoplay or not.
     * @param {number} autoplayInterval - The interval in milliseconds between autoplay slides.
     * @param {number} slidesPerPage - The number of slides to show per page.
     * @param {number} slidesPerMove - The number of slides to move when the carousel navigates.
     * @param {string} orientation - The orientation of the carousel. Can be 'horizontal', 'vertical'.
     * @param {boolean} mouseDragging - Whether the carousel should be draggable with the mouse or not.
     */
    export const Carousel: typeof import('${resolve('../components/index.ts')}').Carousel;
    /**
     * Shoelace.style <sl-carousel-item> component
     * 
     * @see https://shoelace.style/components/carousel-item 
     */
    export const CarouselItem: typeof import('${resolve('../components/index.ts')}').CarouselItem;
    /**
     * Shoelace.style <sl-checkbox> component
     * 
     * @see https://shoelace.style/components/checkbox
     * 
     * @param {string} name - The name of the checkbox.
     * @param {string} value - The value of the checkbox.
     * @param {string} size - The size of the checkbox. Can be 'small', 'medium', 'large'.
     * @param {boolean} checked - Whether the checkbox is checked or not.
     * @param {boolean} indeterminate - Whether the checkbox is indeterminate or not.
     * @param {boolean} disabled - Whether the checkbox is disabled or not.
     * @param {boolean} defaultChecked - Whether the checkbox is checked by default or not.
     * @param {boolean} required - Whether the checkbox is required or not.
     * @param {string} form - The form the checkbox belongs to.
     * @param {string} helpText - The help text of the checkbox.
     * @slot {default} - The checkbox's label.
     */
    export const Checkbox: typeof import('${resolve('../components/index.ts')}').Checkbox;
    /**
     * Shoelace.style <sl-color-picker> component
     * 
     * @see https://shoelace.style/components/color-picker
     * 
     * @param {string} value - The value of the color picker.
     * @param {string} format - The format of the color picker. Can be 'hex', 'rgb', 'hsl'.
     * @param {string} size - The size of the color picker. Can be 'small', 'medium', 'large'.
     * @param {string} defaultValue - The default value of the color picker.
     * @param {string} label - The label of the color picker.
     * @param {string} name - The name of the color picker.
     * @param {boolean} disabled - Whether the color picker is disabled or not.
     * @param {boolean} inline - Whether the color picker is inline or not.
     * @param {boolean} noFormatToggle - Whether the color picker has a format toggle or not.
     * @param {boolean} hoist - Whether the color picker should be hoisted to the body to avoid clipping issues.
     * @param {boolean} opacity - Whether the color picker supports opacity or not.
     * @param {boolean} uppercase - Whether the color picker value should be uppercase or not.
     * @param {string} swatches - The predefined color swatches to display as presets in the color picker.
     * @param {string} form - The form the color picker belongs to.
     * @param {boolean} required - Whether the color picker is required or not.
     */
    export const ColorPicker: typeof import('${resolve('../components/index.ts')}').ColorPicker;
    /**
     * Shoelace.style <sl-copy-button> component
     * 
     * @see https://shoelace.style/components/copy-button
     * 
     * @param {string} value - The value to copy.
     * @param {string} from - The selector of the element to copy from.
     * @param {boolean} disabled - Whether the copy button is disabled or not.
     * @param {string} successLabel - The label to display when the value is copied.
     * @param {string} copyLabel - The label to display on the copy button.
     * @param {string} feedbackDuration - The duration in milliseconds to show the feedback message.
     * @param {string} feedbackPlacement - The placement of the feedback message. Can be 'top', 'right', 'bottom', 'left'.
     * @param {string} errorLabel - The label to display when the value cannot be copied.
     * @param {boolean} hoist - Whether the copy button should be hoisted to the body to avoid clipping issues.
     */
    export const CopyButton: typeof import('${resolve('../components/index.ts')}').CopyButton;
    /**
     * Shoelace.style <sl-details> component
     * 
     * @see https://shoelace.style/components/details
     * 
     * @param {string} summary - The summary to show in the header.
     * @param {boolean} open - Whether the details is open or not.
     * @param {boolean} disabled - Whether the details is disabled or not.
     */
    export const Details: typeof import('${resolve('../components/index.ts')}').Details;
    /**
     * Shoelace.style <sl-dialog> component
     * 
     * @see https://shoelace.style/components/dialog
     * 
     * @param {string} label - The label of the dialog.
     * @param {boolean} open - Whether the dialog is open or not.
     * @param {boolean} noHeader - Whether the dialog has a header or not.
     * @param {string} id - The id of the dialog.
     */
    export const Dialog: typeof import('${resolve('../components/index.ts')}').Dialog;
    /**
     * Shoelace.style <sl-divider> component
     * 
     * @see https://shoelace.style/components/divider
     * 
     * @param {boolean} vertical - Whether the divider is vertical or not.
     */
    export const Divider: typeof import('${resolve('../components/index.ts')}').Divider;
    /**
     * Shoelace.style <sl-drawer> component
     * 
     * @see https://shoelace.style/components/drawer
     * 
     * @param {boolean} open - Whether the drawer is open or not.
     * @param {string} label - The label of the drawer.
     * @param {string} placement - The placement of the drawer. Can be 'top', 'right', 'bottom', 'left'.
     * @param {boolean} noHeader - Whether the drawer has a header or not.
     * @param {boolean} contained - Whether the drawer is contained or not.
     */
    export const Drawer: typeof import('${resolve('../components/index.ts')}').Drawer;
    /**
     * Shoelace.style <sl-dropdown> component
     * 
     * @see https://shoelace.style/components/dropdown
     * 
     * @param {string} placement - The placement of the dropdown. Can be 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end' 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'.
     * @param {boolean} open - Whether the dropdown is open or not.
     * @param {boolean} disabled - Whether the dropdown is disabled or not.
     * @param {number} distance - The distance in pixels from which the dropdown will be visible.
     * @param {number} skidding - The distance in pixels from the edge of the trigger that the dropdown will be positioned.
     * @param {boolean} hoist - Whether the dropdown should be hoisted to the body to avoid clipping issues.
     * @param {boolean} stayOpenOnSelect - Whether the dropdown should stay open on select or not.
     * @param {HTMLElement} containingElement - The element that contains the dropdown. The dropdown will close when the user interacts outside of this element.
     * @param {string} sync - Syncs the width of the dropdown with the trigger. can be 'width', 'height', 'both', 'undefined'.
     */
    export const Dropdown: typeof import('${resolve('../components/index.ts')}').Dropdown;
    /**
     * Shoelace.style <sl-format-bytes> component
     * 
     * @see https://shoelace.style/components/format-bytes
     * 
     * @param {number} value - The number to format in bytes.
     * @param {string} unit - The type of unit to display. Can be 'byte', 'bit'.
     * @param {string} display - Determines how to display the result, e.g. "100 bytes", "100 b", or "100b".
     * @param {string} lang - The language to use when formatting the number.
     */
    export const FormatBytes: typeof import('${resolve('../components/index.ts')}').FormatBytes;
    /**
     * Shoelace.style <sl-format-date> component
     * 
     * @see https://shoelace.style/components/format-date
     * 
     * @param {string} date - The date to format.
     * @param {string} lang - The language to use when formatting the date.
     * @param {string} weekday - The formatting style to use for the weekday. Can be 'narrow', 'short', 'long'.
     * @param {string} era - The formatting style to use for the era. Can be 'narrow', 'short', 'long'.
     * @param {string} year - The formatting style to use for the year. Can be 'numeric', '2-digit'.
     * @param {string} month - The formatting style to use for the month. Can be 'numeric', '2-digit', 'narrow', 'short', 'long'.
     * @param {string} day - The formatting style to use for the day. Can be 'numeric', '2-digit'.
     * @param {string} hour - The formatting style to use for the hour. Can be 'numeric', '2-digit'.
     * @param {string} minute - The formatting style to use for the minute. Can be 'numeric', '2-digit'.
     * @param {string} second - The formatting style to use for the second. Can be 'numeric', '2-digit'.
     * @param {string} timeZoneName - The formatting style to use for the time zone name. Can be 'short', 'long'.
     * @param {string} timeZone - The time zone to use when formatting the date.
     * @param {string} hourFormat - The hour format to use when formatting the date. Can be 'auto', '12', '24'.
     */
    export const FormatDate: typeof import('${resolve('../components/index.ts')}').FormatDate;
    /**
     * Shoelace.style <sl-format-number> component
     * 
     * @see https://shoelace.style/components/format-number
     * 
     * @param {number} value - The number to format.
     * @param {string} type - The formatting style to use. Can be 'currency', 'decimal', 'percent'.
     * @param {boolean} noGrouping - Turns off grouping separators.
     * @param {string} currency - The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.
     * @param {string} currencyDisplay - How to display the currency. Can be 'symbol', 'narrowSymbol', 'code', 'name'.
     * @param {number} minimumIntegerDigits - The minimum number of integer digits to use. Possible values are 1-21.
     * @param {number} minimumFractionDigits - The minimum number of fraction digits to use. Possible values are 0-20.
     * @param {number} maximumFractionDigits - The maximum number of fraction digits to use. Possible values are 0-0.
     * @param {number} minimumSignificantDigits - The minimum number of significant digits to use. Possible values are 1-21.
     * @param {number} maximumSignificantDigits - The maximum number of significant digits to use,. Possible values are 1-21.
     * @param {string} lang - The language to use when formatting the number.
     */
    export const FormatNumber: typeof import('${resolve('../components/index.ts')}').FormatNumber;
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
     * Shoelace.style <sl-image-comparer> component
     * 
     * @see https://shoelace.style/components/image-comparer
     * 
     * @param {string} position - The position of the divider as a percentage.
     */
    export const ImageComparer: typeof import('${resolve('../components/index.ts')}').ImageComparer;
    /**
     * Shoelace.style <sl-include> component
     * 
     * @see https://shoelace.style/components/include
     * 
     * @param {string} src - The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.
     * @param {string} mode - The fetch mode to use. Can be 'cors', 'no-cors', 'same-origin'.
     * @param {boolean} allowScripts - Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.
     */
    export const Include: typeof import('${resolve('../components/index.ts')}').Include;

    

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