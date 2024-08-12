import { test, expect } from '@playwright/test';

test('Admin Test', async ({ page }) => {
  await page.goto('https://skillzengine.com/admin/');
  await page.goto('https://skillzengine.com/admin/login');
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  await page.getByRole('link', { name: 'Show Assessment' }).click();

  // Increased timeout
  await page.waitForSelector('h1:has-text("List of Assessments Created")', { timeout: 120000 });

  await page.getByText('See how many Assessments are').click();
  await page.getByText('Select Test Group').click();
  await page.getByLabel('Select Test Group').selectOption('66ab764eb001ded7b55c86a6');
  await page.getByLabel('Select Test Group').selectOption('66aca479e8c9d6264a45d1d9');
  await page.getByLabel('Select Test Group').selectOption('66b3110c7855bde8784a1ac1');
  await page.getByLabel('Select Test Group').selectOption('');
  await page.getByRole('cell', { name: 'testName' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();
  await page.getByRole('cell', { name: 'General Knowledge Test', exact: true }).click();
  await page.getByRole('row', { name: 'General Knowledge Test Results Edit Delete' }).getByRole('button').first().click();
  await page.getByRole('heading', { name: 'User wise result for General' }).click();
  await page.getByText('Select User').click();
  await page.getByRole('combobox').selectOption('All');
  await page.getByRole('button', { name: 'Show Result' }).click();
  await page.getByRole('cell', { name: 'Sr no.' }).click();
  await page.getByRole('cell', { name: 'User name' }).click();
  await page.getByRole('cell', { name: 'Marks' }).click();
  await page.locator('thead').getByRole('cell', { name: 'Details' }).click();
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('cell', { name: 'poonam.shinde@algorisys.com' }).click();
  await page.getByRole('cell', { name: '%' }).click();
  await page.getByRole('link', { name: 'Details' }).click();

  // Debugging screenshot
  await page.screenshot({ path: 'show-assessment-screenshot.png' });

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  await page.getByRole('button', { name: 'Calculate' }).click();
  await page.goto('https://skillzengine.com/admin/testdetails/66ab7695b001ded7b55c86a7/66b0b664881e028754073651');
  await page.goto('https://skillzengine.com/admin/testresults/66ab7695b001ded7b55c86a7');
  await page.goto('https://skillzengine.com/admin/showtest?groupId=');
  await page.goto('https://skillzengine.com/admin/showtest?groupId=66b3110c7855bde8784a1ac1');
  await page.goto('https://skillzengine.com/admin/showtest?groupId=66aca479e8c9d6264a45d1d9');
  await page.goto('https://skillzengine.com/admin/showtest?groupId=66ab764eb001ded7b55c86a6');
  await page.goto('https://skillzengine.com/admin/showtest');
  await page.goto('https://skillzengine.com/admin/dashboard');
});
