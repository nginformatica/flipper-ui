import React from 'react'
import type { ComponentType, SyntheticEvent } from 'react'
import type { NumberFormatValues, SourceInfo } from 'react-number-format'
import { NumericFormat, PatternFormat } from 'react-number-format'
import type { ITextFieldProps } from '@/core/inputs/text-field'
import type { SourceType } from 'react-number-format/types/types'
import TextField from '@/core/inputs/text-field'

export interface MaskFieldProps extends Omit<ITextFieldProps, 'size'> {
    mask?: string | string[]
    type?: 'text' | 'tel' | 'password'
    decimalSeparator?: string
    format?: string
    decimalScale?: number
    thousandSeparator?: boolean | string
    fixedDecimalScale?: boolean
    customInput?: ComponentType<ITextFieldProps>
    hasFormat?: boolean
    onValueChange?: (values: NumberFormatValues, sourceInfo: SourceInfo) => void
}

export interface IValues {
    value: string
    floatValue?: number
    formattedValue?: string
}

export interface ISource {
    event?: SyntheticEvent<HTMLInputElement>
    source: SourceType
}

const MaskField = (props: MaskFieldProps) => {
    const {
        customInput,
        hasFormat,
        format = '######',
        style,
        ...otherProps
    } = props

    return (
        <>
            {hasFormat ? (
                <PatternFormat
                    {...otherProps}
                    format={format}
                    style={{ ...style }}
                    customInput={customInput || TextField}
                />
            ) : (
                <NumericFormat
                    {...otherProps}
                    style={{ ...style }}
                    customInput={customInput || TextField}
                />
            )}
        </>
    )
}

export default MaskField
