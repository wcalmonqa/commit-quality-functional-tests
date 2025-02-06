import { type Page, type Locator } from "@playwright/test";

export class ProductsPage{
  readonly page:Page
  readonly filterByNameTextBox: Locator

  constructor(page: Page){
    this.page = page
    this.filterByNameTextBox = page.getByRole("textbox", {name: "Filter by product name"})
  }
}