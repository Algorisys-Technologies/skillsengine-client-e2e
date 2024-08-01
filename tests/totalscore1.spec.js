import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://143.110.186.35:4000/login');
  await page.getByText('Login here').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Your best score' }).click();
  await page.getByRole('heading', { name: 'Logged in :' }).click();
  await page.getByText('Wed Jul 31').click();
  await page.getByText('Best Score').click();
  await page.getByRole('rowheader', { name: 'high score :' }).click();
  await page.getByRole('cell', { name: '50%' }).click();
  await page.getByRole('rowheader', { name: 'high score :' }).click();
  await page.getByRole('rowheader', { name: 'test name :' }).click();
  await page.getByRole('cell', { name: 'GK Test' }).click();
  await page.getByRole('rowheader', { name: 'category :' }).click();
  await page.getByRole('cell', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Back To Page' }).click();
});