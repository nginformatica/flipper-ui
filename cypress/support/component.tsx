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
    GenerateMockListProps,
    GenerateMockProps,
    MemoryRouterProps,
    MockCats,
    MockTypes,
    SpyCats,
    TAlias,
    TMockOptions
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
    generateListOfFakeWords,
    generateFakeCheckboxParams,
    generateListOfChips
} from './utils/generators/fakes'
import { validator } from './utils/validators'

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

const getMockedValues = (type: MockTypes, options?: TMockOptions) => {
    const validate = (variant: MockTypes) => validator<MockTypes>(variant)

    return cond([
        [validate('Name'), generateFakeName],
        [validate('Word'), generateFakeWord],
        [validate('Words'), generateFakeWords],
        [
            validate('ListOfWords'),
            () =>
                generateListOfFakeWords(
                    options?.length ?? DEFAULT_FAKE_WORD_LENGTH
                )
        ],
        [
            validate('Letter'),
            () =>
                generateFakeLetter(
                    options?.length ?? DEFAULT_FAKE_LETTER_LENGTH
                )
        ],
        [
            validate('Number'),
            () =>
                generateFakeNumber(
                    options?.min ?? DEFAULT_MIN_SIZE,
                    options?.max ?? DEFAULT_MAX_SIZE
                )
        ],
        [validate('JSXButton'), () => generateJSXElement(options?.onClick)],
        [validate('BoxParams'), generateFakeBoxParams],
        [validate('Icon'), generateIcon],
        [validate('CardParams'), generateFakeCardParams],
        [validate('CheckboxParams'), generateFakeCheckboxParams],
        [validate('ListOfChips'), generateListOfChips]
    ])(type)
}
export const generateMock = ({ value, type, options }: GenerateMockProps) => {
    const mockedValue: mockType = getMockedValues(type, options)

    return cy.wrap(mockedValue).as(mock(value).original)
}

export const generateMockList = ({
    value,
    type,
    options
}: GenerateMockListProps) => {
    const list: GenerateMockProps[] = []

    type.forEach(item => {
        list.push(getMockedValues(item, options))
    })

    return cy.wrap(list).as(mock(value).original)
}

export const generateSpy = (cat: SpyCats) => cy.spy().as(spies(cat).original)
