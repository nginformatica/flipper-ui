import { Then } from 'cypress-cucumber-preprocessor/steps'
import { MockCats } from 'support/types-interfaces-enums'

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
