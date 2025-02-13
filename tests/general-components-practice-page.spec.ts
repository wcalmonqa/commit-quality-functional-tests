import {test , expect} from '../pages/Base'

test.beforeEach(async ({practicePage}) =>{
  await practicePage.goTo()
  await practicePage.goToGeneralComponentsPracticePage()
})

test.afterEach(async ({page}) =>{
  await page.close()
})

test("Clicking on 'Click me' Button", async({commonActions, generalComponentsPracticePage}) =>{
  await commonActions.clickOnButton(generalComponentsPracticePage.basicClickButton)
  await expect(generalComponentsPracticePage.successMessage).toHaveText("Button clicked")
})

test("Double clicking on 'Double click me' button", async({commonActions, generalComponentsPracticePage}) =>{
  await commonActions.doubleClickOnButton(generalComponentsPracticePage.doubleClickButton)
  await expect(generalComponentsPracticePage.successMessage).toHaveText("Button double clicked")
})

test("Right clicking on 'Right click me' button", async({commonActions, generalComponentsPracticePage}) =>{
	await commonActions.rightClickOnButton(generalComponentsPracticePage.rightClickButton)
	await expect(generalComponentsPracticePage.successMessage).toHaveText("Button right mouse clicked")
})