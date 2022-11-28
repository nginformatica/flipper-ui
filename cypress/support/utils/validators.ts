import { CheckboxVariant, MockTypes } from '../types-interfaces-enums'

export const mockValidators = (type: MockTypes) => (value: MockTypes) =>
    value === type

export const checkboxValidators =
    (type: CheckboxVariant) => (value: CheckboxVariant) =>
        value === type

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function validator<T>(type: T) {
    return (value: T) => value === type
}
