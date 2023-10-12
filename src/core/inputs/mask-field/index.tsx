import React from 'react'
import TextField from '@/core/inputs/text-field'
import { NumericFormatProps, NumberFormatBase } from 'react-number-format'
import { InputProps } from '@material-ui/core'
import { FormatInputValueFunction } from 'react-number-format/types/types'

// Interface para as propriedades de entrada específicas do MaskField
interface MaskFieldInputProps extends InputProps {
    // Adicione aqui quaisquer propriedades adicionais necessárias para o TextField
}

export interface MaskFieldProps extends NumericFormatProps {
    mask?: string
    type?: 'text' | 'tel' | 'password'
    decimalSeparator?: string
    format?: string | FormatInputValueFunction
    decimalScale?: number
    thousandSeparator?: boolean | string
    fixedDecimalScale?: boolean
    color?: 'primary' | 'secondary' | undefined
    // eslint-disable-next-line max-len
    customInput?: React.ComponentType<MaskFieldInputProps> // Use a nova interface aqui
}

export const MaskField = (props: MaskFieldProps) => {
    const { customInput, ...otherProps } = props

    return (
        // Although react-number-format allow use of additional props,
        // shows problem with some props like have been do this
        // actually on flipper-ui. (e.g. errors treatment
        <NumberFormatBase
            {...otherProps}
            customInput={
                customInput ||
                (TextField as React.ComponentType<MaskFieldInputProps>)
            }
            format={
                typeof otherProps.format === 'string'
                    ? undefined
                    : otherProps.format
            }></NumberFormatBase>
    )
}

export default MaskField
