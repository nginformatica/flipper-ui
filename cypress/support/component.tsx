/* eslint-disable @typescript-eslint/no-namespace */
import '@cypress/code-coverage/support'
import '@testing-library/cypress/add-commands'
import 'cypress-plugin-tab'
import 'cypress-real-events/support'
import 'cypress-wait-until'
import React from 'react'
import { mount, MountOptions, MountReturn } from 'cypress/react'
import { MemoryRouter } from 'react-router-dom'
import type { MemoryRouterProps } from './types-interfaces-enums'
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>
    }
  }
}

Cypress.Commands.add('mount', (component: React.ReactNode, options = {}) => {
  const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options

  const wrapped = <MemoryRouter { ...routerProps }>{ component }</MemoryRouter>

  return mount(wrapped, mountOptions)
})
