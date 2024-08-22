import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the client portal
  await page.goto('https://skillzengine.algorisys.com/client/');
  
  // Log out if logged in
  await page.getByRole('button', { name: 'Logout   ' }).click();
  
  // Click to log in
  await page.getByText('Log in by entering your email').click();
  
  // Fill email and password fields
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  
  // Sign in
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  
  // Navigate to 'Your best score'
  await page.getByRole('link', { name: 'Your best score' }).click();
  
  // Verify best score section
  await page.getByText('Best Score').click();
  
  // Wait for the high score row header
  await page.getByRole('rowheader', { name: 'high score :' }).click();
  
  // Take a screenshot for debugging
  await page.screenshot({ path: 'screenshot_before_high_score.png' });
  
  // Add an explicit wait for the high score cell
  await page.waitForSelector('text="100.00%"', { state: 'visible', timeout: 60000 }); // 60 seconds timeout
  
  // Click on the high score cell
  await page.locator('text="66.67%"').click({ timeout: 60000 });
  
  // Validate test name
  await page.getByRole('rowheader', { name: 'test name :' }).click();
  await page.getByRole('cell', { name: 'Skills assessment' }).click();
  
  // Validate category
  await page.getByRole('rowheader', { name: 'category :' }).click();
  await page.getByRole('cell', { name: 'All' }).click();
  
  // Navigate back to the dashboard
  await page.getByRole('link', { name: 'Back To Page' }).click();
  await page.goto('https://skillzengine.algorisys.com/client/dashboard');
});
