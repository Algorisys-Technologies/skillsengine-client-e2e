import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 920000, // Global timeout of 2 minutes for all tests
  use: {
    baseURL: 'https://skillzengine.algorisys.com/client/',
    headless: false, // Set to true if you want to run the tests without a browser UI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry', // Records video only if the test fails the first time
  },
});
