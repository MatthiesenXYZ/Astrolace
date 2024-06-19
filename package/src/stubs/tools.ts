import { createResolver } from "astro-integration-kit";
import { fileFactory } from "../utils";

const { resolve } = createResolver(import.meta.url);
const toolsDTS = fileFactory();

toolsDTS.addLines(`declare module 'astrolace:tools' {

    /**
     * # Shoelace.style Icon Library Registration
     * 
     * Adds an icon library to the registry, or overrides an existing one.
     * 
     * @see https://shoelace.style/components/icon#icon-libraries
     */
    export const registerIconLibrary: typeof import('${resolve('../tools/index.ts')}').registerIconLibrary;
};
`);

export const toolsFile = toolsDTS.text();