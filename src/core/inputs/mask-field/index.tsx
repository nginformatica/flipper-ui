import React, { ChangeEvent } from 'react'
import TextField, { IOption, TextFieldProps } from '@/core/inputs/text-field'
import { NumericFormat } from 'react-number-format'
import { FormatInputValueFunction } from 'react-number-format/types/types'

export interface MaskFieldProps
    extends Omit<TextFieldProps, 'format' | 'size'> {
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

const MaskField: React.FC<MaskFieldProps> = ({
    customInput = TextField,
    format,
    ...otherProps
}) => {
    const formattedProps = {
        ...otherProps,
        customInput,
        format: format !== undefined ? format : undefined
    }

    return <NumericFormat {...formattedProps} />
}

export default MaskField
