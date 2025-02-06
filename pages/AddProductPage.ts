import { type Locator, type Page } from "@playwright/test"

export class AddProductPage{
  readonly page:Page
  readonly nameInput: Locator
  readonly princeInput: Locator
  readonly dateStockedInput: Locator
  readonly submitButton: Locator
  readonly cancelButton: Locator

  constructor(page: Page){
    this.page = page
    this.nameInput = page.getByPlaceholder("Enter a product name")
    this.princeInput = page.getByPlaceholder("Enter a price")
    this.dateStockedInput = page.getByTestId("date-stocked")
    this.submitButton = page.getByRole("button", {name: "Submit"})
    this.cancelButton = page.getByRole("link", {name: "cancel"})
  }

  // Date must be in yyyy-mm-dd format
  public async addProduct(name:string, price:string, date:string){
    await this.nameInput.fill(name)
    await this.princeInput.fill(price)
    await this.dateStockedInput.fill(date)
    await this.submitButton.click()
  }
}