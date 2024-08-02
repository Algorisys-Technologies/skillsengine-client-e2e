import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://143.110.186.35:4000/login');
  
  // Click the login link and enter credentials
  await page.getByText('Login here').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Validate successful login
  await expect(page).toHaveURL('http://143.110.186.35:4000/dashboard'); // Adjust URL if necessary
  
  // Navigate to the date and view total tests
  await page.getByRole('heading', { name: 'Logged in :' }).click();
  await page.getByText('Wed Jul 31').click();
  await page.getByText('Total test 3 View').click();
  await page.getByText('3', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Total test 3 View' }).getByRole('link').click();
  
  // Validate navigation and test view
  await page.getByRole('heading', { name: 'Total test: 3 ' }).click();
  
  // Validate details and results for test 1
  await page.getByText('Logged in : Wed Jul 31').click();
  await page.getByText('Wed Jul 31').click();
  await page.getByRole('heading', { name: 'Total test: 3 ' }).click();
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('row', { name: 'GK Test View result' }).getByRole('rowheader').click();
  await page.getByText('View result').click();
  
  // Validate test result details for GK Test
  await page.getByText('Test result').click();
  await page.getByRole('rowheader', { name: 'Test name :' }).click();
  await expect(page.getByRole('cell', { name: 'GK Test' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Test date :' }).click();
  await expect(page.getByRole('cell', { name: 'Wed Jul 31' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Marks :' }).click();
  await expect(page.getByRole('cell', { name: '%' })).toBeVisible();
  
  // Navigate back and start the next test
  await page.getByText('Back to page').click();
  await page.getByRole('cell', { name: '2' }).click();
  await page.getByRole('row', { name: 'GK Test Start Test' }).getByRole('rowheader').click();
  await page.getByText('Start Test').click();
  
  // Validate 'Not Found' message and proceed with next test
  await expect(page.getByRole('heading', { name: 'Not Found' })).toBeVisible();
  await page.getByRole('cell', { name: '3' }).click();
  await page.getByRole('rowheader', { name: 'Aptitude Test' }).click();
  await page.getByText('Pending test').click();
  
  // Navigate to the dashboard and view the pending test
  await page.goto('http://143.110.186.35:4000/dashboard');
  
});
