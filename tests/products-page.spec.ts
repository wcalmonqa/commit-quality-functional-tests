import { test, expect } from "../pages/Base";

test.afterEach(async ({page}) => {
  await page.close()
})

test('Reaching Products Page', async ({page, productsPage}) => {
  await page.goto("https://commitquality.com/")
  await expect(page).toHaveTitle("CommitQuality - Test Automation Demo")
  await expect(productsPage.filterByNameTextBox).toBeVisible()
})