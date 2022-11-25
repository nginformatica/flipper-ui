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
    GenerateMockProps,
    MemoryRouterProps,
    MockCats,
    MockObj,
    SpyCats,
    SpyObj
} from './types-interfaces-enums'
import './commands'
import faker from 'faker'
import { Button } from '../../src/'
import { BoxProps } from '../../src/core/Box'

declare global {
    namespace Cypress {
        interface Chainable {
            mount(
                component: React.ReactNode,
                options?: MountOptions & { routerProps?: MemoryRouterProps }
            ): Cypress.Chainable<MountReturn>
            getSpy(name: SpyCats): Chainable<JQuery<HTMLElement>>
            getMock(name: MockCats): Chainable<JQuery<HTMLElement>>
        }
    }
}

Cypress.Commands.add('mount', (component: React.ReactNode, options = {}) => {
    const { routerProps = { initialEntries: ['/'] }, ...mountOptions } = options

    const wrapped = <MemoryRouter { ...routerProps }>{ component }</MemoryRouter>

    return mount(wrapped, mountOptions)
})

export const Spies = new Map<SpyCats, SpyObj>([
    [
        'badge-children',
        { original: 'badge-children-spy', alias: '@badge-children-spy' }
    ]
])

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
    ],
    [
        'badge-counter',
        { original: 'badge-counter-mock', alias: '@badge-counter-mock' }
    ],
    [
        'badge-children',
        { original: 'badge-children-mock', alias: '@badge-children-mock' }
    ],
    [
        'box-children',
        { original: 'box-children-mock', alias: '@box-children-mock' }
    ],
    ['box-params', { original: 'box-params-mock', alias: '@box-params-mock' }],
    [
        'breadcrumb-links',
        { original: 'breadcrumb-links-mock', alias: '@breadcrumb-links-mock' }
    ]
])

const generateNumber = (min: number, max: number): number => {
  const number = faker.datatype.number(max)

  return number < min ? min : number
}

export const generateMock = ({ value, type, options }: GenerateMockProps) => {
    const FALLBACK = 'unknown-mock'
    let mock:
        | string
        | string[]
        | number
        | JSX.Element
        | BoxProps = ''

    switch (type) {
        case 'Name':
            mock = faker.name.firstName()
            break

        case 'Words':
            mock = faker.random.words()
            break
        case 'ListOfWords':
            const size = options?.length ?? 1
            const list = []
            for (let i = 0; i < size; i++) {
                list.push(faker.random.word())
            }

            mock = list
            break
        case 'Letter':
            mock = faker.random.alpha({ count: options?.length })
            break
        case 'Number':
            const number = faker.datatype.number(options?.max)
            if(options?.min) {
              if(number < options.min) {
                mock = options.min
                break
              }
            }
            mock = number
            break
        case 'JSXButton':
            mock = (
              <Button
                id='mocked-button'
                variant='outlined'
                onClick={ options?.onClick }>
                    Try changing the counter to Zero
                </Button>
            )
            break
        case 'BoxParams':
          mock = {
            padding: generateNumber(1, 20),
            margin: generateNumber(1, 20),
            name: faker.random.word(),
            className: faker.random.word(),
            id: 'box-testing-id',
            minHeight: generateNumber(200, 500)
          }
          break
        default:
            break
    }

    return cy.wrap(mock).as(Mocks.get(value)?.original || FALLBACK)
}

export const generateSpy = (value: SpyCats) => {
    const FALLBACK = 'unknown-spy'

    return cy.spy().as(Spies.get(value)?.original || FALLBACK)
}
