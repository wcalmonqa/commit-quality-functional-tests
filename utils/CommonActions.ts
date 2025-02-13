import {type Locator, type Page} from '@playwright/test'

export class CommonActions{
  readonly page: Page
  readonly clickSuccessMessage: Locator

  constructor(page: Page){
    this.page = page
    this.clickSuccessMessage = page.getByRole("paragraph")
  }

  public async doubleClickOnButton(desiredButton: Locator){
    await desiredButton.dblclick()
  }

  public async rightClickOnButton(desiredButton: Locator){
    await desiredButton.click({ button: "right"})
  }

  public async clickOnButton(desiredButton: Locator){
    await desiredButton.click();
  }
}