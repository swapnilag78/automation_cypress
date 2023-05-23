import { When, Given, Then } from '@badeball/cypress-cucumber-preprocessor';

let locator, dataa

Given('I naivgate to website',()=>{
    cy.fixture("locators.json").then((locators) => {
        locator = locators
    })
    
    cy.fixture("data.json").then((data_values) => {
        dataa = data_values
    })
    cy.openAutomationWebpage()
})

Then('homepage is visible', ()=>{
    cy.verifyTexts(dataa.textOnWebpage.homepageText)
})

When('on clicking contact Us button', ()=>{
    cy.get(locator.homePage.contactUs).click()
})

Then('verify Get In touch text is visible',()=>{
    cy.verifyTexts(dataa.textOnWebpage.contactUsHeader)
})

When('user enters name, email subject, message, upload file and click submit button', ()=>{
    cy.fillContactUsForm(locator, dataa)
    const uploadFile = 'files_folder/file.png'
    cy.get(locator.contactUsForm.button).click().selectFile(uploadFile)
    cy.get(locator.contactUsForm.submitBtn).click()
})

Then('verify success message displayed is visible And on click it redirects to homepage',()=>{
    cy.verifyTexts(dataa.contactUsFormData.afterSubmitMessage)
    cy.get(locator.contactUsForm.afterHomeBtn).click()
    cy.verifyTexts(dataa.textOnWebpage.homepageText)
})
