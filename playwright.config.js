const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  timeout: 8000000, // Global test timeout
  expect: {
    timeout: 250000, // Expect timeout
  },
  fullyParallel: true,
  reporter: [
    ['list'], // Detailed console output
    ['html', { outputFolder: 'playwright-report' }],
  ],
  use: {
    actionTimeout: 8000000, // Action timeout
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  testMatch: ['tests/**/*.spec.js', '*.spec.js'],
};
