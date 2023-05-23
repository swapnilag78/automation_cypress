
import { When, Given, Then } from '@badeball/cypress-cucumber-preprocessor';


Given("I naivgate to system",()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When("I enter username and password", ()=>{
    cy.get("[placeholder='Username']").type('Admin')
    cy.get("[placeholder='Password']").type('admin123')
})


Then("verify homepage should be visible",()=>{
    cy.get("[type='submit']").click()
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})