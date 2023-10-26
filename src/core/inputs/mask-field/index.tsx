import React, { ChangeEvent } from 'react'
import TextField from '@/core/inputs/text-field'
import { NumericFormatProps, NumberFormatBase } from 'react-number-format'
import { FormatInputValueFunction } from 'react-number-format/types/types'

export interface MaskFieldProps extends NumericFormatProps {
    children?: React.ReactNode
    error?: boolean
    value?: number | string
    style?: React.CSSProperties
    margin?: string
    id?: string
    autoFocus?: boolean
    fullWidth?: boolean
    required?: boolean
    disabled?: boolean
    InputProps?: object
    inputProps?: object
    InputLabelProps?: object
    placeholder?: string
    label?: string
    defaultValue?: string | number
    name?: string
    mask?: string
    type?: 'text' | 'tel' | 'password'
    decimalSeparator?: string
    format?: string | FormatInputValueFunction
    decimalScale?: number
    thousandSeparator?: boolean | string
    fixedDecimalScale?: boolean
    color?: 'primary' | 'secondary' | undefined
    onBlur?: () => void
    onHelperClick?: () => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    customInput?: React.ComponentType
}

export const MaskField = (props: MaskFieldProps) => {
    const { customInput, ...otherProps } = props

    return (
        // Although react-number-format allow use of additional props,
        // shows problem with some props like have been do this
        // actually on flipper-ui. (e.g. errors treatment
        <NumberFormatBase
            {...otherProps}
            customInput={customInput || TextField}
            format={
                typeof otherProps.format === 'string'
                    ? undefined
                    : otherProps.format
            }></NumberFormatBase>
    )
}

export default MaskField
