import { test, expect } from '@playwright/test';

test('EPAM client work navigation flow', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const acceptAll = page.getByRole('button', { name: 'Accept All' });
  if (await acceptAll.isVisible().catch(() => false)) {
    await acceptAll.click();
  }

  await page.getByRole('link', { name: 'Services' }).nth(1).click();
  await page.waitForLoadState('networkidle').catch(() => {});

  await page.getByRole('link', { name: /Explore Our Client Work/i }).first().click();
  await page.waitForLoadState('networkidle').catch(() => {});

  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
