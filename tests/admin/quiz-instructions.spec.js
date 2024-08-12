import { test, expect } from '@playwright/test';

test('Create and Manage Quiz Instructions', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.com/admin/login');
  
  // Fill in email and password and submit the login form
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to the Quiz Instructions section
  await page.getByRole('link', { name: ' Quiz Instructions' }).click();

  // Ensure the heading is visible
  const instructionsHeading = page.locator('h4.page-title.d-flex.gap-2'); // Use a more specific selector
  await expect(instructionsHeading).toBeVisible();

  // Create a new quiz instruction
  await page.getByRole('button', { name: 'Create Instructions' }).click();

  // Fill in the quiz instruction details
  const instructionInput = page.getByPlaceholder('Add Quiz Instruction');
  await expect(instructionInput).toBeVisible();
  await instructionInput.fill('Each question is worth 1 point. There is no penalty for incorrect answers.');

  // Click the Add button
  await page.getByRole('button', { name: 'Add' }).click();

  // Verify that the instruction was added
  // Note: Adjust the following selector based on the actual implementation
  await expect(page.getByText('Each question is worth 1 point. There is no penalty for incorrect answers.')).toBeVisible();

  // Optionally, you can add additional steps to delete the instruction or perform other actions

  // Delete the instruction if needed (example code, adjust based on actual page structure)
  await page.getByRole('row', { name: 'Each question is worth 1 point. There is no penalty for incorrect answers.' })
    .getByRole('button', { name: 'Delete' }).click();

  // Confirm the deletion
  await page.getByText('Are you sure?').click();
  await page.getByRole('button', { name: 'Cancel' }).click(); // Assuming you want to cancel the deletion

  // Navigate back to the dashboard
  await page.goto('https://skillzengine.com/admin/dashboard');
});
