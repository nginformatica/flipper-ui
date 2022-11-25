import { MockTypes } from '../types-interfaces-enums'

export const mockValidators = {
    isName: (value: MockTypes) => value === 'Name',
    isNumber: (value: MockTypes) => value === 'Number',
    isWords: (value: MockTypes) => value === 'Words',
    isListOfWords: (value: MockTypes) => value === 'ListOfWords',
    isLetter: (value: MockTypes) => value === 'Letter',
    isJSXButton: (value: MockTypes) => value === 'JSXButton',
    isBoxParams: (value: MockTypes) => value === 'BoxParams'
}
