import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skillzengine.algorisys.com/admin/');
  
  // Log in to the admin portal
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('combobox').selectOption('66bc94eded3cf7633ad387f0');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Navigate to Quiz Instructions
  await page.getByRole('link', { name: ' Quiz Instructions' }).click();
  await page.getByText('Quiz Instruction', { exact: true }).click();
  
  // Add a new quiz instruction
  await page.getByPlaceholder('Add Quiz Instruction').fill('Read each question carefully before selecting or typing your answer.');
  await page.getByRole('button', { name: 'Add' }).click();
  
  // Verify the instruction was added successfully
  await expect(page.getByText('Read each question carefully before selecting or typing your answer.')).toBeVisible();
});
