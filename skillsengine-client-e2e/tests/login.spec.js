import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('http://143.110.186.35:4000/login');
  await page.getByText('Login here').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('poonam.shinde@algorisys.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
});
