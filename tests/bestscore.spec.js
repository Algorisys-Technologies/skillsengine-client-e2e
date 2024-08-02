import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.com/client/login');
  
  // Click on 'Log in by entering your email'
  await page.getByText('Log in by entering your email').click();
  
  // Enter email address
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  
  // Enter password
  await page.getByPlaceholder('................').fill('12345678');
  
  // Click 'Sign in with work email'
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Validate that login was successful (e.g., checking for a specific element on the page)
  await expect(page).toHaveURL('https://skillzengine.com/client/dashboard'); // Adjust as needed
  await expect(page.getByText('Welcome, Poonam Shinde')).toBeVisible(); // Adjust the text as needed

  // Click on 'Your best score'
  await page.getByRole('link', { name: 'Your best score' }).click();
  
  // Validate that the Best Score section is visible
  await expect(page.getByText('Best Score')).toBeVisible();
  
  // Click on high score cell
  await page.getByRole('rowheader', { name: 'high score :' }).click();
  await page.getByRole('cell', { name: '100.00%' }).click();
  
  // Validate that the test name and category details are correct
  await expect(page.getByRole('rowheader', { name: 'test name :' }).textContent()).toContain('GK + image test2');
  await expect(page.getByRole('rowheader', { name: 'category :' }).textContent()).toContain('All');

  // Click 'Back To Page'
  await page.getByRole('link', { name: 'Back To Page' }).click();
  
  // Validate that we are back on the dashboard or previous page
  await expect(page).toHaveURL('https://skillzengine.com/client/dashboard'); // Adjust as needed
});
