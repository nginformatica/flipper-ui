import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: prop => prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true
    }
  },
  webpackFinal: async config => {
    if (config.resolve?.alias) {
      config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    }
    return config;
  }
};
export default config;