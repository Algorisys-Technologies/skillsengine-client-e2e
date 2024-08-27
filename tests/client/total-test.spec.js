import { test, expect } from '@playwright/test';

test('Total Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.algorisys.com/client/ilogin');

  // Click to log in by entering your email
  await page.getByText('Log in by entering your email').click();

  // Fill in the email address
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');

  // Click on the "Continue" button
  await page.getByRole('button', { name: 'Continue' }).click();

  // Select an option from the combobox (e.g., the organization or some other identifier)
  await page.getByRole('combobox').selectOption('66b05eab7cd7881b046a6506');

  // Fill in the password field
  await page.getByPlaceholder('................').fill('12345678');

  // Click on the eye icon to show/hide the password (if necessary)
  await page.getByRole('button', { name: '' }).click();

  // Click on the "Sign in with work email" button
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Wait for the dashboard or any specific element to ensure the login was successful
  await page.waitForSelector('text=Total test48View', { timeout: 60000 });

  // Click on the "Total test" section (Make sure the text selector is specific)
  await page.locator('text=Total test48View').click();

  // Click on the number "48" if it's a link or clickable element
  await page.getByText('48').click();

  // Navigate to the test details by clicking on the relevant link
  await page.locator('li').filter({ hasText: 'Total test48View' }).getByRole('link').click();

  // Verify the heading "Total tests: 48"
  await expect(page.getByRole('heading', { name: 'Total tests: 48 ' })).toBeVisible();
});
