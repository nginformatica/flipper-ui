import React, { ChangeEvent } from 'react'
import TextField, { IOption } from '@/core/inputs/text-field'
import { NumericFormatProps, NumberFormatBase } from 'react-number-format'
import { FormatInputValueFunction } from 'react-number-format/types/types'

export interface MaskFieldProps extends NumericFormatProps {
    error?: boolean
    showEdit?: boolean
    hasClear?: boolean
    autoFocus?: boolean
    multiline?: boolean
    select?: boolean
    fullWidth?: boolean
    required?: boolean
    disabled?: boolean
    fixedDecimalScale?: boolean
    thousandSeparator?: boolean | string
    margin?: string
    id?: string
    name?: string
    mask?: string
    placeholder?: string
    label?: string
    autoComplete?: string
    decimalSeparator?: string
    format?: string | FormatInputValueFunction
    defaultValue?: string | number
    value?: string | number
    rows?: string | number
    rowsMax?: string | number
    decimalScale?: number
    SelectProps?: object
    InputProps?: object
    inputProps?: object
    InputLabelProps?: object
    options?: IOption[] | string
    children?: React.ReactNode
    helperText?: React.ReactNode
    helperIcon?: React.ReactNode
    style?: React.CSSProperties
    inputRef?: React.Ref<HTMLInputElement>
    type?: 'text' | 'tel' | 'password'
    variant?: 'standard' | 'outlined' | 'filled'
    color?: 'primary' | 'secondary' | undefined
    customInput?: React.ComponentType
    onClear?: () => void
    onBlur?: () => void
    onHelperClick?: () => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void
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
