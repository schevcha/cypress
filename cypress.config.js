const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demo.realworld.io/',
    video: false,
    },
  },
);
