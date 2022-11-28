import { ButtonVariant, MockTypes } from '../types-interfaces-enums'

export const mockValidators = (type: MockTypes) => (value: MockTypes) =>
    value === type

export const buttonValidators =
    (variant: ButtonVariant) => (value: ButtonVariant) =>
        value === variant
