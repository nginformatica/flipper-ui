import { Then } from 'cypress-cucumber-preprocessor/steps'
import { pick } from 'ramda'
import {
    MockCats,
    MuiSelectors,
    SpyCats
} from 'cypress/support/types-interfaces-enums'

Then('I should see {string}', (text: string) =>
    cy.waitUntil(() => cy.contains(text).should('exist'))
)

Then('I expect {string} mock to exist', (mockName: MockCats) => {
    cy.getMock(mockName).then(spy => {
        // @ts-ignore
        cy.waitUntil(() => cy.contains(spy).should('exist'))
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
        console.log({ props, styles })
        for (const prop in props) {
            cy.get('[id="box-testing-id"]')
                .first()
                .should('have.attr', prop)
        }
        for (const style in styles) {
            cy.get('[id="box-testing-id"]')
                .first()
                // @ts-ignore
                .should('have.css', style, `${styles[style]}px`)
        }
    })
})
