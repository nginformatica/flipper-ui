import React from 'react'
import TextField, { TextFieldProps } from '@/core/inputs/text-field'
import NumberFormat from 'react-number-format'

export interface MaskFieldProps {
    mask?: string
    type?: 'text' | 'tel' | 'password'
    decimalSeparator?: string
    format?: string
    decimalScale?: number
    thousandSeparator?: boolean | string
    fixedDecimalScale?: boolean
    customInput?: React.ComponentType<TextFieldProps>
}

const MaskField = (props: TextFieldProps & MaskFieldProps) => {
    const { customInput, ...otherProps } = props

    return (
        // Although react-number-format allow use of additional props,
        // shows problem with some props like have been do this
        // actually on flipper-ui. (e.g. errors treatment)
        <NumberFormat
            {...otherProps}
            customInput={customInput || TextField}></NumberFormat>
    )
}

export default MaskField
