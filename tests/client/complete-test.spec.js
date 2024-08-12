import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skillzengine.algorisys.com/client/');
  await page.waitForLoadState('networkidle');

  // Log in
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Logout   ' }).click();
  await page.getByText('Log in by entering your email').click();
  await page.getByText('Email address', { exact: true }).click();
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByText('Password', { exact: true }).click();
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();

  // Navigate and interact with test results
  try {
    await page.getByText('Completed test 5View').click();
    await page.getByText('5').click();
    await page.locator('li').filter({ hasText: 'Completed test 5View' }).getByRole('link').click();
    
    const heading = await page.getByRole('heading', { name: 'Completed test :5' });
    await heading.waitFor({ state: 'visible', timeout: 300000 });

    const cells = [
      { name: '1', date: 'Wed Aug 07', mark: '33.33%' },
      { name: '2', date: 'Wed Aug 07', mark: '00.00%' },
      { name: '3', date: 'Wed Aug 07', mark: '%' },
      { name: '4', date: 'Wed Aug 07', mark: '66.67%' },
      { name: '5', date: 'Fri Aug 09', mark: '%' }
    ];
    
    for (const cell of cells) {
      await page.getByRole('cell', { name: cell.name }).waitFor({ state: 'visible', timeout: 300000 });
      await page.getByRole('cell', { name: cell.name }).click();
      await page.getByRole('row', { name: `${cell.name} Skills assessment View` }).getByRole('rowheader').click();
      await page.getByRole('row', { name: `${cell.name} Skills assessment View` }).getByRole('link').click();
      await page.getByText('Test result').click();
      await page.getByRole('rowheader', { name: 'Test name :' }).click();
      await page.getByRole('cell', { name: 'Skills assessment' }).click();
      await page.getByRole('rowheader', { name: 'Test date :' }).click();
      await page.getByRole('cell', { name: cell.date }).click();
      await page.getByRole('rowheader', { name: 'Marks :' }).click();
      await page.getByRole('cell', { name: cell.mark }).click();
      await page.getByText('Back to page').click();
    }
    
    await page.goto('https://skillzengine.algorisys.com/client/dashboard');
  } catch (error) {
    console.error(`Error during test execution: ${error.message}`);
    await page.screenshot({ path: 'error-screenshot.png' });
    console.log(await page.content());
  }
});
