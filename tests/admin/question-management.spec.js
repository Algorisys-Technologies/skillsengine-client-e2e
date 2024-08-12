import { test, expect } from '@playwright/test';

test('Question Management Test', async ({ page }) => {
  await page.goto('https://skillzengine.com/admin/');
  await page.goto('https://skillzengine.com/admin/login');
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('madhuri.bansode@algorisys.com');
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  await page.getByRole('link', { name: ' Questions' }).click();
  await page.getByRole('heading', { name: 'Templates for Question' }).click();
  await page.locator('label').click();
  await page.getByLabel('Select Category').click();
  await page.getByLabel('Select Category').selectOption('GK');
  await page.getByLabel('Select Category').selectOption('IQ Test Questions');
  await page.getByLabel('Select Category').selectOption('Icons test');
  await page.getByLabel('Select Category').selectOption('All');
  await page.getByRole('link', { name: 'Add a Category' }).click();
  await page.getByRole('heading', { name: 'Category List' }).click();
  await page.getByRole('cell', { name: 'Sr. No' }).click();
  await page.getByRole('cell', { name: 'Category Name' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();
  await page.getByRole('button', { name: 'Create Category' }).click();
  await page.getByText('Enter Category Name').click();
  await page.getByPlaceholder('Enter Category Name').click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'cancel' }).click();
  await page.getByRole('heading', { name: '  Create Category' }).locator('i').click();
  await page.getByRole('heading', { name: 'All Questions' }).click();
  await page.getByRole('cell', { name: 'Questions' }).click();
  await page.getByRole('cell', { name: 'Question Type' }).click();
  await page.getByText('Templates for QuestionTemplates for Question Select Category Select').click();
  await page.goto('https://skillzengine.com/admin/dashboard');
});