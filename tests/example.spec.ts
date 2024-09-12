import { test, expect } from '@playwright/test';

/*test('has title', async ({ page }) => {
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
*/

//Your test goes here:


test('has title', async ({ page }) => {
  await page.goto('https://saucedemo.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

/*

test('get started link', async ({ page }) => {
  await page.goto('https://saucedemo.com');

  // Click the get started link.
  /*await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/

test('I can log into to Applitools demo site', async ({ page }) => {
  await page.goto('https://saucedemo.com');

 /* await page.locator('[src="/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg"]').isVisible();*/

  //HINT Here we are using the "id" attribute of an element to locate it, sometimes you may need to use other attributes eg line 23 uses src
  await page.locator('[id="user-name"]').fill("standard_user");
  await page.locator('[id="password"]').fill("secret_sauce");
  await page.locator('[id="login-button"]').click();

  await expect(page.locator('[id="shopping_cart_container"]')).toBeVisible();


});










