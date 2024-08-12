import { test, expect } from '@playwright/test';

test('User creation test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.com/admin/');
  await page.goto('https://skillzengine.com/admin/login');

  // Fill in login credentials and sign in
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to user management
  await page.getByRole('link', { name: ' Users' }).click();
  await page.getByRole('button', { name: '   Create User' }).click();

  // Fill in user details
  await page.locator('label').filter({ hasText: 'Email' }).click();
  await page.getByPlaceholder('Please enter a valid email').click();
  await page.getByPlaceholder('Please enter a valid email').fill('poonam.shinde@algorisys.com');
  
  await page.getByText('Password').click();
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  
  await page.getByText('User Role', { exact: true }).click();
  await page.getByText('Status Active').click();

  await page.locator('label').filter({ hasText: 'Organization' }).click();
  await page.getByText('Status').click();
  await page.getByText('Active').click();
  await page.getByText('Status Active').click();

  // Submit the form to create the user
  await page.getByRole('button', { name: 'Create User', exact: true }).click();

  // Redirect to dashboard
  await page.goto('https://skillzengine.com/admin/dashboard');
});
