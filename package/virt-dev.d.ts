
declare module 'astrolace:components' {
    export const Icon: typeof import('./src/components/index.ts').Icon;
    export const IconButton: typeof import('./src/components/index.ts').IconButton;
    export const Tooltip: typeof import('./src/components/index.ts').Tooltip;
    export const Button: typeof import('./src/components/index.ts').Button;
    export const ButtonGroup: typeof import('./src/components/index.ts').ButtonGroup;
    export const Alert: typeof import('./src/components/index.ts').Alert;
}

declare module 'astrolace:components/header' {
    export const ShoelaceHeader: typeof import('./src/components/header/index.ts').ShoelaceHeader;
}

declare module 'astrolace:tools' {
    export const registerIconLibrary: typeof import('./src/tools/index.ts').registerIconLibrary;
}

declare module 'astrolace:types' {
    import type { 
        SlAlert, SlAnimatedImage, SlAnimation, SlAvatar, 
        SlBadge, SlBreadcrumb, SlBreadcrumbItem, SlButton, SlButtonGroup, 
        SlCard, SlCarousel, SlCarouselItem, SlCheckbox, SlColorPicker, SlCopyButton,
        SlDetails, SlDialog, SlDivider, SlDrawer, SlDropdown, SlFormatBytes, SlFormatDate, SlFormatNumber,
        SlIcon, SlIconButton, SlImageComparer, SlInclude, SlInput, SlMenu, SlMenuItem, SlMenuLabel, SlMutationObserver,
        SlOption, SlPopup, SlProgressBar, SlProgressRing, SlQrCode, SlRadio, SlRadioButton, SlRadioGroup, SlRange, SlRating,
        SlRelativeTime, SlResizeObserver, SlSelect, SlSkeleton, SlSpinner, SlSplitPanel, SlSwitch, SlTab, SlTabGroup, SlTabPanel,
        SlTag, SlTextarea, SlTooltip, SlTree, SlTreeItem, SlVisuallyHidden
    } from '@shoelace-style/shoelace';
    
    export type {
        SlAlert, SlAnimatedImage, SlAnimation, SlAvatar, 
        SlBadge, SlBreadcrumb, SlBreadcrumbItem, SlButton, SlButtonGroup, 
        SlCard, SlCarousel, SlCarouselItem, SlCheckbox, SlColorPicker, SlCopyButton,
        SlDetails, SlDialog, SlDivider, SlDrawer, SlDropdown, SlFormatBytes, SlFormatDate, SlFormatNumber,
        SlIcon, SlIconButton, SlImageComparer, SlInclude, SlInput, SlMenu, SlMenuItem, SlMenuLabel, SlMutationObserver,
        SlOption, SlPopup, SlProgressBar, SlProgressRing, SlQrCode, SlRadio, SlRadioButton, SlRadioGroup, SlRange, SlRating,
        SlRelativeTime, SlResizeObserver, SlSelect, SlSkeleton, SlSpinner, SlSplitPanel, SlSwitch, SlTab, SlTabGroup, SlTabPanel,
        SlTag, SlTextarea, SlTooltip, SlTree, SlTreeItem, SlVisuallyHidden
    };
}