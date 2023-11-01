const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // konfigurasi global
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: true,
  watchForFileChanges: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  experimentalStudio: true,

  // konfigurasi E2E
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
