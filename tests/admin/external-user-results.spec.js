import { test, expect } from '@playwright/test';

test('External User Results Navigation and Validation', async ({ page }) => {
  await page.goto('https://skillzengine.algorisys.com/admin/');
  
  // Login Process
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to External User Results
  await page.getByRole('link', { name: ' External User Results' }).click();
  await page.getByRole('heading', { name: 'External User Results' }).isVisible();

  // Filter Results
  await page.getByLabel('Large select example').selectOption('66bc9612ed3cf7633ad387f3');
  await page.getByLabel('Test').selectOption('66bc9c6bed3cf7633ad387fb');
  await page.getByRole('button', { name: 'Show Result' }).click();
  
  // Validate Results
  await page.getByRole('cell', { name: 'User Name' }).isVisible();
  await page.getByRole('cell', { name: 'Percentage' }).isVisible();
  
  // Open Detailed Results
  await page.getByRole('row', { name: '1 shindepoonam9398@gmail.com' }).getByRole('link').click();
  await page.getByRole('heading', { name: '  Detail Results For' }).isVisible();
  
  // Validate Detailed Results
  await page.getByRole('cell', { name: 'Questions' }).isVisible();
  await page.locator('th').filter({ hasText: 'Correct Answer' }).click();
  
  // Perform Calculations if needed
  await page.getByRole('button', { name: 'Calculate' }).click();
  
  // Close Detail View
  await page.goto('https://skillzengine.algorisys.com/admin/testdetails/66bc9c6bed3cf7633ad387fb/66bc9e9ded3cf7633ad3880a');
  await page.getByRole('button', { name: 'Close' }).click();
});
