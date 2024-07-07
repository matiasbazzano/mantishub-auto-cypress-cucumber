const { defineConfig } = require("cypress");
const cypressOnFix = require('cypress-on-fix');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on = cypressOnFix(on);
      require('cypress-mochawesome-reporter/plugin')(on);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome',
      overwrite: false,
      html: true
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
