import { type Page, type Locator } from "@playwright/test";

export class ProductsPage{
  readonly page:Page
  readonly filterByNameTextBox: Locator
  readonly firlterButton: Locator
  readonly resetButton: Locator
  readonly showMoreButton: Locator
  readonly addProductButton: Locator
  readonly productTableRow: Locator


  constructor(page: Page){
    this.page = page
    this.filterByNameTextBox = page.getByRole("textbox", {name: "Filter by product name"})
    this.firlterButton = page.getByRole("button", {name: "Filter"})
    this.resetButton = page.getByRole("button", {name: "Reset"})
    this.showMoreButton = page.getByRole("button", {name: "Show more"})
    this.addProductButton = page.getByRole("link", {name: "Add a product"})
    this.productTableRow = page.locator("table tbody tr")  
  }
}