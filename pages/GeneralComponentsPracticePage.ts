import { type Page, type Locator } from '@playwright/test'

export class GeneralComponentsPracticePage{
  readonly page: Page
  readonly basicClickButton: Locator
  readonly clickSuccessMessage: Locator
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
    this.clickSuccessMessage = page.getByRole('paragraph')
  }

  public async clickOn1stButton(){
    await this.basicClickButton.click()
  }

  public async doubleClick2ndButton(){
    await this.doubleClickButton.dblclick()
  }

  public async rightClick3rdButton(){
    await this.rightClickButton.click({ button: "right"})
  }
}