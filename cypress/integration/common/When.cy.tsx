import { When } from 'cypress-cucumber-preprocessor/steps'

When('I click on button {string}', (button: string) =>
  cy.get(`button[id=${button}]`).click({ force: true })
)
