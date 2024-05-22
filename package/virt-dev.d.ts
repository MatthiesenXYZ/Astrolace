
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
