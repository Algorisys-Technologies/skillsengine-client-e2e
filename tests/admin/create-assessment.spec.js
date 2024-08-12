import { test, expect } from '@playwright/test';

test('Create Assessment Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://skillzengine.algorisys.com/admin/login');

  // Login
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Verify successful login and navigation to the dashboard
  await expect(page).toHaveURL('https://skillzengine.algorisys.com/admin/dashboard');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // Navigate to Create Assessment
  await page.getByRole('link', { name: 'Create Assessment' }).click();

  // Debugging: Take a screenshot of the page before waiting
  await page.screenshot({ path: 'screenshot_before.png' });

  // Wait for dropdown to be visible and populated
  const groupDropdown = page.locator('select[name="group"]');
  await expect(groupDropdown).toBeVisible({ timeout: 120000 });

  // Debugging: Check if dropdown options are populated
  await page.waitForFunction(() => {
    const dropdown = document.querySelector('select[name="group"]');
    return dropdown && dropdown.options.length > 0;
  });

  // Debugging: Take a screenshot after the dropdown is populated
  await page.screenshot({ path: 'screenshot_after.png' });

  // Fill out the form
  await groupDropdown.selectOption('66b2fd86bb12588a3330ec2e');
  await page.locator('select[name="category"]').selectOption('Technical skills assessment');
  await page.getByPlaceholder('Enter Test Name').fill('Skills Assessment');
  await page.getByPlaceholder('Enter Test Time').fill('10');
  await page.getByText('Auto Calc').click();
  await page.getByText('Show Result').click();
  await page.getByText('Auto Select Random Questions').click();
  await page.getByPlaceholder('Enter No. of Questions').fill('1');
  await page.getByRole('row', { name: '1 Technical skills assessment' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Add Test' }).click();

  // Verify successful creation
  await expect(page).toHaveURL('https://skillzengine.algorisys.com/admin/dashboard');
});
