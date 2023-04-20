import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    docs: {
        autodocs: true
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    webpackFinal: async config => {
        if (config.resolve?.alias) {
            config.resolve.alias['@'] = path.resolve(__dirname, '../src')
        }

        return config
    }
}

export default config
