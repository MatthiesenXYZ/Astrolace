import { createResolver } from "astro-integration-kit";
import { fileFactory } from "../utils";

const { resolve } = createResolver(import.meta.url);
const componentsHeadersDTS = fileFactory();

componentsHeadersDTS.addLines(`declare module 'astrolace:components/header' {
    /** 
     * Shoelace.style header component.
     * 
     * @description This component is used to include the default icons for the Shoelace.style library.
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
    export const ShoelaceHeader: typeof import('${resolve('../components/header/index.ts')}').ShoelaceHeader;
};`);

export const componentHeaderFile = componentsHeadersDTS.text();