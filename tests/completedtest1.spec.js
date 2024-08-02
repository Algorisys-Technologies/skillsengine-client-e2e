import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://143.110.186.35:4000/login');

  // Click on 'Login here' to open the login form
  await page.getByText('Login here').click();

  // Enter email and password
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').fill('12345678');

  // Click 'Login'
  await page.getByRole('button', { name: 'Login' }).click();

  // Validate login success, e.g., check for heading indicating a logged-in state
  await expect(page.getByRole('heading', { name: 'Logged in :' })).toBeVisible();

  // Click on the date and test entry
  await page.getByText('Thu Aug 01').click();
  await page.getByText('Completed test 1View').click();

  // Validate that the test entry details are visible and correct
  await expect(page.getByText('1', { exact: true })).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Completed test 1View' }).getByRole('link')).toBeVisible();

  // Click on the test result
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('rowheader', { name: 'GK Test' }).click();
  await page.getByRole('link', { name: 'View result' }).click();

  // Validate test result details
  await expect(page.getByText('Test result')).toBeVisible();
  await expect(page.getByRole('rowheader', { name: 'Test name :' }).textContent()).toContain('GK Test');
  await expect(page.getByRole('cell', { name: 'GK Test' })).toBeVisible();
  await expect(page.getByRole('rowheader', { name: 'Test date :' }).textContent()).toContain('Wed Jul 31');
  await expect(page.getByRole('cell', { name: 'Wed Jul 31' })).toBeVisible();
  
  // Validate the marks; use a more specific value if possible
  await expect(page.getByRole('rowheader', { name: 'Marks :' }).textContent()).toContain('%');
  await expect(page.getByRole('cell', { name: '%' })).toBeVisible();

  // Click 'Back to page' and validate navigation
  await page.getByText('Back to page').click();
  await page.goto('http://143.110.186.35:4000/dashboard');

  // Validate navigation to dashboard
  await expect(page).toHaveURL('http://143.110.186.35:4000/dashboard');
});
