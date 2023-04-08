const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    core: {
        builder: 'webpack5'
    },
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async config => {
        config.resolve.alias['@'] = path.resolve(__dirname, '../src')

        return config
    }
}
