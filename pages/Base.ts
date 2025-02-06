import { test as base } from "@playwright/test"
import { ProductsPage } from "./ProductsPage"
import { AddProductPage } from "./AddProductPage"

type MyFixtures = {
  productsPage: ProductsPage
  addProductPage: AddProductPage
}

export const test = base.extend<MyFixtures>({
  productsPage: async ({page}, use) =>{
    await use(new ProductsPage(page))
  },
  addProductPage: async ({page}, use) =>{
    await use(new AddProductPage(page))
  },
})

export {expect} from "@playwright/test"