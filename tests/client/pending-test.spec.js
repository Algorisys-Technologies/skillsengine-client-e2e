import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Set a longer timeout for the entire test
  test.setTimeout(300000); // 5 minutes

  // Navigate to the SkillzEngine client page
  await page.goto('https://skillzengine.algorisys.com/client/', { waitUntil: 'networkidle' });

  // Logout if already logged in
  await page.getByRole('button', { name: 'Logout' }).click({ timeout: 10000 });

  // Log in
  await page.getByPlaceholder('email@company.com').click({ timeout: 10000 });
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('................').click({ timeout: 10000 });
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click({ timeout: 10000 });

  // Navigate to Today's Test
  await page.getByRole('link', { name: 'Today`s Test' }).click({ timeout: 10000 });

  // Wait for and select the 'Skills assessment' test
  await page.waitForSelector('text=Skills assessment', { timeout: 20000 });
  await page.getByRole('cell', { name: 'Skills assessment' }).first().click({ timeout: 10000 });

  // Start the test
  await page.waitForSelector('text=Start test', { timeout: 20000 });
  await page.getByText('Start test').click({ timeout: 10000 });

  // Review Quiz Instructions
  await page.getByRole('heading', { name: 'Quiz Instructions' }).click({ timeout: 10000 });
  await page.getByText('Ensure that you have a stable').click({ timeout: 10000 });
  await page.getByText('Each question is worth 1').click({ timeout: 10000 });
  await page.getByRole('button', { name: 'Continue' }).click({ timeout: 10000 });

  // Answer the first question
  await page.getByText('1', { exact: true }).click({ timeout: 10000 });
  await page.getByText('Is python compiled language?').click({ timeout: 10000 });
  await page.getByLabel('False').check({ timeout: 10000 });
  await page.getByRole('button', { name: 'Next' }).click({ timeout: 10000 });

  // Answer the second question
  await page.getByText('2', { exact: true }).click({ timeout: 10000 });
  await page.getByText('What does NaN stands for in').click({ timeout: 10000 });
  await page.getByRole('textbox').click({ timeout: 10000 });
  await page.getByRole('textbox').fill('Not a number', { timeout: 10000 });
  await page.getByRole('button', { name: 'Next' }).click({ timeout: 10000 });

  // Answer the third question
  await page.getByText('3', { exact: true }).click({ timeout: 10000 });
  await page.getByText('Which is the value of 3^3?').click({ timeout: 10000 });
  await page.getByLabel('27').check({ timeout: 10000 });

  // Handle dialogs (if any)
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  // Save the test answers
  await page.getByRole('button', { name: 'Save' }).click({ timeout: 10000 });

  // Handle dialogs (if any)
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  // Submit the test
  await page.getByRole('button', { name: 'Submit' }).click({ timeout: 10000 });

  // Navigate back to the dashboard
  await page.goto('https://skillzengine.algorisys.com/client/dashboard', { waitUntil: 'networkidle' });
});
