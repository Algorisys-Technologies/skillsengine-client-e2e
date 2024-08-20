import { test, expect } from '@playwright/test';

test('Internal Assessment navigation and validation', async ({ page }) => {
  // Navigate to the admin page
  await page.goto('https://skillzengine.algorisys.com/admin/');
  
  // Click on the Internal Assessment link
  await page.getByRole('link', { name: ' Internal Assessment' }).click();

  // Log in
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/admin/); // Check that the URL contains 'admin' indicating successful login

  // Navigate to Internal Assessment again
  await page.getByRole('link', { name: ' Internal Assessment' }).click();

  // Debugging: Log current URL and take a screenshot
  console.log(`Current URL: ${page.url()}`);
  await page.screenshot({ path: 'debug-screenshot.png' });

  // Increase timeout for the next expectation
  await expect(page.getByRole('heading', { name: '  List of Assigned Assessment' })).toBeVisible({ timeout: 10000 });

  // Interact with the list of assessments
  await page.getByRole('cell', { name: 'User_Name' }).click();
  await page.getByRole('cell', { name: 'Assessment_Name' }).click();
  await page.getByRole('cell', { name: 'Status' }).click();
  await page.getByRole('cell', { name: 'Marks' }).click();
  
  await page.getByRole('cell', { name: 'End_Date' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();

  // Select a specific test row and interact with it
  await page.locator('td').first().click();
  await page.getByRole('cell', { name: 'Attribute Test' }).first().click();
  await page.locator('td:nth-child(3)').first().click();
  await page.locator('td:nth-child(4)').first().click();
  await page.getByRole('cell', { name: 'Fri Aug 16' }).click();

  // Navigate to the details of the specific test
  await page.getByRole('row', { name: 'poonam.shinde@algorisys.com 360 Attribute Test Pending Fri Aug 16 2024 Details' }).getByRole('link').click();

  // Calculate the results
  await page.getByRole('button', { name: 'Calculate' }).click();

});
