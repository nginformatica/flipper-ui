import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    features: {
        storyStoreV7: false
    },
    addons: ['@storybook/addon-essentials', '@storybook/addon-styling-webpack'],
    docs: {
        autodocs: true
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            propFilter: prop =>
                prop.parent
                    ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
                    : true
        }
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
