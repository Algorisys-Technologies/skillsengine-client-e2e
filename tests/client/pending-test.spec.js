import { test, expect } from '@playwright/test';

test('Pending Test Execution', async ({ page }) => {
  // Go to the client login page
  await page.goto('https://skillzengine.algorisys.com/client/');
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Logout   ' }).click();
  await page.locator('body').click();
  await page.getByText('Log in by entering your email').click();
  await page.getByText('Email address', { exact: true }).click();

  // Log in to the client portal
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to Today's Test section
  await page.getByRole('link', { name: '   Today`s Test' }).click();

  // Wait for the heading to appear and then click it
  const heading = await page.waitForSelector('role=heading[name="Today\'s test: 1 "]', { timeout: 120000 });
  if (heading) {
    console.log('Heading found, attempting to click...');
    await heading.click();
  } else {
    console.log('Heading not found within timeout period!');
    return;
  }

  // Continue with the test process
  await page.getByRole('columnheader', { name: 'Name of the test' }).click();
  await page.getByRole('cell', { name: 'Skills assessment' }).click();
  await page.getByRole('columnheader', { name: 'Action' }).click();
  await page.getByText('Start test').click();

  // Interact with the quiz instructions
  await page.getByRole('heading', { name: 'Quiz Instructions' }).click();
  await page.locator('.card-body').click();
  await page.getByText('Ensure that you have a stable').click();

  // Proceed with answering questions
  await page.getByText('1').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByLabel('False').check();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByText('2').click();
  await page.getByRole('textbox').fill('not a number');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByText('3').click();
  await page.getByLabel('27').check();

  // Save and review the test
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Review' }).click();
  await page.getByRole('heading', { name: 'Review questions & answers' }).click();

  // Review answers
  await page.getByText('Is python compiled language?').click();
  await page.getByText('False').click();
  await page.getByText('What does NaN stands for in').click();
  await page.getByText('not a number').click();
  await page.getByText('Which is the value of 3^3?').click();
  await page.getByText('27').click();

  // Submit the test
  await page.getByText('Close Review').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.goto('https://skillzengine.algorisys.com/client/dashboard');
  
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  
  await page.goto('https://skillzengine.algorisys.com/client/runtest/66b5a7818bacc4a56b1d53f8');
  await page.goto('https://skillzengine.algorisys.com/client/dashboard');
});
