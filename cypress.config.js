const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.fieldwire.com/',
    defaultCommandTimeout: 30000
  },
});
