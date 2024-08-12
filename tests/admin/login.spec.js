import { test, expect } from '@playwright/test';

test('admin login test', async ({ page }) => {
  // Navigate to the admin login page
  await page.goto('https://skillzengine.com/admin/login');

  // Ensure the login page has loaded by checking for a specific element with text
  const loginHeading = page.locator('text=Log in by entering your email');
  await expect(loginHeading).toBeVisible();

  // Fill in the email address
  await page.fill('input[placeholder="email@company.com"]', 'madhuri.bansode@algorisys.com');

  // Fill in the password
  await page.fill('input[placeholder="................"]', '12345678');

  // Click the 'Sign in with work email' button
  await page.click('button:has-text("Sign in with work email")');

  // Optionally, add an assertion to verify successful login
  await expect(page).toHaveURL('https://skillzengine.com/admin/dashboard');
});
