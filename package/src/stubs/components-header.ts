import { createResolver } from "astro-integration-kit";
import { fileFactory } from "../utils";

const { resolve } = createResolver(import.meta.url);
const componentsHeadersDTS = fileFactory();

componentsHeadersDTS.addLines(`declare module 'astrolace:components/header' {
    /** 
     * Shoelace.style Themes and Loader
     * 
     * This component will allow shoelace.style themes to work with the custom components.
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