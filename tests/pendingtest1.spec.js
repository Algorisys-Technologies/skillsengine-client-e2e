import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('http://143.110.186.35:4000/login');
  
  // Click 'Login here' to open the login form
  await page.getByText('Login here').click();
  
  // Enter email and password
  await page.getByPlaceholder('Email').dblclick(); // Dblclick might not be necessary unless you need to clear existing text
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  
  // Click 'Login'
  await page.getByRole('button', { name: 'Login' }).click();
  
  // Validate successful login by checking the presence of the heading
  await expect(page.getByRole('heading', { name: 'Logged in :' })).toBeVisible();
  
  // Validate the correct date is displayed
  await expect(page.getByText('Wed Jul 31')).toBeVisible();
  
  // Click on 'Pending test 2 View'
  await page.getByText('Pending test 2 View').click();
  
  // Validate that 'Pending test 2 View' is selected
  await expect(page.getByText('2', { exact: true })).toBeVisible();
  await page.locator('li').filter({ hasText: 'Pending test 2 View' }).getByRole('link').click();
  
  // Validate selection and action on the test
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('rowheader', { name: 'GK Test' }).click();
  
  // Handle dialog (if expected to appear)
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  // Click the link to request a retest
  await page.getByRole('row', { name: 'GK Test Request retest' }).locator('a').click();
  
  // Validate navigation to the specific test request
  await page.locator('div').filter({ hasText: '1GK TestRequest' }).nth(4).click();
  await page.getByRole('rowheader', { name: 'Aptitude Test' }).click();
  
  // Handle the second dialog (if expected to appear)
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  // Click the link to request a retest for Aptitude Test
  await page.getByRole('row', { name: 'Aptitude Test Request retest' }).locator('a').click();
});
