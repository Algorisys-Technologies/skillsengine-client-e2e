import { test, expect } from '@playwright/test';

test('Question Management Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.com/admin/login');
  
  // Log in with admin credentials
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Ensure the login is successful and the dashboard is loaded
  await page.waitForURL('https://skillzengine.com/admin/dashboard');
  
  // Navigate to Questions section
  await page.getByRole('link', { name: ' Questions' }).click();
  await page.getByRole('heading', { name: 'Templates for Question' }).click();
  
  // Select categories
  await page.getByLabel('Select Category').selectOption('GK');
  await page.getByLabel('Select Category').selectOption('IQ Test Questions');
  await page.getByLabel('Select Category').selectOption('Icons test');
  await page.getByLabel('Select Category').selectOption('All');
  
  // Add a category
  await page.getByRole('link', { name: 'Add a Category' }).click();
  await page.getByRole('heading', { name: 'Category List' }).click();
  await page.getByRole('button', { name: 'Create Category' }).click();
  await page.getByPlaceholder('Enter Category Name').fill('New Category Name'); // Change placeholder if needed
  await page.getByRole('button', { name: 'Add' }).click();
  
  // Cancel action and navigate to the dashboard
  await page.getByRole('button', { name: 'cancel' }).click();
  await page.getByRole('heading', { name: ' Create Category' }).locator('i').click();
  await page.getByRole('heading', { name: 'All Questions' }).click();
  
  // Final checks and navigation
  await page.getByRole('cell', { name: 'Questions' }).click();
  await page.getByRole('cell', { name: 'Question Type' }).click();
  await page.getByText('Templates for QuestionTemplates for Question Select Category Select').click();
  
  // Navigate to the dashboard
  await page.goto('https://skillzengine.com/admin/dashboard');
  
});
