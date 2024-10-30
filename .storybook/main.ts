import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: [
        '../src/stories/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-webpack5-compiler-babel'
    ],
    docs: {
        autodocs: true
    },
    webpackFinal: async config => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '../src')
            }
        }
        return config
    }
}

export default config
