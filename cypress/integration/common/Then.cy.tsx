import { ButtonProps } from '@material-ui/core'
import { Then } from 'cypress-cucumber-preprocessor/steps'
import { pick } from 'ramda'
import {
    MockCats,
    MuiSelectors,
    SpyCats
} from '../../support/types-interfaces-enums'
import {
    colorMapValues,
    sizeMapValues,
    variantMapValues
} from '../../support/utils/aliases'

Then('I should see {string}', (text: string) =>
    cy.waitUntil(() => cy.contains(text).should('exist'))
)

Then('I expect {string} mock to exist', (mockName: MockCats) => {
    cy.getMock(mockName).then(mock => {
        const element: string = mock.toString()
        cy.waitUntil(() => cy.contains(element).should('exist'))
    })
})

Then('I should see {int} {string}', (quantity: number, element: string) => {
    cy.get(element).then(elements => {
        expect(elements.length).to.equal(quantity)
    })
})

Then('I should not see any {string}', (element: string) => {
    cy.get(element).should('not.exist')
})

Then(
    'I expect {string} spy to have been called {int} times',
    (spyName: SpyCats, quantity: number) => {
        cy.getSpy(spyName).should('have.been.called', quantity)
    }
)

Then('I should see {int} BadgeDot', (quantity: number) =>
    cy.get(MuiSelectors.BadgeDot).then(elements => {
        expect(elements).to.length(quantity)
    })
)

Then('I expect Box component style to match with mock', () => {
    cy.getMock('box-params').then(mock => {
        const props = pick(['name', 'id'], mock)
        const styles = pick(['padding', 'margin', 'minHeight'], mock)
        for (const prop in props) {
            cy.get('[id="box-testing-id"]').first().should('have.attr', prop)
        }
        for (const style in styles) {
            const List: Record<string, string> = styles
            const styleValue = List[style]
            cy.get('[id="box-testing-id"]')
                .first()
                .should('have.css', style, `${styleValue}px`)
        }
    })
})

Then('I expect Breadcrumb links to match with mock', () => {
    cy.getMock('breadcrumb-links').then(mockedList => {
        cy.get('a').then(elements => {
            elements.each((i, el) => {
                expect(el.getAttribute('href')).to.equal(
                    `route-${mockedList[i]}`
                )
                expect(el.innerText).to.equal(mockedList[i])
            })
        })
    })
})

Then('I expect Button label to match with mock', () => {
    cy.getMock('button-label').then(mockedLabel => {
        cy.get('[id="button-test"]')
            .first()
            .then(button => expect(button[0].textContent).to.equal(mockedLabel))
    })
})

Then('I expect button {string} to be disabled', (id: string) => {
    cy.get(`button[id=${id}]`).first().should('be.disabled')
})

Then(
    'I expect button {string} to have color {string}',
    (id: string, color: ButtonProps['color']) => {
        cy.get(`button[id=${id}]`)
            .first()
            .then(btn => {
                const list = colorMapValues.get(color) ?? []
                const hasClass = list.some(val => btn.hasClass(val))
                expect(hasClass).equal(true)
            })
    }
)

Then(
    'I expect button {string} to have variant {string}',
    (id: string, variant: ButtonProps['variant']) => {
        cy.get(`button[id=${id}]`)
            .first()
            .then(btn => {
                const list = variantMapValues.get(variant) ?? []
                const hasClass = list.some(val => btn.hasClass(val))
                expect(hasClass).equal(true)
            })
    }
)

Then(
    'I expect button {string} to have attr {string} with value {string}',
    (id: string, attr: string, value: string) => {
        cy.get(`button[id=${id}]`).first().should('have.attr', attr, value)
    }
)

Then(
    'I expect button {string} to have size {string}',
    (id: string, size: ButtonProps['size']) => {
        sizeMapValues.get(size)
        cy.get(`button[id=${id}]`)
            .first()
            .should('have.class', sizeMapValues.get(size))
    }
)
