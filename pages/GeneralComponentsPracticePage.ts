import { type Page, type Locator } from '@playwright/test'

export class GeneralComponentsPracticePage{
  readonly page: Page
  readonly basicClickButton: Locator
  readonly successMessage: Locator
  readonly doubleClickButton: Locator
  readonly rightClickButton: Locator
  readonly radioButton1: Locator
  readonly radioButton2: Locator

  constructor(page: Page){
    this.page = page
    this.basicClickButton = page.getByRole('button', { name: 'Click me', exact: true })
    this.doubleClickButton = page.getByRole('button', { name: 'Double click me' })
    this.rightClickButton = page.getByRole('button', { name: 'Right click me' })
    this.radioButton1 = page.getByRole('radio', { name: 'Radio button', exact: true })
    this.radioButton2 = page.getByRole('radio', { name: 'Radio button 2', exact: true })
    this.successMessage = page.getByRole('paragraph')
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