import { test, expect } from "../pages/Base";
import { AddProductPage } from "../pages/AddProductPage";

test.afterEach(async ({page}) => {
  await page.close()
})

test('Reaching Products Page', async ({page}) => {
  await page.goto("https://commitquality.com/")
  await expect(page).toHaveTitle("CommitQuality - Test Automation Demo")
})

test("Add product to the list", async({page, addProductPage, productsPage}) => {
  await page.goto("https://commitquality.com/add-product")
  await addProductPage.addProduct('Product X', '22.99', '1998-11-16')
  // Asserting that the 1st row of the table contains the product added before
  await expect(productsPage.productTableRow.nth(0).getByTestId("name")).toContainText("Product X")
})