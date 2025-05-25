/* eslint-disable no-param-reassign */
import path from 'path';
import type { Configuration, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default async ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve = config.resolve || {};
  config.resolve.modules = [...(config.resolve.modules || []), paths.src];
  config.resolve.extensions = [...(config.resolve.extensions || []), '.ts', '.tsx'];

  if (!config.module) {
    config.module = { rules: [] };
  }

  if (!config.module.rules) {
    config.module.rules = [];
  }

  config.module.rules.forEach((rule) => {
    if (
      rule
      && typeof rule !== 'string'
      && 'test' in rule
      && rule.test instanceof RegExp
      && rule.test.test('.svg')
    ) {
      (rule as RuleSetRule).exclude = /\.svg$/i;
    }
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module.rules.push(buildCssLoader(true));

  return config;
};
