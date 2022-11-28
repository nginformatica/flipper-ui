/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-namespace */
import '@cypress/code-coverage/support'
import '@testing-library/cypress/add-commands'
import 'cypress-plugin-tab'
import 'cypress-real-events/support'
import 'cypress-wait-until'
import { mount, MountOptions, MountReturn } from 'cypress/react'
import { cond } from 'ramda'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { BoxProps } from '../../src/core/Box'
import './commands'
import {
    GenerateMockProps,
    MemoryRouterProps,
    MockCats,
    MockObj,
    SpyCats,
    SpyObj
} from './types-interfaces-enums'
import {
    generateFakeBoxParams,
    generateFakeCardParams,
    generateFakeLetter,
    generateFakeName,
    generateFakeNumber,
    generateFakeWord,
    generateFakeWords,
    generateIcon,
    generateJSXElement,
    generateListOfFakeWords
} from './utils/generators/fakes'
import { mockValidators } from './utils/validators'

const DEFAULT_MIN_SIZE = 1
const DEFAULT_MAX_SIZE = 20
const DEFAULT_FAKE_WORD_LENGTH = 1
const DEFAULT_FAKE_LETTER_LENGTH = 1

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

    const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>

    return mount(wrapped, mountOptions)
})

export const Spies = new Map<SpyCats, SpyObj>([
    [
        'badge-children',
        { original: 'badge-children-spy', alias: '@badge-children-spy' }
    ],
    [
        'button-onclick',
        { original: 'button-onclick-spy', alias: '@button-onclick-spy' }
    ],
    ['card-top', { original: 'card-top-spy', alias: '@card-top-spy' }],
    ['card-bottom', { original: 'card-bottom-spy', alias: '@card-bottom-spy' }]
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
    ],
    [
        'button-label',
        { original: 'button-label-mock', alias: '@button-label-mock' }
    ],
    [
        'card-params',
        { original: 'card-params-mock', alias: '@card-params-mock' }
    ]
])

type mockType = string | string[] | number | JSX.Element | BoxProps

export const generateMock = ({ value, type, options }: GenerateMockProps) => {
    const FALLBACK = 'unknown-mock'

    const mockedValue: mockType = cond([
        [mockValidators('Name'), generateFakeName],
        [mockValidators('Word'), generateFakeWord],
        [mockValidators('Words'), generateFakeWords],
        [
            mockValidators('ListOfWords'),
            () =>
                generateListOfFakeWords(
                    options?.length ?? DEFAULT_FAKE_WORD_LENGTH
                )
        ],
        [
            mockValidators('Letter'),
            () =>
                generateFakeLetter(
                    options?.length ?? DEFAULT_FAKE_LETTER_LENGTH
                )
        ],
        [
            mockValidators('Number'),
            () =>
                generateFakeNumber(
                    options?.min ?? DEFAULT_MIN_SIZE,
                    options?.max ?? DEFAULT_MAX_SIZE
                )
        ],
        [
            mockValidators('JSXButton'),
            () => generateJSXElement(options?.onClick)
        ],
        [mockValidators('BoxParams'), generateFakeBoxParams],
        [mockValidators('Icon'), generateIcon],
        [mockValidators('CardParams'), generateFakeCardParams]
    ])(type)

    return cy.wrap(mockedValue).as(Mocks.get(value)?.original || FALLBACK)
}

export const generateSpy = (value: SpyCats) => {
    const FALLBACK = 'unknown-spy'

    return cy.spy().as(Spies.get(value)?.original || FALLBACK)
}
