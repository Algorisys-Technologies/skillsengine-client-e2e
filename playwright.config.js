const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 600000, // Increased timeout to 10 minutes (600 seconds)
  retries: 2,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
  },
  reporter: [['list'], ['html', { open: 'never' }]],
});
