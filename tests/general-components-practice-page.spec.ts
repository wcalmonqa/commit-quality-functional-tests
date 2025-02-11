import {test , expect} from '../pages/Base'

test.beforeEach(async ({practicePage}) =>{
  await practicePage.goTo()
  await practicePage.goToGeneralComponentsPracticePage()
})

test.afterEach(async ({page}) =>{
  await page.close()
})

test("Clicking on 'Click me' Button", async({generalComponentsPracticePage}) =>{
  await generalComponentsPracticePage.clickOn1stButton()
  await expect(generalComponentsPracticePage.clickSuccessMessage).toContainText("Button clicked")
})

test("Double clicking on 'Double click me' button", async({generalComponentsPracticePage}) =>{
  await generalComponentsPracticePage.doubleClick2ndButton()
  await expect(generalComponentsPracticePage.clickSuccessMessage).toContainText("Button double clicked")
})

test("Right clicking on 'Right click me' button", async({generalComponentsPracticePage}) =>{
	await generalComponentsPracticePage.rightClick3rdButton()
	await expect(generalComponentsPracticePage.clickSuccessMessage).toContainText("Button right mouse clicked")
})