import { When, Given, Then } from '@badeball/cypress-cucumber-preprocessor';

let locator, dataa

Given('I navigate to the website', () => {
        cy.fixture("locators.json").then((locators) => {
            locator = locators
        })
    
        cy.fixture("data.json").then((data_values) => {
            dataa = data_values
        })
    
    cy.openAutomationWebpage()
});


When("user enter name and already existing email address", () => {
    cy.signupPage()
    cy.addNewUser(locator, dataa)
});

Then("verify error Email Already exists is visible", () => {
    cy.get(locator.newUser.button).eq(1).click()
    cy.verifyTexts(dataa.textOnWebpage.emailAlreadyExists)
})