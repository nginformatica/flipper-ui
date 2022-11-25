// / <reference types="cypress" />
import { Mocks, Spies } from './component'
import type { MockCats, SpyCats } from './types-interfaces-enums'

Cypress.Commands.add('getMock', (name: MockCats) => {
    const FALLBACK = '@unknown-spy'

    return cy.get(Mocks.get(name)?.alias || FALLBACK)
})

Cypress.Commands.add('getSpy', (name: SpyCats) => {
    const FALLBACK = '@unknown-spy'

    return cy.get(Spies.get(name)?.alias || FALLBACK)
})
