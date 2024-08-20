import { test, expect } from '@playwright/test';

test('Assign Assessment Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.algorisys.com/admin/');
  
  // Log in with admin credentials
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Navigate to 'Assign Assessment'
  await page.getByRole('link', { name: 'Assign Assessment' }).click();
  
  // Refine selector for 'Internal' tab
  await page.locator('h3.c-title:has-text("For Internal Users")').first().click();
  
  // Select group
  await page.getByLabel('Group').selectOption('66b995035f3990a67c78b777');
  
  // Select assessment
  await page.locator('label:has-text("Select Assessment")').click();
  await page.getByLabel('Select Assessment').selectOption('66b9b0868d6f72aa2ca4129c');
  
  // Set start and end dates
  await page.getByText('Start Date').click();
  await page.getByText('End Date').click();
  
  // Click on 'Assign Assessment to Users'
  await page.locator('div:has-text("Assign Assessment to Users")').nth(1).click();
  
  // Select users
  await page.getByRole('heading', { name: 'Select Users' }).click();
  await page.getByRole('cell', { name: '1', exact: true }).click();
  await page.getByRole('cell', { name: 'poonam.shinde@algorisys.com' }).click();
  await page.getByRole('row', { name: 'poonam.shinde@algorisys.com' }).getByRole('checkbox').check();
  
  // Click 'Assign Assessment to Users'
  await page.getByRole('button', { name: 'Assign Assessment to Users' }).click();
});
