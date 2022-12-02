import { cond, T } from 'ramda'
import React from 'react'
import InputAdornment from '../../../../src/core/InputAdornment'
import { TextFieldProps } from '../../../../src/core/TextField'
import { TextFieldVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

const generate = (
    props: TextFieldProps,
    spyHelper?: () => void
): Record<TextFieldVariant, TextFieldProps> => ({
    default: props,
    'with-adornment': {
        type: 'number',
        label: 'Price',
        InputProps: {
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
        },
        InputLabelProps: { shrink: true }
    },
    'with-helper': {
        onHelperClick: spyHelper
    },
    'with-select': {
        select: true
    },
    'with-select-clear': {
        select: true,
        hasClear: true,
        onClear: () => window.alert('CLEAR')
    }
})

const DEFAULT: TextFieldProps = {
    placeholder: 'Description'
}
export const TextFieldPropsGenerator = (
    preset: TextFieldVariant,
    spyHelper: () => void
): TextFieldProps => {
    const {
        default: defProps,
        'with-adornment': withAdornment,
        'with-helper': withHelper,
        'with-select': withSelect,
        'with-select-clear': withSelectClear
    } = generate(DEFAULT, spyHelper)
    const validate = (variant: TextFieldVariant) =>
        validator<TextFieldVariant>(variant)

    return cond([
        [validate('with-adornment'), () => withAdornment],
        [validate('with-helper'), () => withHelper],
        [validate('with-select'), () => withSelect],
        [validate('with-select-clear'), () => withSelectClear],
        [T, () => defProps]
    ])(preset)
}
