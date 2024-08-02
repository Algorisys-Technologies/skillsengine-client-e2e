import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.com/client/login');
  
  // Fill in email and password and click the login button
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Validate successful login
  await expect(page).toHaveURL('https://skillzengine.com/client/dashboard'); // Adjust URL if necessary
  
  // Navigate to the "Total test 10 View" section
  await page.getByText('Total test 10 View').click();
  await page.getByText('10').click();
  await page.locator('li').filter({ hasText: 'Total test 10 View' }).getByRole('link').click();
  
  // Validate and interact with tests
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('rowheader', { name: 'General Knowledge Test', exact: true }).click();
  await page.getByText('Due date passed').click();
  
  // Interact with test details
  await page.getByRole('cell', { name: '2' }).click();
  await page.getByRole('rowheader', { name: 'GK + image test', exact: true }).click();
  await page.getByRole('row', { name: 'GK + image test Pending test' }).locator('a').click();
  
  // Interact with additional test details
  await page.getByRole('cell', { name: '3' }).click();
  await page.getByRole('rowheader', { name: 'GK + image test2' }).click();
  await page.getByRole('row', { name: 'GK + image test2 View result' }).locator('a').click();
  
  // Validate test result details
  await page.getByText('Test result').click();
  await page.getByRole('rowheader', { name: 'Test name :' }).click();
  await expect(page.getByRole('cell', { name: 'GK + image test2' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Test date :' }).click();
  await expect(page.getByRole('cell', { name: 'Fri Aug 02' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Marks :' }).click();
  await expect(page.getByRole('cell', { name: '%' })).toBeVisible();
  
  // Navigate back to page and interact with another test
  await page.getByText('Back to page').click();
  await page.getByRole('cell', { name: '4' }).click();
  await page.getByRole('rowheader', { name: 'General Knowledge Test11' }).click();
  await page.getByRole('row', { name: '4 General Knowledge Test11' }).locator('a').click();
  
  // Validate results for the new test
  await page.getByText('Test result').click();
  await page.getByRole('rowheader', { name: 'Test name :' }).click();
  await expect(page.getByRole('cell', { name: 'General Knowledge Test11' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Test date :' }).click();
  await expect(page.getByRole('cell', { name: 'Fri Aug 02' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'Marks :' }).click();
  await expect(page.getByRole('cell', { name: '%' })).toBeVisible();
  
  // Navigate back and interact with another test
  await page.getByText('Back to page').click();
  await page.getByRole('cell', { name: '5' }).click();
  await page.getByRole('rowheader', { name: 'GK + image test3' }).click();
  await page.getByRole('row', { name: 'GK + image test3 Pending test' }).locator('a').click();
  
  // Click Next button
  await page.getByText('Next').click();
  
  // Validate that the final navigation is correct
  await expect(page).toHaveURL('https://skillzengine.com/client/dashboard'); // Adjust URL if necessary
});
