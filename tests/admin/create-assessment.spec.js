import { test, expect } from '@playwright/test';

test('Create Assessment Test', async ({ page }) => {
  // Navigate to the login page and log in
  await page.goto('https://skillzengine.algorisys.com/admin/');
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Ensure the user is on the dashboard or the correct page
  await expect(page).toHaveURL('https://skillzengine.algorisys.com/admin/dashboard');

  // Navigate to the 'Create Assessment' section
  await page.getByRole('link', { name: ' Create Assessment' }).click();
  
  // Select Group
  await page.locator('label').filter({ hasText: 'Select Group' }).click();
  await page.locator('select[name="groupId"]').selectOption('66b995035f3990a67c78b777');

  // Select Category
  await page.locator('label').filter({ hasText: 'Select Category' }).click();
  await page.getByLabel('Large select example').selectOption('360 Attributes');
  
  // Fill out the assessment details
  await page.getByPlaceholder('Enter Test Name').fill('360 attributes test');
  await page.getByPlaceholder('Enter Test Time').fill('30');
  
  // Check the required checkboxes
  await page.getByLabel('Auto Calc').check();
  await page.getByLabel('Show Result').check();
  await page.getByLabel('Auto Select Random Questions').check();
  
  // Enter the number of questions
  await page.getByPlaceholder('Enter No. of Questions').fill('5');
  
  // Submit the form
  await page.getByRole('button', { name: 'Add Test' }).click();
});
