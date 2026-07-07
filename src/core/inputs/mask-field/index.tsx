import React from 'react'
import type { ComponentType, SyntheticEvent } from 'react'
import type { NumberFormatValues, SourceInfo } from 'react-number-format'
import {
    NumberFormatBase,
    NumericFormat,
    PatternFormat,
    getPatternCaretBoundary,
    patternFormatter
} from 'react-number-format'
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
    allowAlphanumeric?: boolean
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
        allowAlphanumeric,
        format = '######',
        style,
        ...otherProps
    } = props

    if (hasFormat && allowAlphanumeric) {
        return (
            <NumberFormatBase
                {...otherProps}
                style={{ ...style, border: '1px solid red' }}
                customInput={customInput || TextField}
                isValidInputCharacter={char => /[0-9A-Za-z]/.test(char)}
                isCharacterSame={({
                    currentValue,
                    formattedValue,
                    currentValueIndex,
                    formattedValueIndex
                }) =>
                    currentValue[currentValueIndex].toUpperCase() ===
                    formattedValue[formattedValueIndex].toUpperCase()
                }
                format={value =>
                    patternFormatter(value.toUpperCase(), {
                        format,
                        patternChar: '#'
                    })
                }
                removeFormatting={value =>
                    value.replace(/[^0-9A-Za-z]/g, '').toUpperCase()
                }
                getCaretBoundary={value =>
                    getPatternCaretBoundary(value, { format, patternChar: '#' })
                }
            />
        )
    }

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
