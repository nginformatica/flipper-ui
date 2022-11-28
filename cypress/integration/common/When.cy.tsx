import { When } from 'cypress-cucumber-preprocessor/steps'
import { MockCats, MuiSelectors } from '../../support/types-interfaces-enums'

When('I click on button {string}', (button: string) =>
    cy.get(`button[id=${button}]`).click({ force: true })
)

When('I click on {int}th button', (pos: number) =>
    cy
        .get('button')
        .eq(pos - 1)
        .click({ force: true })
)

When('I click on {int}th checkbox', (pos: number) =>
    cy
        .get('input[type=checkbox]')
        .eq(pos - 1)
        .click({ force: true })
)

When('I click on text {string}', (text: string) => cy.contains(text).click())

When('I hover mocked text {string}', (cat: MockCats) => {
    cy.getMock(cat).then(mock => {
        if (mock instanceof Array) {
            mock.forEach(item => {
                if (typeof item === 'string') {
                    cy.contains(item).realHover()

                    return
                }
            })
        }

        if (typeof mock === 'string') {
            cy.contains(mock).realHover()
        }
        console.log({ mock })
    })
    // cy.contains(text).realHover()
})

When('I click on delete icon', () => {
    cy.get(`.${MuiSelectors.ChipDeleteIcon}`).first().click()
})
