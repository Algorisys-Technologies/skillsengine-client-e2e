import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://143.110.186.35:4000/login');

  // Click on 'Login here' to open the login form
  await page.getByText('Login here').click();

  // Enter email and password
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').fill('12345678');

  // Click 'Login'
  await page.getByRole('button', { name: 'Login' }).click();

  // Validate login success
  // Check if the URL changed to the dashboard or another post-login page
  await expect(page).toHaveURL('http://143.110.186.35:4000/dashboard');

});
