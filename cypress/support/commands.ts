// / <reference types="cypress" />
import { mock, spies } from './component'
import type { MockCats, SpyCats } from './types-interfaces-enums'

Cypress.Commands.add('getMock', (name: MockCats) => cy.get(mock(name).alias))

Cypress.Commands.add('getSpy', (name: SpyCats) => cy.get(spies(name).alias))
