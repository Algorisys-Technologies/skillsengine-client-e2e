import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://143.110.186.35:4000/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Today\'s test' }).click();
  await page.locator('li').filter({ hasText: 'Pending test 0 View' }).getByRole('link', { timeout: 120000 }).click();
  await page.getByRole('link', { name: '' }).click();
});