import { test, expect } from '@playwright/test';

test('PWA carrega e mostra título', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page).toHaveTitle(/Bootcamp/);
});
