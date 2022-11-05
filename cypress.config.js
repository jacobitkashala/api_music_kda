const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:8080/api/v1',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
