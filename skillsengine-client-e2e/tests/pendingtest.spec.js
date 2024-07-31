import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://143.110.186.35:4000/login');
  await page.getByText('Login here').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Logged in :' }).click();
  await page.getByText('Logged in : Wed Jul 31').click();
  await page.getByRole('link', { name: ' Today\'s test' }).click();
  await page.getByRole('heading', { name: 'Today\'s test: 1 ' }).click();
  await page.getByRole('columnheader', { name: 'Name of the test' }).click();
  await page.getByRole('cell', { name: 'GK Test' }).click();
  await page.getByRole('columnheader', { name: 'Action' }).click();
  await page.getByText('Pending test').click();
  await page.goto('http://143.110.186.35:4000/dashboard');
});