/* eslint-disable @typescript-eslint/no-namespace */
import '@cypress/code-coverage/support'
import '@testing-library/cypress/add-commands'
import 'cypress-plugin-tab'
import 'cypress-real-events/support'
import 'cypress-wait-until'
import React from 'react'
import { mount, MountOptions, MountReturn } from 'cypress/react'
import { MemoryRouter } from 'react-router-dom'
import {
  MemoryRouterProps,
  MockCats,
  MockObj,
  MockTypes
} from './types-interfaces-enums'
import './commands'
import faker from 'faker'

declare global {
    namespace Cypress {
        interface Chainable {
            mount(
                component: React.ReactNode,
                options?: MountOptions & { routerProps?: MemoryRouterProps }
            ): Cypress.Chainable<MountReturn>
            getMock(name: MockCats): Chainable<JQuery<HTMLElement>>
        }
    }
}

Cypress.Commands.add('mount', (component: React.ReactNode, options = {}) => {
    const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options

    const wrapped = <MemoryRouter { ...routerProps }>{ component }</MemoryRouter>

    return mount(wrapped, mountOptions)
})

export const Mocks = new Map<MockCats, MockObj>([
  [
    'advertise-author',
    { original: 'advertise-author-mock', alias: '@advertise-author-mock' }
  ],
  [
    'advertise-comment',
    { original: 'advertise-comment-mock', alias: '@advertise-comment-mock' }
  ],
  [
    'avatar-children',
    { original: 'avatar-children-mock', alias: '@avatar-children-mock' }
  ]
])

export const generateMock = (value: MockCats, type: MockTypes) => {
  const FALLBACK = 'unknown-mock'
  let mock = ''

  switch (type) {
    case 'Name':
      mock = faker.name.firstName()

      break

    case 'Words':
      mock = faker.random.words()
      break

      case 'Letter':
        mock = faker.random.alpha({ count: 1 })
        break
      default:
        break
      }

      return cy.wrap(mock).as(Mocks.get(value)?.original || FALLBACK)
}
