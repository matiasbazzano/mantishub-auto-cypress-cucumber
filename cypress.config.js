const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      
      await addCucumberPreprocessorPlugin(on, config);
      
      return config;
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: true,
      html: true,
      json: false
    },
    specPattern: [
      "cypress/e2e/features/ui/*.feature",
      "cypress/e2e/features/api/*.feature"
    ],
    baseUrl: "https://cucumber-cypress02.mantishub.io/",
    stepDefinitions: "cypress/support/step_definitions/*.{js,ts}",
    defaultCommandTimeout: 20000,
  },
});