import React from 'react'
import type { ComponentType } from 'react'
import type { NumberFormatProps } from 'react-number-format'
import NumberFormat from 'react-number-format'
import type { TextFieldProps } from '@/core/inputs/text-field'
import { TextField } from '@/core/inputs/text-field'

export interface MaskFieldProps extends NumberFormatProps {
    mask?: string
    type?: 'text' | 'tel' | 'password'
    decimalSeparator?: string
    format?: string
    decimalScale?: number
    thousandSeparator?: boolean | string
    fixedDecimalScale?: boolean
    customInput?: ComponentType<TextFieldProps>
}

export const MaskField = (props: MaskFieldProps) => {
    const { customInput, ...otherProps } = props

    return (
        // Although react-number-format allow use of additional props,
        // shows problem with some props like have been do this
        // actually on flipper-ui. (e.g. errors treatment)
        <NumberFormat {...otherProps} customInput={customInput || TextField} />
    )
}

export default MaskField
