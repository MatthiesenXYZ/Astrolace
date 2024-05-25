import { createResolver } from "astro-integration-kit";
import { fileFactory } from "../utils";

const { resolve } = createResolver(import.meta.url);
const toolsDTS = fileFactory();

toolsDTS.addLines(`declare module 'astrolace:tools' {
    export const registerIconLibrary: typeof import('${resolve('../tools/index.ts')}').registerIconLibrary;
};`);

export const toolsFile = toolsDTS.text();