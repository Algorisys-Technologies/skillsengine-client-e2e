import { test, expect } from '@playwright/test';

test('Create Group in SkillzEngine', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.algorisys.com/admin/');

  // Log in with admin credentials
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Wait for the dashboard to load and ensure the 'Assessment' heading is visible
  await page.waitForSelector('h3.menu-header:text("Assessment")');
  await expect(page.locator('h3.menu-header:text("Assessment")')).toBeVisible();

  // Navigate to the 'Create Group' section
  await page.getByRole('link', { name: ' Create Group' }).click();

  // Fill in the Group Name and submit
  await page.getByLabel('Group Name').fill('General knowledge test');
  await page.getByRole('button', { name: 'Add Group' }).click();
});
