import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://143.110.186.35:4000/login');
  
  // Click on "Login here" to proceed to the login form
  await page.getByText('Login here').click();
  
  // Fill in the email and password fields
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  
  // Click the login button
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Verify that the login was successful
  // Ensure that the "Your best score" link is visible, indicating successful login
  await expect(page.getByRole('link', { name: 'Your best score' })).toBeVisible();
  
  // Navigate to "Your best score"
  await page.getByRole('link', { name: 'Your best score' }).click();
  
  // Validate the "Logged in :" heading
  await expect(page.getByRole('heading', { name: 'Logged in :' })).toBeVisible();
  
  // Verify the date and score details
  await page.getByText('Wed Jul 31').click();
  await page.getByText('Best Score').click();
  
  // Check that the high score section is visible and displays the expected value
  await page.getByRole('rowheader', { name: 'high score :' }).click();
  await expect(page.getByRole('cell', { name: '50%' })).toBeVisible();
  
  // Check that the test name and category are displayed correctly
  await page.getByRole('rowheader', { name: 'test name :' }).click();
  await expect(page.getByRole('cell', { name: 'GK Test' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'category :' }).click();
  await expect(page.getByRole('cell', { name: 'All' })).toBeVisible();
  
  // Navigate back to the previous page
  await page.getByRole('link', { name: 'Back To Page' }).click();
  
  // Optionally: Verify the URL or specific elements on the page to ensure correct navigation
  await expect(page).toHaveURL('http://143.110.186.35:4000/login'); // Adjust if the URL should be different after navigating back
});
