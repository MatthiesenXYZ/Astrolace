import { defineConfig } from "astro/config";
import astrolace from "@matthiesenxyz/astrolace";

// https://astro.build/config
export default defineConfig({
	integrations: [ 
		astrolace({
			verbose: true,
		}) 
	],
});
