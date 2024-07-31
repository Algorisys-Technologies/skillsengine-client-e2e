import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://143.110.186.35:4000/login');
  await page.getByText('Login here').click();
  await page.getByPlaceholder('Email').dblclick();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Logged in :' }).click();
  await page.getByText('Wed Jul 31').click();
  await page.getByText('Pending test 2 View').click();
  await page.getByText('2', { exact: true }).click();
  await page.locator('li').filter({ hasText: 'Pending test 2 View' }).getByRole('link').click();
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('rowheader', { name: 'GK Test' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('row', { name: 'GK Test Request retest' }).locator('a').click();
  await page.locator('div').filter({ hasText: '1GK TestRequest' }).nth(4).click();
  await page.getByRole('rowheader', { name: 'Aptitude Test' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('row', { name: 'Aptitude Test Request retest' }).locator('a').click();
});