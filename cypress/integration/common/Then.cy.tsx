import { Then } from 'cypress-cucumber-preprocessor/steps'
import { pick } from 'ramda'
import {
    MockCats,
    MuiSelectors,
    SpyCats
} from '../../support/types-interfaces-enums'

Then('I should see {string}', (text: string) =>
    cy.waitUntil(() => cy.contains(text).should('exist'))
)

Then('I expect {string} mock to exist', (mockName: MockCats) => {
    cy.getMock(mockName).then(spy => {
        const element: string = spy.toString()
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
        console.log({ props, styles })
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
