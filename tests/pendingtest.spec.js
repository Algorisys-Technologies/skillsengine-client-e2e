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
  
  // Validate successful login by checking the presence of the heading
  await expect(page.getByRole('heading', { name: 'Logged in :' })).toBeVisible();
  
  // Validate that the correct date is displayed
  await expect(page.getByText('Logged in : Wed Jul 31')).toBeVisible();
  
  // Navigate to 'Today's test'
  await page.getByRole('link', { name: ' Today\'s test' }).click();
  
  // Validate that the 'Today's test' page is loaded
  await expect(page.getByRole('heading', { name: 'Today\'s test: 1 ' })).toBeVisible();
  
  // Validate the presence of the 'Name of the test' column
  await expect(page.getByRole('columnheader', { name: 'Name of the test' })).toBeVisible();
  
  // Validate that 'GK Test' is listed
  await expect(page.getByRole('cell', { name: 'GK Test' })).toBeVisible();
  
  // Validate the presence of the 'Action' column
  await expect(page.getByRole('columnheader', { name: 'Action' })).toBeVisible();
  
  // Click on 'Pending test'
  await page.getByText('Pending test').click();
  
  // Validate navigation to the dashboard page
  await page.goto('http://143.110.186.35:4000/dashboard');
  await expect(page).toHaveURL('http://143.110.186.35:4000/dashboard');
});
