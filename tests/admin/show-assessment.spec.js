import { test, expect } from '@playwright/test';

test('Show Assessment Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.algorisys.com/admin/');

  // Log in with admin credentials
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Navigate to 'Show Assessment' section
  await page.getByRole('link', { name: 'Show Assessment' }).click();
  
  // Click on 'List of Assessments Created'
  await page.getByRole('heading', { name: 'List of Assessments Created' }).click();
  
  // Click on 'See how many Assessments are'
  await page.getByText('See how many Assessments are').click();
  
  // Select test group
  await page.getByText('Select Test Group').click();
  await page.getByLabel('Select Test Group').selectOption('66b995035f3990a67c78b777');
  
  // Click on a specific test name
  await page.getByRole('cell', { name: 'testName' }).click();
  
  // Click on Actions for a specific test
  await page.getByRole('cell', { name: 'Actions' }).click();
  
  // Click on a specific attribute test
  await page.getByRole('cell', { name: 'Attribute Test' }).click();
  
  // Click on 'Results' for the test
  await page.getByRole('button', { name: 'Results' }).nth(1).click();
  
  // Click on the 'Update Assessment' heading icon
  await page.getByRole('heading', { name: 'Update Assessment' }).locator('i').click();
  
  // Click on 'Edit' button
  await page.getByRole('button', { name: 'Edit' }).nth(1).click();
  
  // Click on 'Delete' button
  await page.getByRole('button', { name: 'Delete' }).nth(1).click();
  
  // Click on 'Cancel' button to cancel deletion
  await page.getByRole('button', { name: 'Cancel' }).click();
});
