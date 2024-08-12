import { test, expect } from '@playwright/test';

test('Create a single user', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.algorisys.com/admin/login');

  // Login
  await page.fill('[placeholder="email@company.com"]', 'madhuri.bansode@algorisys.com');
  await page.fill('[placeholder="................"]', '12345678');
  await page.click('button:has-text("Sign in with work email")');

  // Wait for the dashboard to load
  await expect(page).toHaveURL('https://skillzengine.algorisys.com/admin/dashboard');
  await expect(page.locator('h1').withText('Dashboard')).toBeVisible();

  // Navigate to Users
  await page.click('a:has-text("Users")');

  // Wait for the Users page to load
  await expect(page).toHaveURL('https://skillzengine.algorisys.com/admin/users');
  await expect(page.locator('h1').withText('Users')).toBeVisible();

  // Click Create User button
  await page.click('button:has-text("Create User")');

  // Fill out the user form
  await page.fill('[placeholder="Please enter a valid email"]', 'bhakti.sutar@algorisys.com');
  await page.fill('[placeholder="Password"]', '12345678');
  await page.click('text=User Role');
  await page.selectOption('select[name="organization"]', 'Your Organization ID'); // Update with the correct value
  await page.check('input[name="status"]'); // Ensure this checkbox is selected if needed

  // Click Create User button
  await page.click('button:has-text("Create User")');

  // Verify successful user creation
  await expect(page.locator('h1').withText('User List')).toBeVisible();
  await expect(page.locator('text=bhakti.sutar@algorisys.com')).toBeVisible(); // Adjust based on what you expect to see
});
