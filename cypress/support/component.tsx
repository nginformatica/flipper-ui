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
    SpyCats,
    TAlias
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

export const mock = (cat: MockCats): TAlias => ({
    original: `${cat}-mock`,
    alias: `@${cat}-mock`
})

export const spies = (cat: SpyCats): TAlias => ({
    original: `${cat}-spy`,
    alias: `@${cat}-spy`
})

type mockType = string | string[] | number | JSX.Element | BoxProps

export const generateMock = ({ value, type, options }: GenerateMockProps) => {
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

    return cy.wrap(mockedValue).as(mock(value).original)
}

export const generateSpy = (cat: SpyCats) => cy.spy().as(spies(cat).original)
