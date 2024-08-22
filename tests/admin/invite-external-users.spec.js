import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skillzengine.algorisys.com/admin/');
  await page.getByRole('link', { name: 'Users' }).click();

  // Log in
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate to Users section
  await page.getByRole('link', { name: ' Users' }).click();

  // Wait for the 'Invite External Users' button to be ready
  const inviteButton = await page.getByRole('button', { name: 'Invite External Users' });
  await inviteButton.scrollIntoViewIfNeeded();
  await inviteButton.waitFor({ state: 'visible' });
  await inviteButton.click();

  // Enter multiple email IDs
  await page.getByLabel('Enter multiple Email Ids of').fill('shindepoonam9398@gmail.com; bhavnakahar29@gmail.com');

  // Select Group and Assessment
  await page.getByLabel('Group').selectOption('66b995035f3990a67c78b777');
  await page.getByLabel('Select Assessment').selectOption('66b9957a5f3990a67c78b778');

  // Set Test Dates
  await page.getByLabel('Start Date Of Test').fill('2024-08-13');
  await page.getByLabel('End Date Of Test').fill('2024-08-13');

  // Click 'Invite External Users' button
  await page.getByRole('button', { name: 'Invite External Users', exact: true }).click();

  // Optionally, add a wait or check for confirmation message
});
