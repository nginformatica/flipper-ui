// / <reference types="cypress" />
import { Mocks } from './component'
import type { MockCats } from './types-interfaces-enums'

Cypress.Commands.add('getMock', (name: MockCats) => {
  const FALLBACK = '@unknown-spy'

return cy.get(Mocks.get(name)?.alias || FALLBACK)
})
