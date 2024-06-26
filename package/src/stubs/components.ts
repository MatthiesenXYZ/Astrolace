import { createResolver } from "astro-integration-kit";
import { fileFactory } from "../utils";

const { resolve } = createResolver(import.meta.url);
const componentsDTS = fileFactory();

componentsDTS.addLines(`declare module 'astrolace:components' {

    import type { VirtualElement } from 'astrolace:types';

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
    export const Alert: typeof import('${resolve('../components/Alert.astro')}').default;

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
    export const AnimatedImage: typeof import('${resolve('../components/AnimatedImage.astro')}').default;

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
    export const Avatar: typeof import('${resolve('../components/Avatar.astro')}').default;

    /**
     * Shoelace.style <sl-badge> component
     * 
     * @see https://shoelace.style/components/badge
     * 
     * @param {string} variant - The variant of the badge. Can be 'primary', 'success', 'neutral', 'warning', 'danger'.
     * @param {boolean} pill - Whether the badge is pill-shaped or not.
     * @param {boolean} pulse - Whether the badge is pulsing or not.
     */
    export const Badge: typeof import('${resolve('../components/Badge.astro')}').default;

    /**
     * Shoelace.style <sl-breadcrumb> component
     * 
     * @see https://shoelace.style/components/breadcrumb
     */
    export const Breadcrumb: typeof import('${resolve('../components/breadcrumbs/Breadcrumb.astro')}').default;

    /**
     * Shoelace.style <sl-breadcrumb-item> component
     * 
     * @see https://shoelace.style/components/breadcrumb-item
     * 
     * @param {string} href - The URL the breadcrumb item links to.
     * @param {string} target - The target type of the link. Can be '_blank', '_self', '_parent', '_top'.
     * @param {string} rel - The rel attribute to use on the link. Only used when href is set.
     */
    export const BreadcrumbItem: typeof import('${resolve('../components/breadcrumbs/BreadcrumbItem.astro')}').default;

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
    export const Button: typeof import('${resolve('../components/buttons/Button.astro')}').default;

    /**
     * Shoelace.style <sl-button-group> component
     * 
     * @see https://shoelace.style/components/button-group
     * 
     * @param {string} label - The label of the button group.
     */
    export const ButtonGroup: typeof import('${resolve('../components/buttons/ButtonGroup.astro')}').default;

    /**
     * Shoelace.style <sl-card> component
     * 
     * @see https://shoelace.style/components/card
     */
    export const Card: typeof import('${resolve('../components/Card.astro')}').default;

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
    export const Carousel: typeof import('${resolve('../components/carousel/Carousel.astro')}').default;

    /**
     * Shoelace.style <sl-carousel-item> component
     * 
     * @see https://shoelace.style/components/carousel-item 
     */
    export const CarouselItem: typeof import('${resolve('../components/carousel/CarouselItem.astro')}').default;
    
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
    export const Checkbox: typeof import('${resolve('../components/Checkbox.astro')}').default;

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
    export const ColorPicker: typeof import('${resolve('../components/ColorPicker.astro')}').default;

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
    export const CopyButton: typeof import('${resolve('../components/buttons/CopyButton.astro')}').default;

    /**
     * Shoelace.style <sl-details> component
     * 
     * @see https://shoelace.style/components/details
     * 
     * @param {string} summary - The summary to show in the header.
     * @param {boolean} open - Whether the details is open or not.
     * @param {boolean} disabled - Whether the details is disabled or not.
     */
    export const Details: typeof import('${resolve('../components/Details.astro')}').default;

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
    export const Dialog: typeof import('${resolve('../components/Dialog.astro')}').default;

    /**
     * Shoelace.style <sl-divider> component
     * 
     * @see https://shoelace.style/components/divider
     * 
     * @param {boolean} vertical - Whether the divider is vertical or not.
     */
    export const Divider: typeof import('${resolve('../components/Divider.astro')}').default;

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
    export const Drawer: typeof import('${resolve('../components/Drawer.astro')}').default;

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
    export const Dropdown: typeof import('${resolve('../components/Dropdown.astro')}').default;

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
    export const FormatBytes: typeof import('${resolve('../components/formatters/FormatBytes.astro')}').default;

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
    export const FormatDate: typeof import('${resolve('../components/formatters/FormatDate.astro')}').default;

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
    export const FormatNumber: typeof import('${resolve('../components/formatters/FormatNumber.astro')}').default;

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
    export const Icon: typeof import('${resolve('../components/icon/Icon.astro')}').default;

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
    export const IconButton: typeof import('${resolve('../components/icon/IconButton.astro')}').default;

    /**
     * Shoelace.style <sl-image-comparer> component
     * 
     * @see https://shoelace.style/components/image-comparer
     * 
     * @param {string} position - The position of the divider as a percentage.
     */
    export const ImageComparer: typeof import('${resolve('../components/ImageComparer.astro')}').default;

    /**
     * Shoelace.style <sl-include> component
     * 
     * @see https://shoelace.style/components/include
     * 
     * @param {string} src - The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.
     * @param {string} mode - The fetch mode to use. Can be 'cors', 'no-cors', 'same-origin'.
     * @param {boolean} allowScripts - Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.
     */
    export const Include: typeof import('${resolve('../components/Include.astro')}').default;

    /**
     * Shoelace.style <sl-input> component
     * 
     * @see https://shoelace.style/components/input
     * 
     * @param {string} type - The type of the input. Can be 'date', 'datetime-local', 'email', 'number', 'password', 'search', 'tel', 'text', 'time', 'url'.
     * @param {string} name - The name of the input, submitted as a name/value pair with form data.
     * @param {string} value - The current value of the input, submitted as a name/value pair with form data.
     * @param {string} defaultValue - The default value of the form control. Primarily used for resetting the form control.
     * @param {string} size - The input's size. Can be 'small', 'medium', 'large'.
     * @param {boolean} filled - Draws a filled input.
     * @param {boolean} pill - Draws a pill-style input with rounded edges.
     * @param {string} label - The input's label. If you need to display HTML, use the 'label' slot instead.
     * @param {string} helpText - The input's help text. If you need to display HTML, use the 'help-text' slot instead.
     * @param {boolean} clearable - Adds a clear button when the input is not empty.
     * @param {boolean} disabled - Disables the input.
     * @param {string} placeholder - Placeholder text to show as a hint when the input is empty.
     * @param {boolean} readonly - Makes the input readonly.
     * @param {boolean} passwordToggle - Adds a button to toggle the password's visibility. Only applies to password types.
     * @param {string} pattern - A regular expression that the value must match to pass validation.
     * @param {string} min - The minimum value of the input.
     * @param {string} max - The maximum value of the input.
     * @param {string} form - The id of the form that the input is associated with.
     * @param {boolean} required - Makes the input a required field.
     * @param {number} minlength - The minimum length of input that will be considered valid.
     * @param {number} maxlength - The maximum length of input that will be considered valid.
     * @param {string} autocomplete - The input's autocomplete attribute.
     * @param {string} autocapitalize - The input's autocapitalize attribute.
     * @param {string} autocorrect - The input's autocorrect attribute.
     * @param {string} spellcheck - The input's spellcheck attribute.
     * @param {string} inputmode - The input's inputmode attribute.
     */
    export const Input: typeof import('${resolve('../components/Input.astro')}').default;

    /**
     * Shoelace.style <sl-menu> component
     * 
     * @see https://shoelace.style/components/menu
     */
    export const Menu: typeof import('${resolve('../components/menu/Menu.astro')}').default;

    /**
     * Shoelace.style <sl-menu-item> component
     * 
     * @see https://shoelace.style/components/menu-item
     * 
     * @param {string} type - The type of menu item to render. To use 'checked', this value must be set to 'checkbox'.
     * @param {boolean} checked - Draws the item in a checked state.
     * @param {string} value - A unique value to store in the menu item. This can be used as a way to identify menu items when selected.
     * @param {boolean} loading - Draws the menu item in a loading state.
     * @param {boolean} disabled - Draws the menu item in a disabled state, preventing selection.
     */
    export const MenuItem: typeof import('${resolve('../components/menu/MenuItem.astro')}').default;

    /**
     * Shoelace.style <sl-menu-label> component
     * 
     * @see https://shoelace.style/components/menu-label
     */
    export const MenuLabel: typeof import('${resolve('../components/menu/MenuLabel.astro')}').default;

    /**
     * Shoelace.style <sl-mutation-observer> component
     * 
     * @see https://shoelace.style/components/mutation-observer
     * 
     * @param {string} attr - Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g. 'attr="class id title"'. To watch all attributes, use '*'.
     * @param {boolean} attrOldValue - Indicates whether or not the attribute's previous value should be recorded when monitoring changes.
     * @param {boolean} charData - Watches for changes to the character data contained within the node.
     * @param {boolean} charDataOldValue - Indicates whether or not the previous value of the node's text should be recorded.
     * @param {boolean} childList - Watches for the addition or removal of new child nodes.
     * @param {boolean} disabled - Disables the observer.
     */
    export const MutationObserver: typeof import('${resolve('../components/MutationObserver.astro')}').default;

    /**
     * Shoelace.style <sl-option> component
     * 
     * @see https://shoelace.style/components/option
     * 
     * @param {string} value - The value of the option.
     * @param {boolean} disabled - Disables the option.
     */
    export const Option: typeof import('${resolve('../components/select/Option.astro')}').default;

    /**
     * Shoelace.style <sl-popup> component
     * 
     * @see https://shoelace.style/components/popup
     * 
     * @param {HTMLElement} popup - A reference to the internal popup container. Useful for animating and styling the popup with JavaScript.
     * @param {Element | string | VirtualElement} anchor - The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor
     * @param {boolean} active - Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn down and the popup will be hidden.
     * @param {string} placement - The preferred placement of the popup. Note that the actual placement may vary as needed to keep the popup inside of the viewport. Can be 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end' 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'.
     * @param {string} strategy - The strategy to use when positioning the popup. Can be 'fixed', 'absolute'.
     * @param {number} distance - The distance the popup should be from its anchor.
     * @param {number} skidding - The distance the popup's arrow should be from the edge of the popup.
     * @param {boolean} arrow - Attaches an arrow to the popup.
     * @param {string} arrowPlacement - The placement of the arrow. The default is 'anchor', which will align the arrow as close to the center of the anchor as possible, considering available space and 'arrow-padding'.
     * @param {number} arrowPadding - The padding between the arrow and the edge of the popup.
     * @param {boolean} flip - When set, placement of the popup will flip to the opposite site to keep it in view. You can use 'flipFallbackPlacements' to further configure how the fallback placement is determined.
     * @param {string} flipFallbackPlacements - If the preferred placement doesn't fit, popup will be tested in these fallback placements until one fits. Must be a string of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip fallback strategy will be used instead.
     * @param {string} flipFallbackStrategy - When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether the popup should be positioned using the best available fit based on available space or as it was initially preferred. Can be 'best-fit' or 'initial'.
     * @param {Element | Element[]} flipBoundary - The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping.
     * @param {number} flipPadding - The amount of padding, in pixels, to exceed before the flip behavior will occur.
     * @param {boolean} shift - Moves the popup along the axis to keep it in view when clipped.
     * @param {Element | Element[]} shiftBoundary - The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting.
     * @param {number} shiftPadding - The amount of padding, in pixels, to exceed before the shift behavior will occur.
     * @param {string} autoSize - When set, this will cause the popup to automatically resize itself to prevent it from overflowing. Can be 'horizontal', 'vertical', 'both'.
     * @param {string} sync - Syncs the popup's width or height to that of the anchor element. Can be 'width', 'height', 'both'.
     * @param {Element | Element[]} autoSizeBoundary - The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing.
     * @param {number} autoSizePadding - The amount of padding, in pixels, to exceed before the auto-size behavior will occur.
     * @param {boolean} hoverBridge - When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the gap using an invisible element.
     */
    export const Popup: typeof import('${resolve('../components/Popup.astro')}').default;

    /**
     * Shoelace.style <sl-progress-bar> component
     * 
     * @see https://shoelace.style/components/progress-bar
     * 
     * @param {number} value - The current progress as a percentage, 0 to 100.
     * @param {boolean} indeterminate - When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.
     * @param {string} label - A custom label for assistive devices.
     */
    export const ProgressBar: typeof import('${resolve('../components/ProgressBar.astro')}').default;

    /**
     * Shoelace.style <sl-progress-ring> component
     * 
     * @see https://shoelace.style/components/progress-ring
     * 
     * @param {number} value - The current progress as a percentage, 0 to 100.
     * @param {string} label - A custom label for assistive devices.
     */
    export const ProgressRing: typeof import('${resolve('../components/ProgressRing.astro')}').default;

    /**
     * Shoelace.style <sl-qr-code> component
     * 
     * @see https://shoelace.style/components/qr-code
     * 
     * @param {string} value - The value of the QR code.
     * @param {number} size - The size of the QR code in pixels.
     * @param {string} label - The label of the QR code.
     * @param {string} fill - The fill color. This can be any valid CSS color, but not a CSS custom property.
     * @param {string} background - The background color. This can be any valid CSS color, but not a CSS custom property.
     * @param {number} radius - The edge radius of each module. Must be between 0 and 0.5.
     * @param {string} errorCorrection - The lel of correction to use. Can be 'L', 'M', 'Q', 'H'. [learn more](https://www.qrcode.com/en/about/error_correction.html)
     */
    export const QrCode: typeof import('${resolve('../components/QrCode.astro')}').default;
    
    /**
     * Shoelace.style <sl-radio> component
     * 
     * @see https://shoelace.style/components/radio
     * 
     * @param {string} value - The radio's value. When selected, the radio group will receive this value.
     * @param {string} size - The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this attribute can typically be omitted. Can be 'small', 'medium', 'large'.
     * @param {boolean} disabled - Disables the radio.
     */
    export const Radio: typeof import('${resolve('../components/radios/Radio.astro')}').default;

    /**
     * Shoelace.style <sl-radio-button> component
     * 
     * @see https://shoelace.style/components/radio-button
     * 
     * @param {string} value - The radio's value. When selected, the radio group will receive this value.
     * @param {boolean} disabled - Disables the radio button.
     * @param {string} size - The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so this attribute can typically be omitted. Can be 'small', 'medium', 'large'.
     * @param {boolean} pill - Draws a pill-style radio button with rounded edges.
     */
    export const RadioButton: typeof import('${resolve('../components/radios/RadioButton.astro')}').default;

    /**
     * Shoelace.style <sl-radio-group> component
     * 
     * @see https://shoelace.style/components/radio-group
     * 
     * @param {string} name - The name of the radio group, submitted as a name/value pair with form data.
     * @param {string} value - The current value of the radio group, submitted as a name/value pair with form data.
     * @param {string} label - The radio group's label. If you need to display HTML, use the 'label' slot instead.
     * @param {string} helpText - The radio group's help text. If you need to display HTML, use the 'help-text' slot instead.
     * @param {string} size - The radio group's size. Can be 'small', 'medium', 'large'.
     * @param {string} form - The id of the form that the radio group is associated with.
     * @param {boolean} required - Makes the radio group a required field.
     */
    export const RadioGroup: typeof import('${resolve('../components/radios/RadioGroup.astro')}').default;

    /**
     * Shoelace.style <sl-range> component
     * 
     * @see https://shoelace.style/components/range
     */
    export const Range: typeof import('${resolve('../components/Range.astro')}').default;

    /**
     * Shoelace.style <sl-rating> component
     * 
     * @see https://shoelace.style/components/rating
     * 
     * @param {string} label - A label that describes the rating to assistive devices.
     * @param {number} value - The current rating value.
     * @param {number} max - The maximum rating value.
     * @param {number} precision - The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this ttribute to '0.5'.
     * @param {boolean} readonly - Makes the rating readonly.
     * @param {boolean} disabled - Disables the rating.
     */
    export const Rating: typeof import('${resolve('../components/Rating.astro')}').default;

    /**
     * Shoelace.style <sl-relative-time> component
     * 
     * @see https://shoelace.style/components/relative-time
     * 
     * @param {string} date - The date to format.
     * @param {string} lang - The language to use when formatting the date.
     * @param {'short' | 'narrow' | 'long'} format - The formatting style to use for the numeric representation of the time.
     * @param {'always' | 'auto'} numeric - The formatting style to use for the numeric representation of the time.
     * @param {boolean} sync - Keep the displayed value up to date as time passes.
     */
    export const RelativeTime: typeof import('${resolve('../components/RelativeTime.astro')}').default;
    
    /**
     * Shoelace.style <sl-resize-observer> component
     * 
     * @see https://shoelace.style/components/resize-observer
     * 
     * @param {string} disabled - Disables the observer.
     */
    export const ResizeObserver: typeof import('${resolve('../components/ResizeObserver.astro')}').default;

    /**
     * Shoelace.style <sl-select> component
     * 
     * @see https://shoelace.style/components/select
     * 
     * @param {string} name - The name of the select, submitted as a name/value pair with form data.
     * @param {string} value - The current value of the select, submitted as a name/value pair with form data. When 'multiple' is enabled, the value attribute will be a space-delimited list of values based on the options selected, and the value property will be an array. **For this reason, values must not contain spaces.**
     * @param {string} defaultValue - The default value of the form control. Primarily used for resetting the form control.
     * @param {string} size - The select's size. Can be 'small', 'medium', 'large'.
     * @param {string} placeholder - Placeholder text to show as a hint when the select is empty.
     * @param {boolean} multiple - Allows more than one option to be selected.
     * @param {number} maxOptionsVisible - The maximum number of selected options to show when 'multiple' is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to 0 to remove the limit.
     * @param {boolean} disabled - Disables the select control.
     * @param {boolean} clearable - Adds a clear button when the select is not empty.
     * @param {boolean} open - Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can use the 'show()' and 'hide()' methods and this attribute will reflect the select's open state.
     * @param {boolean} hoist - Whether the select should be hoisted to the body to avoid clipping issues.
     * @param {boolean} required - Makes the select a required field.
     * @param {string} helpText - The select's help text. If you need to display HTML, use the 'help-text' slot instead.
     * @param {string} form - The id of the form that the select is associated with.
     * @param {string} label - The select's label. If you need to display HTML, use the 'label' slot instead.
     * @param {string} placement - The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox inside of the viewport.
     */
    export const Select: typeof import('${resolve('../components/select/Select.astro')}').default;

    /**
     * Shoelace.style <sl-skeleton> component
     * 
     * @see https://shoelace.style/components/skeleton
     * 
     * @param {string} effect - The type of skeleton effect to use. Can be 'pulse', 'sheen', 'none'.
     */
    export const Skeleton: typeof import('${resolve('../components/Skeleton.astro')}').default;

    /**
     * Shoelace.style <sl-spinner> component
     * 
     * @see https://shoelace.style/components/spinner
     */
    export const Spinner: typeof import('${resolve('../components/Spinner.astro')}').default;

    /**
     * Shoelace.style <sl-split-panel> component
     * 
     * @see https://shoelace.style/components/split-panel
     * 
     * @param {number} position - The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the container's initial size.
     * @param {number} positionInPixels - The current position of the divider from the primary panel's edge in pixels.
     * @param {boolean} virtual - Draws the split panel in a vertical orientation with the start and end panels stacked.
     * @param {boolean} disabled - Disables resizing. Note that the position may still change as a result of resizing the host element.
     * @param {'start' | 'end'} primary - If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a primary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the host element is resized.
     * @param {string} snap - One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g. "100px 50%".
     * @param {number} snapThreshold - How close the divider must be to a snap point until snapping occurs.
     */
    export const SplitPanel: typeof import('${resolve('../components/SplitPanel.astro')}').default;

    /**
     * Shoelace.style <sl-switch> component
     * 
     * @see https://shoelace.style/components/switch
     * 
     * @param {string} name - The name of the switch, submitted as a name/value pair with form data.
     * @param {string} value - The value of the switch when it's checked, submitted as a name/value pair with form data.
     * @param {'small' | 'medium' | 'large'} size - The size of the switch. Can be 'small', 'medium', 'large'.
     * @param {boolean} disabled - Disables the switch.
     * @param {boolean} checked - Whether the switch is checked or not.
     * @param {boolean} defaultChecked - The default value of the form control. Primarily used for resetting the form control.
     * @param {string} form - By default, form controls are associated with the nearest containing '<form>' element. This attribute allows you to place the form control outside of a form and associate it with the form that has this 'id'. The form must be in the same document or shadow root for this to work.
     * @param {boolean} required - Makes the switch a required field.
     * @param {string} helpText - The switch's help text. If you need to display HTML, use the 'help-text' slot instead.
     */
    export const Switch: typeof import('${resolve('../components/Switch.astro')}').default;

    /**
     * Shoelace.style <sl-tab> component
     * 
     * @see https://shoelace.style/components/tab
     * 
     * @param {string} panel - The id of the tab panel the tab will control.
     * @param {boolean} disabled - Disables the tab.
     * @param {boolean} active - Makes the tab active.
     * @param {boolean} closable - Makes the tab closable and shows a close button.
     */
    export const Tab: typeof import('${resolve('../components/tabs/Tab.astro')}').default;

    /**
     * Shoelace.style <sl-tab-group> component
     * 
     * @see https://shoelace.style/components/tab-group
     * 
     * @param {'top' | 'right' | 'bottom' | 'left'} placement - The placement of the tabs. Can be 'top', 'right', 'bottom', 'left'.
     * @param {'auto' | 'manual'} activation - When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to manual, the tab will receive focus but will not show until the user presses spacebar or enter.
     * @param {boolean} noScrollControls - Hides the scroll controls when tabs are scrollable.
     */
    export const TabGroup: typeof import('${resolve('../components/tabs/TabGroup.astro')}').default;

    /**
     * Shoelace.style <sl-tab-panel> component
     * 
     * @see https://shoelace.style/components/tab-panel
     * 
     * @param {string} name - The name of the tab panel.
     * @param {boolean} active - When true, the tab panel will be shown.
     */
    export const TabPanel: typeof import('${resolve('../components/tabs/TabPanel.astro')}').default;

    /**
     * Shoelace.style <sl-tag> component
     * 
     * @see https://shoelace.style/components/tag
     * 
     * @param {'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text'} variant - The tag's theme variant.
     * @param {'small' | 'medium' | 'large'} size - The size of the tag. Can be 'small', 'medium', 'large'.
     * @param {boolean} pill - Draws a pill-style tag with rounded edges.
     * @param {boolean} removable - Makes the tag removable and shows a remove button.
     */
    export const Tag: typeof import('${resolve('../components/Tag.astro')}').default;

    /**
     * Shoelace.style <sl-textarea> component
     * 
     * @see https://shoelace.style/components/textarea
     * 
     * @param {string} name - The name of the textarea, submitted as a name/value pair with form data.
     * @param {string} value - The current value of the textarea, submitted as a name/value pair with form data.
     * @param {'small' | 'medium' | 'large'} size - The textarea's size. Can be 'small', 'medium', 'large'.
     * @param {boolean} filled - Draws a filled textarea.
     * @param {string} label - The textarea's label. If you need to display HTML, use the 'label' slot instead.
     * @param {string} helpText - The textarea's help text. If you need to display HTML, use the 'help-text' slot instead.
     * @param {string} placeholder - Placeholder text to show as a hint when the textarea is empty.
     * @param {number} rows - The number of rows to display by default.
     * @param {'none' | 'vertical' | 'auto'} resize - Controls how the textarea can be resized.
     * @param {boolean} disabled - Disables the textarea.
     * @param {boolean} readonly - Makes the textarea readonly.
     * @param {string} form - By default, form controls are associated with the nearest containing '<form>' element. This attribute allows you to place the form control outside of a form and associate it with the form that has this 'id'. The form must be in the same document or shadow root for this to work.
     * @param {boolean} required - Makes the textarea a required field.
     * @param {number} minlength - The minimum length of input that will be considered valid.
     * @param {number} maxlength - The maximum length of input that will be considered valid.
     * @param {string} autocomplete - The textarea's autocomplete attribute.
     * @param {string} autocapitalize - The textarea's autocapitalize attribute.
     * @param {string} autocorrect - The textarea's autocorrect attribute.
     * @param {string} spellcheck - The textarea's spellcheck attribute.
     * @param {'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'} inputmode - The textarea's inputmode attribute.
     * @param {boolean} autofocus - Automatically focuses the textarea when the page loads.
     * @param {'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'} enterkeyhint - Used to customize the label or icon of the Enter key on virtual keyboards.
     * @param {string} defaultValue - The default value of the form control. Primarily used for resetting the form control.
     */
    export const Textarea: typeof import('${resolve('../components/Textarea.astro')}').default;

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
    export const Tooltip: typeof import('${resolve('../components/Tooltip.astro')}').default;

    /**
     * Shoelace.style <sl-tree> component
     * 
     * @see https://shoelace.style/components/tree
     * 
     * @param {'single' | 'multiple' | 'leaf'} selection - The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
     */
    export const Tree: typeof import('${resolve('../components/tree/Tree.astro')}').default;

    /**
     * Shoelace.style <sl-tree-item> component
     * 
     * @see https://shoelace.style/components/tree-item
     * 
     * @param {boolean} expanded - Expands the tree item.
     * @param {boolean} selected - Draws the tree item in a selected state.
     * @param {boolean} disabled - Disables the tree item.
     * @param {boolean} lazy - Enables lazy loading behavior.
     */
    export const TreeItem: typeof import('${resolve('../components/tree/TreeItem.astro')}').default;
    
    /**
     * Shoelace.style <sl-visually-hidden> component
     * 
     * @see https://shoelace.style/components/visually-hidden
     */
    export const VisuallyHidden: typeof import('${resolve('../components/VisuallyHidden.astro')}').default;

};

declare module 'astrolace:components/header' {
    /** 
     * Shoelace.style header component.
     * 
     * @description This component is used to register the Shoelace.style default icon library. (Bootstrap Icons v1.11.3)
     * 
     * @usage Put this in your Astro Layout's head tag.
     * 
     * @example
     * 
     * <html>
     *    <head>
     *       <ShoelaceHeader />
     *    </head>
     * </html>
    */
    export const ShoelaceHeader: typeof import('${resolve('../components/header/ShoelaceHeader.astro')}').default;
};
`);

export const componentFile = componentsDTS.text();