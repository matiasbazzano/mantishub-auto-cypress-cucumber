const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  plugins: [
    createBundler(),
  ],
  e2e: {
    async setupNodeEvents(on, config) {
      const esbuildOptions = await createEsbuildPlugin(config);
      
      on('file:preprocessor', addCucumberPreprocessorPlugin(config));
      on('file:preprocessor', createBundler(esbuildOptions));

      return config;
    },
    reporter: 'cucumber',
    reporterOptions: {
      cucumber: {
        output: 'cypress/reports/cucumber/cucumber_report.json',
        format: 'json',
        testDir: 'cypress/e2e/features',
      },
    },
    specPattern: [
      'cypress/e2e/features/**/*.feature',
    ],
    baseUrl: 'https://cucumber-cypress02.mantishub.io/',
    stepDefinitions: 'cypress/support/step_definitions/*.{js,ts}',
    defaultCommandTimeout: 20000,
  },
});
