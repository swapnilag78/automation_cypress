// Commands for Automation Test Cases 

// function that will open Automation webpage

Cypress.Commands.add('openAutomationWebpage', () => {
    cy.visit('https://automationexercise.com/')
    cy.url().should('eq', 'https://automationexercise.com/')
})

Cypress.Commands.add('signupPage', ()=>{
    cy.visit('https://automationexercise.com/login')
})



// command to verify different texts
Cypress.Commands.add('verifyTexts', (textParam) => {
    cy.contains(textParam).should('have.text', textParam)
})

//command to make new user
Cypress.Commands.add('addNewUser', (locator, dataa) => {
    cy.get(locator.newUser.name).type(dataa.validData.loginUsername)
    cy.get(locator.newUser.email).type(dataa.validData.loginEmail)
})

//command to fillUp contactUs form
Cypress.Commands.add('fillContactUsForm', (locator, dataa) => {
    cy.get(locator.contactUsForm.name).type(dataa.contactUsFormData.name)
    cy.get(locator.contactUsForm.email).type(dataa.contactUsFormData.email)
    cy.get(locator.contactUsForm.subject).type(dataa.contactUsFormData.subject)
    cy.get(locator.contactUsForm.message).type(dataa.contactUsFormData.message)
})