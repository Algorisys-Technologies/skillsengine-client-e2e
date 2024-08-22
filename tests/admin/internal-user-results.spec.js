import { test, expect } from '@playwright/test';

test('Internal User Results Navigation and Validation', async ({ page }) => {
  // Go to the admin login page
  await page.goto('https://skillzengine.algorisys.com/admin/');
  
  // Login actions
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('combobox').selectOption('66bc94eded3cf7633ad387f0');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to "All Results" section
  await page.waitForLoadState('networkidle'); // Wait for the page to fully load
  await expect(page.getByRole('link', { name: 'All Results' })).toBeVisible(); // Ensure the link is visible
  await page.getByRole('link', { name: 'All Results' }).click();

  // Navigate to "Internal User Results"
  await page.waitForLoadState('networkidle'); // Wait for the page to fully load
  await expect(page.getByRole('link', { name: 'Internal User Results' })).toBeVisible(); // Ensure the link is visible
  await page.getByRole('link', { name: 'Internal User Results' }).click();
  await expect(page.getByRole('heading', { name: 'Internal User Results' })).toBeVisible();

  // Filtering functionality
  await page.getByText('Test-wise Results').click();
  await page.getByRole('heading', { name: 'Filter Results' }).click();
  await page.getByText('Group', { exact: true }).click();
  await page.getByLabel('Large select example').selectOption('66bc9612ed3cf7633ad387f3');
  await page.getByLabel('Test').selectOption('66bc9c6bed3cf7633ad387fb');
  await page.getByRole('button', { name: 'Show Result' }).click();

  // Validating results
  await expect(page.getByRole('heading', { name: 'Results', exact: true })).toBeVisible();
  await page.getByRole('cell', { name: 'User Name' }).click();
  await page.getByRole('cell', { name: 'Percentage' }).click();
  await page.locator('th').filter({ hasText: 'Details' }).click();
  
  // Navigate through result details
  await page.getByRole('row', { name: '1 poonam.shinde@algorisys.com' }).getByRole('cell').nth(1).click();
  await page.getByRole('cell', { name: '75.00%' }).first().click();
  await page.getByRole('row', { name: '1 poonam.shinde@algorisys.com' }).getByRole('link').click();
  await expect(page.getByRole('heading', { name: 'Detail Results For' })).toBeVisible();

  // More detailed result validations
  await page.getByText('See userwise results').click();
  await expect(page.getByRole('heading', { name: 'Result:' })).toBeVisible();

  // Final interactions
  await page.getByRole('cell', { name: 'Questions' }).click();
  await page.locator('th').filter({ hasText: 'Correct Answer' }).click();
  await page.getByRole('cell', { name: 'User\'s Answer' }).click();
  await page.getByRole('cell', { name: 'Check Text Answer' }).click();
  await page.getByRole('cell', { name: 'Obtained Marks' }).click();
  await page.getByRole('cell', { name: 'Total Marks' }).click();
  await page.getByRole('button', { name: 'Calculate' }).click();
});
