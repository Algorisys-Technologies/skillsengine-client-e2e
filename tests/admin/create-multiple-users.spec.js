import { test, expect } from '@playwright/test';

test('create multiple users', async ({ page }) => {
  // Navigate to the SkillzEngine admin page
  await page.goto('https://skillzengine.algorisys.com/admin/');

  // Log in
  await page.getByRole('link', { name: 'Users' }).click();
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to Create Multiple Users
  await page.getByRole('link', { name: 'Users' }).click();
  await page.getByRole('button', { name: 'Create Multiple Users' }).click();

  // Fill out the form to create multiple users
  await page.getByText('Enter multiple Email Ids of').click();
  await page.getByLabel('Enter multiple Email Ids of').fill('prashant.verma@algorisys.com; shivam.gupta@algorisys.com');

  // Set the password
  await page.getByText('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');

  // Select the organization
  await page.locator('label').filter({ hasText: 'Organization' }).click();
  await page.getByLabel('Organization').selectOption('66b05eab7cd7881b046a6506');

  // Select the user role
  await page.getByText('User Role', { exact: true }).click();
  await page.getByLabel('User Role').selectOption('66a1f427e4a1eb8c164eb131');

  // Set the user status
  await page.getByText('Active').click();

  // Submit the form to create users
  await page.getByRole('button', { name: 'Create Users' }).click();

  // Optional: Verify that the users have been created successfully
  // Example: Check for a success message or verify that the users appear in the user list
  // await expect(page.getByText('Users created successfully')).toBeVisible();
});
