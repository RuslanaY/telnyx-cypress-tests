const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ojkz7p",

  e2e: {
    baseUrl: "https://telnyx.com",
    specPattern: "cypress/e2e/**/*.cy.js",
  },

  video: false,
  screenshotOnRunFailure: true,
});