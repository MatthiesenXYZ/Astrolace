import type { AstroIntegrationLogger } from "astro";

export type IntegrationLoggerOpts = { 
	logger: AstroIntegrationLogger,
	verbose: boolean,
	type: 'info' | 'warn' | 'error',
}

export const integrationLogger = async (
	opts: IntegrationLoggerOpts,
	message: string
) => {
	if (opts.verbose) {
		if (opts.type === 'info') {
			opts.logger.info(message);
		} else if (opts.type === 'warn') {
			opts.logger.warn(message);
		} else if (opts.type === 'error') {
			opts.logger.error(message);
		}
	}
	if (!opts.verbose) {
		if (opts.type === 'warn') {
			opts.logger.warn(message);
		} else if (opts.type === 'error') {
			opts.logger.error(message);
		}
	}
};

export type LoggerOpts = {
	infoLogger: IntegrationLoggerOpts,
	warnLogger: IntegrationLoggerOpts,
	errorLogger: IntegrationLoggerOpts,
}

export const loggerOpts = (
	logger: AstroIntegrationLogger,
	verbose: boolean,
): LoggerOpts => {
	return {
		infoLogger: { logger, verbose, type: 'info' },
		warnLogger: { logger, verbose, type: 'warn' },
		errorLogger: { logger, verbose, type: 'error' },
	}
}