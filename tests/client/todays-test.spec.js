import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.algorisys.com/client/ilogin');

  // Enter email and proceed
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByRole('button', { name: 'Continue' }).click();

  // Select organization
  await page.getByRole('combobox').selectOption('66b05eab7cd7881b046a6506');

  // Enter password
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');

  // Click on the sign-in button
  await page.getByRole('button', { name: '' }).click(); // This step clicks an icon, ensure this is intended
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to Today's Test
  await page.getByRole('link', { name: 'Today`s Test' }).click();

  // Select the specific test
  await page.getByRole('cell', { name: 'GK test' }).nth(1).click();

  // Start the test
  await page.getByText('Start test').first().click();

  // Interact with quiz instructions
  await page.getByRole('heading', { name: 'Quiz Instructions' }).click();
  await page.locator('.card-body').click();
  await page.getByText('1', { exact: true }).click();  // Ensure this selector is correct
  await page.getByText('Ensure that you have a stable').click();
  await page.getByText('2').click();  // Ensure this selector is correct
  await page.getByText('This question is worth 1').first().click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Answer a question
  await page.getByRole('heading', { name: '1) Which country has won the' }).click();
  await page.getByLabel('Brazil').check();

  // Handle dialog and save the answer
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});  // Dismisses the dialog
  });
  await page.getByRole('button', { name: 'Save' }).click();

  // Review and close the review
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('button', { name: 'Close Review' }).click();

  // Handle dialog and submit the test
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});  // Dismisses the dialog
  });
  await page.getByRole('button', { name: 'Submit' }).click();

  // Return to the dashboard
  await page.goto('https://skillzengine.algorisys.com/client/dashboard');
});
