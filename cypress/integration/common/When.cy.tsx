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

When('I click on {int}th button should be disabled', (pos: number) =>
    cy
        .get('button')
        .eq(pos - 1)
        .should('be.disabled')
)

When('I click on {int}th button should be enabled', (pos: number) =>
    cy
        .get('button')
        .eq(pos - 1)
        .should('not.be.disabled')
)

When('I click on {int}th checkbox', (pos: number) =>
    cy
        .get('input[type=checkbox]')
        .eq(pos - 1)
        .click({ force: true })
)

When('I click on text {string}', (text: string) => cy.contains(text).click())

When('I click on first Mui Button', () => {
    cy.get(MuiSelectors.Button).first().realClick()
})

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

When('I click on {int}th delete icon', (pos: number) => {
    cy.get(`.${MuiSelectors.ChipDeleteIcon}`)
        .eq(pos - 1)
        .click()
})

When(
    'I type {string} on {string} and press enter',
    (text: string, input: string) => {
        cy.get(`input[id="${input}"]`)
            .first()
            .focus()
            .realType(`${text}{enter}`)
    }
)

When('I click on Mui ExpansionPanel', () => {
    cy.get(MuiSelectors.ExpansionPanel).first().realClick()
})

When('I click on first Mui SvgIcon', () => {
    cy.get(MuiSelectors.Icon).realClick()
})

When('I click in all itens on the list', () => {
    cy.get('@list-of-spied-items-length').then(length => {
        const value = Number(length)

        for (let i = 0; i < value; i++) {
            cy.get(`[id="testing-generic-${i}"]`).first().click()
        }
    })
})
