import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://143.110.186.35:4000/login');
  await page.getByText('Login here').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');import { test, expect } from '@playwright/test';

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
    
    // Validate that the login was successful by checking for a specific heading or element
    await expect(page.getByRole('heading', { name: 'Logged in :' })).toBeVisible();
    
    // Navigate to the "Your best score" section
    await page.getByText('Wed Jul 31').click();
    await page.getByRole('link', { name: 'Your best score' }).click();
    
    // Validate that the "Best Score" section is visible
    await expect(page.getByText('Best Score')).toBeVisible();
    
    // Validate that the high score is displayed
    await page.getByRole('rowheader', { name: 'high score :' }).click();
    await expect(page.getByRole('cell', { name: '%' })).toBeVisible();
    
    // Validate that the test name and category are displayed correctly
    await page.getByRole('rowheader', { name: 'test name :' }).click();
    await expect(page.getByRole('cell', { name: 'GK Test' })).toBeVisible();
    await page.getByRole('rowheader', { name: 'category :' }).click();
    await expect(page.getByRole('cell', { name: 'All' })).toBeVisible();
    
    // Click "Back To Page" and verify navigation
    await page.getByRole('link', { name: 'Back To Page' }).click();
    
    // Ensure the user is navigated back to the dashboard
    await page.goto('http://143.110.186.35:4000/dashboard');
    await expect(page).toHaveURL('http://143.110.186.35:4000/dashboard');
  });
  
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Logged in :' }).click();
  await page.getByText('Wed Jul 31').click();
  await page.getByRole('link', { name: 'Your best score' }).click();
  await page.getByText('Best Score').click();
  await page.getByRole('rowheader', { name: 'high score :' }).click();
  await page.getByRole('cell', { name: '%' }).click();
  await page.getByRole('rowheader', { name: 'test name :' }).click();
  await page.getByRole('cell', { name: 'GK Test' }).click();
  await page.getByRole('rowheader', { name: 'category :' }).click();
  await page.getByRole('cell', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Back To Page' }).click();
  await page.goto('http://143.110.186.35:4000/dashboard');
});