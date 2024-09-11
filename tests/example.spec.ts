import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('I can log into to Applitools demo site', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');

  await page.locator('[src="img/logo-big.png"]').isVisible();

  //HINT Here we are using the "id" attribute of an element to locate it, sometimes you may need to use other attributes eg line 23 uses src
  await page.locator('[id="username"]').fill("test");
  await page.locator('[id="password"]').fill("test");
  await page.locator('[id="log-in"]').click();

  await expect(page.locator('[id="time"]')).toBeVisible();


});

//Your test goes here:

test('Pokemon Test', async ({ request }) => {
  const Pokemon = await request.get('https://pokeapi.co/api/v2/pokemon/charmeleon',{headers:{'Content-Type':'application/json',}})
  expect(Pokemon.ok()).toBeTruthy();
  if (Pokemon.ok()) {
    console.log(Pokemon.json);
    const data = await Pokemon.json();
    // Assuming the response is a JSON object and you want to find a specific element
    const element = data.find((item: { id: string; }) => item.id === 'abilities');
    console.log(element);
  } else {
    console.error('Failed to fetch data:', Pokemon.status());
  }
  });
  








