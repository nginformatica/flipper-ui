import { Then } from 'cypress-cucumber-preprocessor/steps'
import {
  MockCats,
  MuiSelectors,
  SpyCats
} from '../../support/types-interfaces-enums'

Then('I should see {string}', (text: string) =>
    cy.waitUntil(() => cy.contains(text).should('exist'))
)

Then(
    'I expect {string} mock to exist',
    (mockName: MockCats) => {
      cy.getMock(mockName).then(spy => {
        // @ts-ignore
        cy.waitUntil(() => cy.contains(spy).should('exist'))
      })
    }
  )

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
