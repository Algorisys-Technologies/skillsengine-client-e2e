import { test, expect } from '@playwright/test';

test('Login and Navigate to Dashboard', async ({ page }) => {
  // Navigate to the client login page
  await page.goto('https://skillzengine.algorisys.com/client/', { waitUntil: 'networkidle' });

  // Attempt to logout if the logout button is visible
  const logoutButton = page.getByRole('button', { name: /Logout/i });
  if (await logoutButton.isVisible()) {
    await logoutButton.click();
  }

  // Ensure the login page is fully loaded
  await page.waitForSelector('text=Log in by entering your email', { timeout: 120000 });

  // Click on the login fields and fill them in
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');

  // Click the sign-in button
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
});
