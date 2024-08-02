import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.com/client/');
  await page.goto('https://skillzengine.com/client/login');


  // Click on "Log in by entering your email" link
  await page.getByText('Log in by entering your email').click();
  
  // Enter email and password
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  
  // Click on the login button
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Validate navigation and presence of the pending test
  await expect(page.getByText('Pending test 3 View')).toBeVisible();
  await page.getByText('Pending test 3 View').click();
  await expect(page.getByText('3')).toBeVisible();
  await page.getByText('3').click();

  // Navigate to the specific test
  await page.locator('li').filter({ hasText: 'Pending test 3 View' }).getByRole('link').click();

  // Validate test details and actions
  await expect(page.getByRole('cell', { name: '1' })).toBeVisible();
  await page.getByRole('cell', { name: '1' }).click();
  await expect(page.getByRole('rowheader', { name: 'General Knowledge Test' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'General Knowledge Test' }).click();
  
  // Validate and interact with the test results
  await expect(page.getByText('Due date passed')).toBeVisible();
  await page.getByText('Due date passed').click();
  await expect(page.getByRole('cell', { name: '2' })).toBeVisible();
  await page.getByRole('cell', { name: '2' }).click();
  await expect(page.getByRole('rowheader', { name: 'GK + image test', exact: true })).toBeVisible();
  await page.getByRole('rowheader', { name: 'GK + image test', exact: true }).click();
  await expect(page.getByRole('cell', { name: '3' })).toBeVisible();
  await page.getByRole('cell', { name: '3' }).click();
  await expect(page.getByRole('rowheader', { name: 'GK + image test2' })).toBeVisible();
  await page.getByRole('rowheader', { name: 'GK + image test2' }).click();
  
  // Start the test
  await expect(page.getByRole('link', { name: 'Start test' })).toBeVisible();
  await page.getByRole('link', { name: 'Start test' }).click();
  
  // Validate and interact with the quiz instructions
  await expect(page.getByRole('heading', { name: 'Quiz Instructions' })).toBeVisible();
  await page.getByRole('heading', { name: 'Quiz Instructions' }).click();
  await page.locator('.card-body').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  
  // Answer questions in the quiz
  await page.getByLabel('').click();
  await page.getByLabel('').fill('40');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('.form-check').click();
  await page.locator('div').filter({ hasText: /^2 \/ 4$/ }).first().click();
  await page.getByRole('button', { name: 'Previous' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('').click();
  await page.getByLabel('').fill('100');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('').click();
  await page.getByLabel('').fill('5');
  await page.getByRole('button', { name: 'Next' }).click();
  
  // Handle and dismiss dialog if it appears
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  // Submit the test
  await page.getByRole('button', { name: 'Submit' }).click();
  
  // Navigate back to the dashboard
  await page.goto('https://skillzengine.com/client/dashboard');
});
