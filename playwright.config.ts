import { defineConfig } from '@playwright/test'
const baseURL = `http://127.0.0.1:${process.env.LILY_PREVIEW_PORT ?? 4173}`
export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  use: {
    baseURL,
    viewport: { width: 1440, height: 900 },
    launchOptions: { executablePath: process.env.CHROMIUM_PATH },
  },
  webServer: { command: 'node scripts/serve-build.mjs', url: baseURL, reuseExistingServer: !process.env.CI },
})
