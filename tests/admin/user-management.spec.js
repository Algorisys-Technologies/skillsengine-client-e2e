import { test, expect } from '@playwright/test';

test('User management test', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://skillzengine.com/admin/login');
  
  // Log in
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Navigate to Users section
  await page.getByRole('heading', { name: 'User', exact: true }).click();
  await page.getByRole('link', { name: 'Users' }).click();
  
  // Interact with the user list
  await page.getByRole('heading', { name: 'List of Users' }).click();
  await page.getByRole('cell', { name: 'Organization' }).click();
  await page.getByRole('cell', { name: 'Email' }).click();
  await page.getByRole('cell', { name: 'Group' }).click();
  await page.getByRole('cell', { name: 'Action' }).click();
  
  // Select and edit user
  await page.getByRole('cell', { name: 'Algorisys Test Org' }).first().click();
  await page.getByRole('cell', { name: 'madhuri.bansode@algorisys.com' }).click();
  await page.getByRole('button', { name: 'Edit' }).first().click();
  
  // Debugging - Check if Cancel button is visible
  const cancelButton = page.locator('button:has-text("Cancel")');
  await expect(cancelButton).toBeVisible();

  // Wait for and cancel the edit
  await cancelButton.click();
  
  // Navigate to dashboard
  await page.goto('/admin/dashboard');
});
