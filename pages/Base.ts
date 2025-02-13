import { test as base } from "@playwright/test"
import { CommonActions } from "../utils/CommonActions"
import { ProductsPage } from "./ProductsPage"
import { AddProductPage } from "./AddProductPage"
import { GeneralComponentsPracticePage } from "./GeneralComponentsPracticePage"
import { PracticePage } from "./PracticePage"

type MyFixtures = {
  commonActions: CommonActions
  productsPage: ProductsPage
  addProductPage: AddProductPage
  practicePage: PracticePage
  generalComponentsPracticePage: GeneralComponentsPracticePage
}

export const test = base.extend<MyFixtures>({
  commonActions: async({page}, use) =>{
    await use(new CommonActions(page))
  },
  productsPage: async({page}, use) =>{
    await use(new ProductsPage(page))
  },
  addProductPage: async({page}, use) =>{
    await use(new AddProductPage(page))
  },
  practicePage: async({page}, use) =>{
    await use(new PracticePage(page))
  },
  generalComponentsPracticePage: async({page}, use) =>{
    await use(new GeneralComponentsPracticePage(page))
  },
})

export {expect} from "@playwright/test"