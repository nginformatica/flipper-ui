import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      require('@cypress/code-coverage/task')(on, config)

      return config
    },
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig: require('./cypress/webpack.config.js')
    },
    specPattern: '**/*.feature'
  },
  video: false,
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*']
    },
    TAGS: '@focus'
  }
})
