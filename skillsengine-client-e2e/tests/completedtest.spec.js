import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://143.110.186.35:4000/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Logged in :' }).click();
  await page.getByText('Wed Jul 31').click();
  await page.getByText('Completed test 1View').click();
  await page.getByText('1', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Completed test 1View' }).getByRole('link').click();
  await page.getByRole('heading', { name: 'Completed test :1 ' }).click();
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('rowheader', { name: 'GK Test' }).click();
  await page.getByRole('link', { name: 'View result' }).click();
  await page.getByText('Test result').click();
  await page.getByRole('rowheader', { name: 'Test name :' }).click();
  await page.getByRole('cell', { name: 'GK Test' }).click();
  await page.getByRole('rowheader', { name: 'Test date :' }).click();
  await page.getByRole('cell', { name: 'Wed Jul 31' }).click();
  await page.getByRole('rowheader', { name: 'Marks :' }).click();
  await page.getByRole('cell', { name: '50%' }).click({ timeout: 900000 });
  await page.getByText('Back to page').click();
  await page.goto('http://143.110.186.35:4000/dashboard');
});