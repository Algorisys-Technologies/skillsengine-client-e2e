import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skillzengine.algorisys.com/client/');
  await page.getByRole('button', { name: 'Logout   ' }).click();
  await page.getByText('Log in by entering your email').click();
  await page.getByText('Email address', { exact: true }).click();
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  await page.goto('https://skillzengine.algorisys.com/client/dashboard');
});