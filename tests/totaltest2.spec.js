import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://143.110.186.35:4000/login');
  
  // Click the login link
  await page.getByText('Login here').click();
  
  // Fill in the email and password
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Validate successful login
  await expect(page).toHaveURL('http://143.110.186.35:4000/dashboard'); // Adjust URL if necessary

  // Select the date
  await page.getByRole('heading', { name: 'Logged in :' }).click();
  await page.getByText('Thu Aug 01').click();

  // Navigate to the total tests
  await page.getByText('Total test 3 View').click();
  await page.getByText('3').click();
  await page.locator('li').filter({ hasText: 'Total test 3 View' }).getByRole('link').click();
  
  // Validate test details and results for test 1
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('row', { name: 'GK Test View result' }).getByRole('rowheader').click();
  await page.getByText('View result').click();
  await page.getByText('Test result').click();
  await page.getByRole('rowheader', { name: 'Test name :' }).click();
  await expect(page.getByRole('cell', { name: 'GK Test' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Test date :' }).click();
  await expect(page.getByRole('cell', { name: 'Wed Jul 31' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Marks :' }).click();
  await expect(page.getByRole('cell', { name: '%' })).toBeVisible();
  
  // Navigate back and check for other tests
  await page.getByText('Back to page').click();
  
  // Validate test 2 and 3 details and results
  await page.getByRole('cell', { name: '2' }).click();
  await page.getByRole('row', { name: 'GK Test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: 'GK Test Due date passed' }).locator('a').click();
  
  await page.getByRole('cell', { name: '3' }).click();
  await page.getByRole('rowheader', { name: 'Aptitude Test' }).click();
  await page.getByRole('row', { name: 'Aptitude Test Due date passed' }).locator('a').click();
  
  // Navigate back to the dashboard
  await page.goto('http://143.110.186.35:4000/dashboard');
});
