import { defineConfig } from 'cypress'

export default defineConfig({
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig: require('./cypress/webpack.config.js')
        },
        specPattern: '**/*.feature'
    },
    video: false,
    env: {
        TAGS: '@focus'
    },
    numTestsKeptInMemory: 0,
    viewportWidth: 850
})
