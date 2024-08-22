import { test, expect } from '@playwright/test';

test('Image upload and question creation', async ({ page }) => {
  // Navigate to the admin login page
  await page.goto('https://skillzengine.algorisys.com/admin/');
  
  // Perform login
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Wait for navigation or page load
  await page.waitForNavigation();

  // Navigate to the 'Create Questions' page
  await page.getByRole('link', { name: 'Questions' }).click();
  await page.getByRole('button', { name: 'Create Questions' }).click();
  
  // Fill in the question details
  await page.getByRole('heading', { name: 'Category' }).click();
  await page.getByRole('combobox').selectOption('360 Attributes');
  
  await page.getByRole('heading', { name: 'Type' }).click();
  await page.locator('div').filter({ hasText: /^mcq$/ }).getByRole('radio').check();
  
  await page.getByRole('heading', { name: 'Question text' }).click();
  await page.getByPlaceholder('Please enter question text').fill('Find the ODD one out from the given options.');
  
  // Add choices for the question
  for (let i = 1; i <= 4; i++) {
    await page.getByRole('heading', { name: `Question ${i}` }).click();
    
    // Fill in the choice details
    await page.locator('input[name="text"]').nth(i - 1).fill(`option ${i}`);
    await page.getByText('Weight').nth(i - 1).fill('0');
    await page.getByText('Sort-Order').nth(i - 1).fill(i.toString());

    // Upload the image file for the choice
    await page.locator('input[type="file"]').nth(i - 1).setInputFiles(`Option ${i}.png`);
  }
  
  // Click the 'Save' button to save the question
  await page.getByRole('button', { name: 'Save' }).click();
  
  // Navigate to 'All Questions' and verify the created question
  await page.getByRole('heading', { name: 'Templates for Question' }).locator('i').click();
  await page.getByRole('heading', { name: 'All Questions' }).click();
  await page.getByRole('cell', { name: 'Find the ODD one out from the' }).click();
  
  // Add assertions if needed to verify the expected results
});
