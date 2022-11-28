import { When } from 'cypress-cucumber-preprocessor/steps'

When('I click on button {string}', (button: string) =>
    cy.get(`button[id=${button}]`).click({ force: true })
)

When('I click on {int}th button', (pos: number) =>
    cy
        .get('button')
        .eq(pos - 1)
        .click({ force: true })
)

When('I click on text {string}', (text: string) => cy.contains(text).click())
