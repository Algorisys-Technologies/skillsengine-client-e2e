import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skillzengine.algorisys.com/client/ilogin');
  await page.getByText('Log in by entering your email').click();
  await page.getByText('Email address', { exact: true }).click();
  await page.getByPlaceholder('email@company.com').click();
  await page.getByPlaceholder('email@company.com').fill('poonam.shinde@algorisys.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('combobox').selectOption('66b05eab7cd7881b046a6506');
  await page.getByText('Password', { exact: true }).click();
  await page.getByPlaceholder('................').click();
  await page.getByPlaceholder('................').fill('12345678');
  await page.getByRole('button', { name: 'Sign in with work email' }).click();
  await page.getByText('Pending test36View').click();
  await page.getByText('36').click();
  await page.locator('li').filter({ hasText: 'Pending test36View' }).getByRole('link').click();
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('row', { name: '1 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '1 Skills assessment Due date' }).locator('span').click();
  await page.locator('div').filter({ hasText: '1Skills assessmentDue date' }).nth(4).click();
  await page.getByRole('row', { name: '2 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '2 Skills assessment Due date' }).locator('span').click();
  await page.getByRole('cell', { name: '3' }).click();
  await page.getByRole('row', { name: '3 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '3 Skills assessment Due date' }).locator('span').click();
  await page.getByRole('cell', { name: '4' }).click();
  await page.getByRole('rowheader', { name: 'Attribute Test' }).click();
  await page.getByRole('row', { name: '360 Attribute Test Due date passed' }).locator('span').click();
  await page.getByRole('cell', { name: '5' }).click();
  await page.getByRole('rowheader', { name: 'Attribute + GK Test' }).click();
  await page.getByRole('row', { name: '5 360 Attribute + GK Test Due' }).locator('span').click();
  await page.getByText('Next').click();
  await page.getByRole('cell', { name: '6' }).click();
  await page.getByRole('row', { name: '6 360 Attribute + GK Test' }).getByRole('rowheader').click();
  await page.getByText('Request Accepted').click();
  await page.getByText('Due date passed').first().click();
  await page.getByRole('cell', { name: '7' }).click();
  await page.getByRole('row', { name: '7 360 Attribute + GK Test Due' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '7 360 Attribute + GK Test Due' }).locator('td').click();
  await page.getByRole('cell', { name: '8' }).click();
  await page.getByRole('row', { name: '8 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '8 Skills assessment Due date' }).locator('span').click();
  await page.getByRole('cell', { name: '9' }).click();
  await page.getByRole('row', { name: '9 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '9 Skills assessment Due date' }).locator('span').click();
  await page.getByRole('cell', { name: '10' }).click();
  await page.getByRole('row', { name: '10 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '10 Skills assessment Due date' }).locator('span').click();
  await page.getByText('Next').click();
  await page.getByRole('cell', { name: '11' }).click();
  await page.getByRole('row', { name: '11 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '11 Skills assessment Due date' }).locator('span').click();
  await page.getByRole('cell', { name: '12' }).click();
  await page.getByRole('row', { name: '12 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '12 Skills assessment Due date' }).locator('span').click();
  await page.getByRole('cell', { name: '13' }).click();
  await page.getByRole('row', { name: '13 Skills assessment Due date' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '13 Skills assessment Due date' }).locator('span').click();
  await page.locator('html').click();
  await page.getByRole('cell', { name: '14' }).click();
  await page.getByRole('row', { name: '14 360 Attribute Test Due' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '14 360 Attribute Test Due' }).locator('span').click();
  await page.getByRole('cell', { name: '15' }).click();
  await page.getByRole('row', { name: '15 360 Attribute Test Due' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '15 360 Attribute Test Due' }).locator('span').click();
  await page.getByText('Next').click();
  await page.getByText('Next').click();
  await page.getByRole('cell', { name: '21' }).click();
  await page.getByRole('row', { name: '21 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '21 GK test Due date passed' }).locator('td').click();
  await page.getByRole('cell', { name: '22' }).click();
  await page.getByRole('rowheader', { name: 'Skills assessment' }).click();
  await page.getByRole('row', { name: 'Skills assessment Due date passed' }).locator('span').click();
  await page.getByRole('cell', { name: '23' }).click();
  await page.getByRole('row', { name: '23 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '23 GK test Due date passed' }).locator('span').click();
  await page.getByRole('cell', { name: '24' }).click();
  await page.getByRole('row', { name: '24 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '24 GK test Due date passed' }).locator('span').click();
  await page.getByRole('cell', { name: '24' }).click();
  await page.getByRole('row', { name: '24 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '24 GK test Due date passed' }).locator('span').click();
  await page.getByRole('cell', { name: '25' }).click();
  await page.getByRole('row', { name: '25 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '25 GK test Due date passed' }).locator('span').click();
  await page.getByText('Next').click();
  await page.locator('div').filter({ hasText: '26GK testDue date passed27GK' }).nth(4).click();
  await page.getByRole('row', { name: '26 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '26 GK test Due date passed' }).locator('td').click();
  await page.getByRole('cell', { name: '27' }).click();
  await page.getByRole('row', { name: '27 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '27 GK test Due date passed' }).locator('span').click();
  await page.getByRole('cell', { name: '28' }).click();
  await page.getByRole('row', { name: '28 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '28 GK test Due date passed' }).locator('span').click();
  await page.getByRole('cell', { name: '29' }).click();
  await page.getByRole('rowheader', { name: 'Attribute + GK Test' }).click();
  await page.getByRole('row', { name: '29 360 Attribute + GK Test' }).locator('span').click();
  await page.getByRole('cell', { name: '30' }).click();
  await page.getByRole('row', { name: '30 GK test Due date passed' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '30 GK test Due date passed' }).locator('span').click();
  await page.getByText('Next').click();
  await page.getByRole('cell', { name: '31' }).click();
  await page.getByRole('row', { name: '31 360 Attribute + GK Test' }).getByRole('rowheader').click();
  await page.getByText('Due date passed').click();
  await page.getByRole('cell', { name: '32' }).click();
  await page.getByRole('row', { name: '32 GK test Request pending' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '32 GK test Request pending' }).locator('span').click();
  await page.getByRole('cell', { name: '33' }).click();
  await page.getByRole('row', { name: '33 GK test Request pending' }).getByRole('rowheader').click();
  await page.getByRole('row', { name: '33 GK test Request pending' }).locator('span').click();
  await page.getByRole('cell', { name: '34' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('row', { name: '34 360 Attribute + GK Test' }).getByRole('rowheader').click();
  await page.goto('https://skillzengine.algorisys.com/client/dashboard');
});