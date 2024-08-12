import { test, expect } from '@playwright/test';

test('Internal Assessment Reports', async ({ page }) => {
  await page.goto('https://skillzengine.algorisys.com/admin/login');

  // Log in
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to Reports
  await page.getByRole('heading', { name: 'Reports' }).click();
  await page.getByRole('link', { name: 'Internal Assessment' }).click();
  await page.getByRole('heading', { name: 'List of Assigned Assessment' }).click();

  // Wait for table to load
  await page.waitForSelector('table', { timeout: 120000 });

  // Locate and click on specific cells with additional waits
  const userNameCell = page.locator('td:has-text("poonam.shinde@algorisys.com")');
  const assessmentNameCell = page.locator('td:has-text("Assessment_Name")');
  const statusCell = page.locator('td:has-text("Status")');
  const marksCell = page.locator('td:has-text("Marks")');
  const endDateCell = page.locator('td:has-text("End_Date")');

  await userNameCell.first().waitFor({ state: 'visible', timeout: 120000 });
  await userNameCell.first().click();

  await assessmentNameCell.first().waitFor({ state: 'visible', timeout: 120000 });
  await assessmentNameCell.first().click();

  await statusCell.first().waitFor({ state: 'visible', timeout: 120000 });
  await statusCell.first().click();

  await marksCell.first().waitFor({ state: 'visible', timeout: 120000 });
  await marksCell.first().click();

  await endDateCell.first().waitFor({ state: 'visible', timeout: 120000 });
  await endDateCell.first().click();

  // Handle dialog if it appears
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  // Final actions
  await page.getByRole('button', { name: 'Calculate' }).click();
  await page.getByRole('button', { name: 'Close' }).click();

  // Navigate back to dashboard
  await page.goto('https://skillzengine.algorisys.com/admin/dashboard');
});
