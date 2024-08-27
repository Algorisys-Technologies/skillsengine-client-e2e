import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://skillzengine.algorisys.com/client/login', { waitUntil: 'networkidle' });

  // Click on the login button
  await page.getByText('Log in by entering your email').click();
  
  // Fill in the email
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByRole('button', { name: 'Continue' }).click();

  // Select organization from dropdown
  await page.getByRole('combobox').selectOption('66b05eab7cd7881b046a6506');

  // Enter password
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to Best Score page
  await page.getByRole('link', { name: 'Your best score' }).click();
  await page.getByText('Best Score').click();

  // Interact with table headers and cells
  await page.getByRole('rowheader', { name: 'High score:' }).click();
  await page.getByRole('cell', { name: '%' }).click();
  await page.getByRole('rowheader', { name: 'Test name:' }).click();
  await page.getByRole('cell', { name: 'Attribute Test' }).click();
  await page.getByRole('rowheader', { name: 'Category:' }).click();
  await page.getByRole('cell', { name: 'Attributes' }).click();

  // Navigate back
  await page.getByRole('link', { name: 'Back To Page' }).click();
});
