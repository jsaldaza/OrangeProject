const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: process.env.BASE_URL || "https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout: 10000,

    env: {
      grepTags: ""
    },

    async setupNodeEvents(on, config) {
      const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
      const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
      const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
  },
});
