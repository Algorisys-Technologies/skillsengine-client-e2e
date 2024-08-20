import { test, expect } from '@playwright/test';

test('create single user', async ({ page }) => {
  // Navigate to the SkillzEngine admin page
  await page.goto('https://skillzengine.algorisys.com/admin/');

  // Log in
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to Users section
  await page.getByRole('link', { name: ' Users' }).click();

  // Click on 'Create User' button
  await page.getByRole('button', { name: '   Create User' }).click();

  // Fill in user details
  await page.getByPlaceholder('Please enter a valid email').fill('bhakti.sutar@algorisys.com');
  await page.getByPlaceholder('Password').fill('12345678');

  // Set user role and status
  await page.locator('label').filter({ hasText: 'Organization' }).click();
  await page.getByText('Status').click();
  await page.getByLabel('Status').check(); // Assuming 'Status' is a checkbox

  // Click on 'Create User' button
  await page.getByRole('button', { name: 'Create User', exact: true }).click();

  // Optional: Validate user creation
  // Wait and verify user presence in the user list
  await page.waitForTimeout(5000); // Adjust if necessary to wait for user list to update
  const newUser = await page.getByText('bhakti.sutar@algorisys.com');
  await expect(newUser).toBeVisible(); // Ensure the newly created user appears in the list

});
