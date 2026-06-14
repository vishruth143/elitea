import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.epam.com',
    trace: 'on-first-retry',
  },
});
