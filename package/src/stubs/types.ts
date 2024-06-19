import { createResolver } from "astro-integration-kit";
import { fileFactory } from "../utils";

const { resolve } = createResolver(import.meta.url);
const typesDTS = fileFactory();

typesDTS.addLines(`declare module 'astrolace:types' {
    /** 
     * Shoelace.style SlAlert
     * 
     * @see https://shoelace.style/components/alert
     */
    export type SlAlert = import('${resolve('../types/index.ts')}').SlAlert;

    /**
     * Shoelace.style SlAnimatedImage
     * 
     * @see https://shoelace.style/components/animated-image
     */
    export type SlAnimatedImage = import('${resolve('../types/index.ts')}').SlAnimatedImage;

    /**
     * Shoelace.style SlAnimation
     * 
     * @see https://shoelace.style/components/animation
     */
    export type SlAnimation = import('${resolve('../types/index.ts')}').SlAnimation;

    /**
     * Shoelace.style SlAvatar
     * 
     * @see https://shoelace.style/components/avatar
     */
    export type SlAvatar = import('${resolve('../types/index.ts')}').SlAvatar;

    /**
     * Shoelace.style SlBadge
     * 
     * @see https://shoelace.style/components/badge
     */
    export type SlBadge = import('${resolve('../types/index.ts')}').SlBadge;

    /**
     * Shoelace.style SlBreadcrumb
     * 
     * @see https://shoelace.style/components/breadcrumb
     */
    export type SlBreadcrumb = import('${resolve('../types/index.ts')}').SlBreadcrumb;

    /**
     * Shoelace.style SlBreadcrumbItem
     * 
     * @see https://shoelace.style/components/breadcrumb-item
     */
    export type SlBreadcrumbItem = import('${resolve('../types/index.ts')}').SlBreadcrumbItem;

    /**
     * Shoelace.style SlButton
     * 
     * @see https://shoelace.style/components/button
     */
    export type SlButton = import('${resolve('../types/index.ts')}').SlButton;

    /**
     * Shoelace.style SlButtonGroup
     * 
     * @see https://shoelace.style/components/button-group
     */
    export type SlButtonGroup = import('${resolve('../types/index.ts')}').SlButtonGroup;

    /**
     * Shoelace.style SlCard
     * 
     * @see https://shoelace.style/components/card
     */
    export type SlCard = import('${resolve('../types/index.ts')}').SlCard;

    /**
     * Shoelace.style SlCarousel
     * 
     * @see https://shoelace.style/components/carousel
     */
    export type SlCarousel = import('${resolve('../types/index.ts')}').SlCarousel;

    /**
     * Shoelace.style SlCarouselItem
     * 
     * @see https://shoelace.style/components/carousel-item
     */
    export type SlCarouselItem = import('${resolve('../types/index.ts')}').SlCarouselItem;

    /**
     * Shoelace.style SlCheckbox
     * 
     * @see https://shoelace.style/components/checkbox
     */
    export type SlCheckbox = import('${resolve('../types/index.ts')}').SlCheckbox;

    /**
     * Shoelace.style SlColorPicker
     * 
     * @see https://shoelace.style/components/color-picker
     */
    export type SlColorPicker = import('${resolve('../types/index.ts')}').SlColorPicker;

    /**
     * Shoelace.style SlCopyButton
     * 
     * @see https://shoelace.style/components/copy-button
     */
    export type SlCopyButton = import('${resolve('../types/index.ts')}').SlCopyButton;

    /**
     * Shoelace.style SlDetails
     * 
     * @see https://shoelace.style/components/details
     */
    export type SlDetails = import('${resolve('../types/index.ts')}').SlDetails;

    /**
     * Shoelace.style SlDialog
     * 
     * @see https://shoelace.style/components/dialog
     */
    export type SlDialog = import('${resolve('../types/index.ts')}').SlDialog;

    /**
     * Shoelace.style SlDivider
     * 
     * @see https://shoelace.style/components/divider
     */
    export type SlDivider = import('${resolve('../types/index.ts')}').SlDivider;

    /**
     * Shoelace.style SlDrawer
     * 
     * @see https://shoelace.style/components/drawer
     */
    export type SlDrawer = import('${resolve('../types/index.ts')}').SlDrawer;

    /**
     * Shoelace.style SlDropdown
     * 
     * @see https://shoelace.style/components/dropdown
     */
    export type SlDropdown = import('${resolve('../types/index.ts')}').SlDropdown;

    /**
     * Shoelace.style SlFormatBytes
     * 
     * @see https://shoelace.style/components/formatters/format-bytes
     */
    export type SlFormatBytes = import('${resolve('../types/index.ts')}').SlFormatBytes;

    /**
     * Shoelace.style SlFormatDate
     * 
     * @see https://shoelace.style/components/formatters/format-date
     */
    export type SlFormatDate = import('${resolve('../types/index.ts')}').SlFormatDate;
    
    /**
     * Shoelace.style SlFormatNumber
     * 
     * @see https://shoelace.style/components/formatters/format-number
     */
    export type SlFormatNumber = import('${resolve('../types/index.ts')}').SlFormatNumber;

    /**
     * Shoelace.style SlIcon
     * 
     * @see https://shoelace.style/components/icon
     */
    export type SlIcon = import('${resolve('../types/index.ts')}').SlIcon;

    /**
     * Shoelace.style SlIconButton
     * 
     * @see https://shoelace.style/components/icon-button
     */
    export type SlIconButton = import('${resolve('../types/index.ts')}').SlIconButton;

    /**
     * Shoelace.style SlImageComparer
     * 
     * @see https://shoelace.style/components/image-comparer
     */
    export type SlImageComparer = import('${resolve('../types/index.ts')}').SlImageComparer;

    /**
     * Shoelace.style SlInclude
     * 
     * @see https://shoelace.style/components/include
     */
    export type SlInclude = import('${resolve('../types/index.ts')}').SlInclude;

    /**
     * Shoelace.style SlInput
     * 
     * @see https://shoelace.style/components/input
     */
    export type SlInput = import('${resolve('../types/index.ts')}').SlInput;

    /**
     * Shoelace.style SlMenu
     * 
     * @see https://shoelace.style/components/menu
     */
    export type SlMenu = import('${resolve('../types/index.ts')}').SlMenu;

    /**
     * Shoelace.style SlMenuItem
     * 
     * @see https://shoelace.style/components/menu-item
     */
    export type SlMenuItem = import('${resolve('../types/index.ts')}').SlMenuItem;

    /**
     * Shoelace.style SlMenuLabel
     * 
     * @see https://shoelace.style/components/menu-label
     */
    export type SlMenuLabel = import('${resolve('../types/index.ts')}').SlMenuLabel;

    /**
     * Shoelace.style SlMutationObserver
     * 
     * @see https://shoelace.style/components/mutation-observer
     */
    export type SlMutationObserver = import('${resolve('../types/index.ts')}').SlMutationObserver;

    /**
     * Shoelace.style SlOption
     * 
     * @see https://shoelace.style/components/select/option
     */
    export type SlOption = import('${resolve('../types/index.ts')}').SlOption;

    /**
     * Shoelace.style SlPopup
     * 
     * @see https://shoelace.style/components/popup
     */
    export type SlPopup = import('${resolve('../types/index.ts')}').SlPopup;

    /**
     * Shoelace.style SlProgressBar
     * 
     * @see https://shoelace.style/components/progress-bar
     */
    export type SlProgressBar = import('${resolve('../types/index.ts')}').SlProgressBar;

    /**
     * Shoelace.style SlProgressRing
     * 
     * @see https://shoelace.style/components/progress-ring
     */
    export type SlProgressRing = import('${resolve('../types/index.ts')}').SlProgressRing;

    /**
     * Shoelace.style SlQrCode
     * 
     * @see https://shoelace.style/components/qr-code
     */
    export type SlQrCode = import('${resolve('../types/index.ts')}').SlQrCode;

    /**
     * Shoelace.style SlRadio
     * 
     * @see https://shoelace.style/components/radio
     */
    export type SlRadio = import('${resolve('../types/index.ts')}').SlRadio;

    /**
     * Shoelace.style SlRadioButton
     * 
     * @see https://shoelace.style/components/radio-button
     */
    export type SlRadioButton = import('${resolve('../types/index.ts')}').SlRadioButton;

    /**
     * Shoelace.style SlRadioGroup
     * 
     * @see https://shoelace.style/components/radio-group
     */
    export type SlRadioGroup = import('${resolve('../types/index.ts')}').SlRadioGroup;

    /**
     * Shoelace.style SlRange
     * 
     * @see https://shoelace.style/components/range
     */
    export type SlRange = import('${resolve('../types/index.ts')}').SlRange;

    /**
     * Shoelace.style SlRating
     * 
     * @see https://shoelace.style/components/rating
     */
    export type SlRating = import('${resolve('../types/index.ts')}').SlRating;

    /**
     * Shoelace.style SlRelativeTime
     * 
     * @see https://shoelace.style/components/relative-time
     */
    export type SlRelativeTime = import('${resolve('../types/index.ts')}').SlRelativeTime;

    /**
     * Shoelace.style SlResizeObserver
     * 
     * @see https://shoelace.style/components/resize-observer
     */
    export type SlResizeObserver = import('${resolve('../types/index.ts')}').SlResizeObserver;

    /**
     * Shoelace.style SlSelect
     * 
     * @see https://shoelace.style/components/select
     */
    export type SlSelect = import('${resolve('../types/index.ts')}').SlSelect;

    /**
     * Shoelace.style SlSkeleton
     * 
     * @see https://shoelace.style/components/skeleton
     */
    export type SlSkeleton = import('${resolve('../types/index.ts')}').SlSkeleton;

    /**
     * Shoelace.style SlSpinner
     * 
     * @see https://shoelace.style/components/spinner
     */
    export type SlSpinner = import('${resolve('../types/index.ts')}').SlSpinner;

    /**
     * Shoelace.style SlSplitPanel
     * 
     * @see https://shoelace.style/components/split-panel
     */
    export type SlSplitPanel = import('${resolve('../types/index.ts')}').SlSplitPanel;

    /**
     * Shoelace.style SlSwitch
     * 
     * @see https://shoelace.style/components/switch
     */
    export type SlSwitch = import('${resolve('../types/index.ts')}').SlSwitch;

    /**
     * Shoelace.style SlTab
     * 
     * @see https://shoelace.style/components/tab
     */
    export type SlTab = import('${resolve('../types/index.ts')}').SlTab;

    /**
     * Shoelace.style SlTabGroup
     * 
     * @see https://shoelace.style/components/tab-group
     */
    export type SlTabGroup = import('${resolve('../types/index.ts')}').SlTabGroup;

    /**
     * Shoelace.style SlTabPanel
     * 
     * @see https://shoelace.style/components/tab-panel
     */
    export type SlTabPanel = import('${resolve('../types/index.ts')}').SlTabPanel;

    /**
     * Shoelace.style SlTag
     * 
     * @see https://shoelace.style/components/tag
     */
    export type SlTag = import('${resolve('../types/index.ts')}').SlTag;

    /**
     * Shoelace.style SlTextarea
     * 
     * @see https://shoelace.style/components/textarea
     */
    export type SlTextarea = import('${resolve('../types/index.ts')}').SlTextarea;

    /**
     * Shoelace.style SlTooltip
     * 
     * @see https://shoelace.style/components/tooltip
     */
    export type SlTooltip = import('${resolve('../types/index.ts')}').SlTooltip;

    /**
     * Shoelace.style SlTree
     * 
     * @see https://shoelace.style/components/tree
     */
    export type SlTree = import('${resolve('../types/index.ts')}').SlTree;

    /**
     * Shoelace.style SlTreeItem
     * 
     * @see https://shoelace.style/components/tree-item
     */
    export type SlTreeItem = import('${resolve('../types/index.ts')}').SlTreeItem;

    /**
     * Shoelace.style SlVisuallyHidden
     * 
     * @see https://shoelace.style/components/visually-hidden
     */
    export type SlVisuallyHidden = import('${resolve('../types/index.ts')}').SlVisuallyHidden;

    /**
     * Shoelace.style VirtualElement
     * 
     * VirtualElement is a utility interface for the sl-popup component
     * 
     * The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor element 'id', a DOM element reference, or a 'VirtualElement'. If the anchor lives inside the popup, use the 'anchor' slot instead.
     * 
     * @see https://shoelace.style/components/popup
     * 
     * @returns {DOMRect} getBoundingClientRect
     * @returns {Element} contextElement
     */
    export type VirtualElement = import('${resolve('../types/index.ts')}').VirtualElement;
};`);

export const typesFile = typesDTS.text();