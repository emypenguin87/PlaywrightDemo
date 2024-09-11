import { test, expect } from '@playwright/test';

test('I can log into to sauce demo site', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    await page.locator('[src="login_logo"]').isVisible();
  
    //HINT Here we are using the "id" attribute of an element to locate it, sometimes you may need to use other attributes eg line 23 uses src
    await page.locator('[id="user-name"]').fill("standard_user");
    await page.locator('[id="password"]').fill("secret_sauce");
    await page.locator('[id="login-button"]').click();
  
    await expect(page.locator('[class="app_logo"]')).toContainText('Swag Labs');
  
  
  });

  test('User is locked from sauce demo site', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    await page.locator('[src="login_logo"]').isVisible();
  
    //HINT Here we are using the "id" attribute of an element to locate it, sometimes you may need to use other attributes eg line 23 uses src
    await page.locator('[id="user-name"]').fill("locked_out_user");
    await page.locator('[id="password"]').fill("secret_sauce");
    await page.locator('[id="login-button"]').click();
  
    await page.locator('[data-test="error"]').isVisible();
  
  
  });