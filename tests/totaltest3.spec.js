import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.com/client/login');
  
  // Click on the image for login (if it is the right action)
  await page.locator('img').click();
  
  // Fill in the email and password
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Validate successful login and redirection to the dashboard or main page
  await expect(page).toHaveURL('https://skillzengine.com/client/dashboard'); // Adjust if necessary

  // Navigate to the Total Test section
  await page.getByText('Total test 7 View').click();
  await page.getByText('7').click();
  await page.locator('li').filter({ hasText: 'Total test 7 View' }).getByRole('link').click();
  
  // Validate that the total test section shows 7 tests
  await expect(page.getByRole('heading', { name: 'Total test: 7 ' })).toBeVisible();
  
  // Check details for each test

  // Test 1
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('rowheader', { name: 'General Knowledge Test', exact: true }).click();
  await page.getByText('Due date passed').click();
  
  // Test 2
  await page.getByRole('cell', { name: '2' }).click();
  await page.getByRole('rowheader', { name: 'GK + image test', exact: true }).click();
  await page.getByRole('row', { name: 'GK + image test Pending test' }).locator('a').click();
  
  // Test 3
  await page.getByRole('cell', { name: '3' }).click();
  await page.getByRole('rowheader', { name: 'GK + image test2' }).click();
  await page.getByRole('row', { name: 'GK + image test2 View result' }).locator('a').click();
  await page.getByText('Test result').click();
  await page.getByRole('rowheader', { name: 'Test name :' }).click();
  await expect(page.getByRole('cell', { name: 'GK + image test2' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Test date :' }).click();
  await expect(page.getByRole('cell', { name: 'Fri Aug 02' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Marks :' }).click();
  await expect(page.getByRole('cell', { name: '100.00%' })).toBeVisible();
  
  // Navigate back and check for remaining tests

  // Back to the Total Test list
  await page.getByText('Back to page').click();
  
  // Test 4
  await page.getByRole('cell', { name: '4' }).click();
  await page.getByRole('rowheader', { name: 'General Knowledge Test11' }).click();
  await page.getByRole('row', { name: '4 General Knowledge Test11' }).locator('a').click();
  await page.getByText('Test result').click();
  await page.getByRole('rowheader', { name: 'Test name :' }).click();
  await expect(page.getByRole('cell', { name: 'General Knowledge Test11' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Test date :' }).click();
  await expect(page.getByRole('cell', { name: 'Fri Aug 02' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Marks :' }).click();
  await expect(page.getByRole('cell', { name: '60.00%' })).toBeVisible();

  // Test 5
  await page.getByRole('cell', { name: '5' }).click();
  await page.getByRole('rowheader', { name: 'GK + image test3' }).click();
  await page.getByRole('row', { name: 'GK + image test3 Pending test' }).locator('a').click();
  
  // Navigate to the dashboard
  await page.getByText('Next').click();
  await page.goto('https://skillzengine.com/client/dashboard');
});
