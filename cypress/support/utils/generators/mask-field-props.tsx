import React from 'react'
import { ifElse } from 'ramda'
import { MaskFieldProps } from '../../../../src/core/MaskField'
import { TextFieldProps } from '../../../../src/core/TextField'
import InputAdornment from '../../../../src/core/InputAdornment'
import { MaskFieldVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

type IProps = TextFieldProps & MaskFieldProps

const generate = (props: IProps): Record<MaskFieldVariant, IProps> => ({
    default: props,
    'with-input-adornment': {
        fixedDecimalScale: true,
        decimalScale: 2,
        label: 'Price',
        decimalSeparator: ',',
        thousandSeparator: '.',
        InputProps: {
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
        },
        InputLabelProps: { shrink: true }
    }
})

const DEFAULT: IProps = {
    placeholder: 'Description'
}

const { default: defProp, 'with-input-adornment': withInputAdornment } =
    generate(DEFAULT)

export const MaskFieldPropsGenerator = (preset: MaskFieldVariant): IProps => {
    const validate = (variant: MaskFieldVariant) =>
        validator<MaskFieldVariant>(variant)

    return ifElse(
        validate('with-input-adornment'),
        () => withInputAdornment,
        () => defProp
    )(preset)
}
