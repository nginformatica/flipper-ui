import { ButtonVariant, MockTypes } from '../types-interfaces-enums'

export const mockValidators = {
    isName: (value: MockTypes) => value === 'Name',
    isNumber: (value: MockTypes) => value === 'Number',
    isWord: (value: MockTypes) => value === 'Word',
    isWords: (value: MockTypes) => value === 'Words',
    isListOfWords: (value: MockTypes) => value === 'ListOfWords',
    isLetter: (value: MockTypes) => value === 'Letter',
    isJSXButton: (value: MockTypes) => value === 'JSXButton',
    isBoxParams: (value: MockTypes) => value === 'BoxParams',
    isIcon: (value: MockTypes) => value === 'Icon'
}

export const buttonValidators = {
    isPrimary: (value: ButtonVariant) => value === 'primary',
    isSecondary: (value: ButtonVariant) => value === 'secondary',
    isContainedPrimary: (value: ButtonVariant) => value === 'contained-primary',
    isContainedSecondary: (value: ButtonVariant) =>
        value === 'contained-secondary',
    isOutlinedPrimary: (value: ButtonVariant) => value === 'outlined-primary',
    isOutlinedSecondary: (value: ButtonVariant) =>
        value === 'outlined-secondary',
    isSelected: (value: ButtonVariant) => value === 'selected',
    isDashedPrimary: (value: ButtonVariant) => value === 'dashed-primary',
    isDashedSecondary: (value: ButtonVariant) => value === 'dashed-secondary',
    isWithAddIcon: (value: ButtonVariant) => value === 'add-icon',
    isSmall: (value: ButtonVariant) => value === 'small',
    isMedium: (value: ButtonVariant) => value === 'medium',
    isLarge: (value: ButtonVariant) => value === 'large',
    isDisabled: (value: ButtonVariant) => value === 'disabled'
}
