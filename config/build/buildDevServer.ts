import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true, // allows the use of the HTML5 History API for SPA
    hot: true,
    client: {
      overlay: false,
    },
  };
}
