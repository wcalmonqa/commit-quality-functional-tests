import {test as base} from "@playwright/test"
import { ProductsPage } from "./ProductsPage"

type MyFixtures = {
  productsPage: ProductsPage
}

export const test = base.extend<MyFixtures>({
  productsPage: async ({page}, use) =>{
    await use(new ProductsPage(page))
  },
})

export {expect} from "@playwright/test"