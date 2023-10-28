const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',  
  reporterOptions: {
    "reportDir": "cypress/reports",
    "charts": true,
    "overwrite": false,
    "html": true,
    "json": false,
    "reportPageTitle": "My Test Suite",
    "embeddedScreenshots": true,
    "inlineAssets": true
  },

  e2e: {
    viewportWidth : 1200,
    viewportHeight : 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)

    },
  },
});
