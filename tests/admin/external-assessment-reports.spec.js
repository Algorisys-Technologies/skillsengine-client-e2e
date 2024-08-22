import { test, expect } from '@playwright/test';

test('External Assessment Reports', async ({ page }) => {
  // Navigate to the admin portal
  await page.goto('https://skillzengine.algorisys.com/admin/');
  
  // Logout if already logged in
  await page.getByRole('link', { name: 'Logout' }).click();
  
  // Login as an external user
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  
  // Select organization
  await page.getByRole('combobox').selectOption('66bc94eded3cf7633ad387f0');
  
  // Enter password
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Navigate to External Assessment section
  await page.getByRole('link', { name: 'External Assessment' }).click();
  
  // Navigate to the List of Assigned Assessments
  await page.getByRole('heading', { name: 'List of Assigned' }).click();
  
  // Validate assessments
  await page.getByText('See how many Assessments are').click();
  
  // Interact with various cells and headings for validation
  await page.getByRole('cell', { name: 'User_Name' }).click();
  await page.getByRole('cell', { name: 'Assessment_Name' }).click();
  await page.getByRole('cell', { name: 'Status' }).click();
  await page.getByRole('cell', { name: 'Marks' }).click();
  await page.getByRole('cell', { name: 'End_Date' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();
  
  // Select specific user and assessment
  await page.getByRole('cell', { name: 'shindepoonam9398@gmail.com' }).click();
  await page.getByRole('cell', { name: 'GK test' }).click();
  await page.getByRole('cell', { name: 'Submitted' }).click();
  await page.getByRole('cell', { name: '75.00' }).click();
  await page.getByRole('cell', { name: 'Wed Aug 14' }).click();
  
  // Navigate to Details and Validate results
  await page.getByRole('link', { name: 'Details' }).click();
  await page.getByRole('heading', { name: 'Detail Results For' }).click();
  await page.getByText('See userwise results').click();
  
  // Validate correct answers and other details
  await page.getByRole('heading', { name: 'Result:' }).click();
  await page.getByRole('cell', { name: 'Questions' }).click();
  await page.locator('th').filter({ hasText: 'Correct Answer' }).click();
  await page.getByRole('cell', { name: 'User\'s Answer' }).click();
  await page.getByRole('cell', { name: 'Check Text Answer' }).click();
  await page.getByRole('cell', { name: 'Obtained Marks' }).click();
  await page.getByRole('cell', { name: 'Total Marks' }).click();
  
  // Calculate and confirm results
  await page.getByRole('button', { name: 'Calculate' }).click();
});
