import { type Page, type Locator } from '@playwright/test'

export class PracticePage{
  readonly page: Page
  readonly URL= "https://commitquality.com/practice"
  readonly generalComponentsContainer: Locator
  readonly accordionsContainer: Locator
  readonly popUpsContainer: Locator
  readonly iFramesContainer: Locator
  readonly apisContainer: Locator
  readonly dynamicTextContainer: Locator

  constructor(page: Page){
    this.page = page
    this.generalComponentsContainer = page.getByTestId('practice-general')
    this.accordionsContainer = page.getByTestId('practice-accordions')
    this.popUpsContainer = page.getByTestId('practice-random-overlay')
    this.iFramesContainer = page.getByTestId('practice-iframe')
    this.apisContainer = page.getByTestId('practice-api')
    this.dynamicTextContainer = page.getByTestId('practice-dynamic-text')
  }

  public async goTo(){
    await this.page.goto(this.URL)
  }

  public async goToGeneralComponentsPracticePage(){
    await this.generalComponentsContainer.click()
  }

  public async goToAccordionsPracticePage(){
    await this.accordionsContainer.click()
  }

  public async goToPopUpsPracticePage(){
    await this.popUpsContainer.click()
  }

  public async goToIFramesPracticePage(){
    await this.iFramesContainer.click()
  }

  public async goToAPIsPracticePage(){
    await this.apisContainer.click()
  }

  public async goToDynamicTextPracticePage(){
    await this.dynamicTextContainer.click()
  }
}