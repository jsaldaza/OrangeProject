const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
     specPattern: "**/*.feature"
, // 🔥 Solo usa un patrón general
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    defaultCommandTimeout: 10000,

    env: {
      grepTags: "" // 🔥 Se usará dinámicamente en CLI
    },

    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // 🔥 Asegurar que `grepTags` se registre bien
      if (config.env.grepTags) {
        console.log(`🔍 Filtrando pruebas con tags: ${config.env.grepTags}`);
      }

      return config;
    },
  },
});
