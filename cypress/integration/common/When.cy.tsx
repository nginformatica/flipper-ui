/* eslint-disable cypress/no-unnecessary-waiting */
import { When } from 'cypress-cucumber-preprocessor/steps'
import { MockCats, MuiSelectors } from '../../support/types-interfaces-enums'

When('I wait for {int} seconds', (seconds: number) => cy.wait(seconds * 1000))

When('I click on button {string}', (button: string) =>
    cy.get(`button[id=${button}]`).click({ force: true })
)

When('I click on {int}th button', (pos: number) =>
    cy
        .get('button')
        .eq(pos - 1)
        .click({ force: true })
)

When(
    'I click on {int}th button from {int}th row',
    (btnPos: number, rowPos: number) => {
        cy.get(`[data-id=${rowPos}]`)
            .first()
            .find('button')
            .eq(btnPos - 1)
            .click({ force: true })
    }
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
    })
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

When('I type {string} on input', (text: string) => {
    cy.get('input').first().focus().realType(text)
})

When(
    'I type {string} into input name {string}',
    (text: string, name: string) => {
        cy.get(`input[name="${name}"]`).first().focus().realType(text)
    }
)

When('I clear input name {string}', (name: string) => {
    cy.get(`input[name="${name}"]`).first().clear()
})

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

When('I expand all nodes', () => {
    let initial = 0

    cy.get('ul')
        .then(size => {
            initial = size.length
            const clickMultiple = () => {
                cy.get('ul').click({ multiple: true })

                cy.wait(500)

                cy.scrollTo('bottom', { ensureScrollable: false })

                cy.get('ul').then(size => {
                    if (size.length > initial) {
                        initial = size.length
                        clickMultiple()
                    }
                })
            }
            clickMultiple()
        })
        .then(() => {
            cy.get('ul').should('have.length', initial)
        })
})

When('I click on {int}th option', (pos: number) => {
    cy.get('[name=options]')
        .eq(pos - 1)
        .realClick()
})

When('I click on Mui select option', () => {
    cy.get(MuiSelectors.SelectRoot).first().click()
})

When('I click in all list options', () => {
    cy.get('li').click({ multiple: true })
})

When('I click on right Adornment from input', () => {
    cy.get(MuiSelectors.AdornmentEnd).first().click()
})

When(
    'I pick the day {int} from {int}th datepicker',
    (day: number, position: number) => {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get(MuiSelectors.TextField)
            .eq(position - 1)
            .find('button')
            .first()
            .wait(500)
            .realClick()

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.get(MuiSelectors.PickersSlide)
            .eq(1)
            .get(MuiSelectors.PickerDays)
            .not(MuiSelectors.PickerHiddenDays)
            .eq(day - 1)
            .wait(500)
            .realClick()
    }
)

When(
    'I slide {int}% from the {int}th slider to {string}',
    (percentage: number, position: number, direction: string) => {
        let toBeInputted = ''

        switch (direction) {
            case 'left':
                toBeInputted = '{leftArrow}'
                break

            case 'right':
                toBeInputted = '{rightArrow}'
                break

            default:
                toBeInputted = '{rightArrow}'
                break
        }

        // Simulate slider
        let desiredInput = ''
        for (let i = 0; i < percentage; i++) {
            desiredInput = desiredInput + toBeInputted
        }

        cy.get(MuiSelectors.SliderThumb)
            .eq(position - 1)
            .focus()
            .realClick()
            .type(desiredInput)
    }
)

When('I clear input', () => {
    cy.get('input').first().clear()
})

When('I select the last option from options', () => {
    cy.get('li').last().click()
})

When(
    'I select the option with value {string} from options',
    (value: string) => {
        cy.get(`[data-value="${value}"]`).last().click()
    }
)

When('I focus {int}th button', (pos: number) => {
    cy.get('button')
        .eq(pos - 1)
        .focus()
})

When('I exit focus', () => {
    cy.get('[data-testid="testing-outside-click"]')
        .first()
        .click(-1050, -1000, { force: true })
})

When('I click on cy {string}', (selector: string) => {
    // NOTE - DO NOT use .first() here, if Cypress throws an error
    // saying that multiple elements were found, it means that the
    // element is not unique you should ensure cy selector is unique
    cy.get(`[data-cy="${selector}"`).click()
})
