import type { AstroIntegrationLogger } from "astro";
import { AstroError } from "astro/errors";

export const integrationLogger = async (
	logger: AstroIntegrationLogger,
	verbose: boolean,
	type: 'info' | 'warn' | 'error',
	message: string
) => {
	if (verbose) {
		if (type === 'info') {
			logger.info(message);
		} else if (type === 'warn') {
			logger.warn(message);
		} else if (type === 'error') {
			logger.error(message);
            throw new AstroError(message);
		}
	}
	if (!verbose) {
		if (type === 'warn') {
			logger.warn(message);
		} else if (type === 'error') {
			logger.error(message);
            throw new AstroError(message);
		}
	}
};
