import React from 'react'
import type { MouseEvent } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
    KeyboardTimePicker,
    KeyboardDatePicker,
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers'
import type { DefaultProps } from '../../types'
import type { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker'
import type { KeyboardDateTimePickerProps } from '@material-ui/pickers/DateTimePicker'
import type { KeyboardTimePickerProps } from '@material-ui/pickers/TimePicker'
import type { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import type { Omit } from 'ramda'
import { useStyles } from '@/core/inputs/text-field'

export interface IProps {
    locale?: DateFnsUtils['locale']
    type?: 'date' | 'time' | 'datetime'
    inputProps?: object
    onAuxClick?(event: MouseEvent<HTMLDivElement, MouseEvent>): void
    onAuxClickCapture?(event: MouseEvent<HTMLDivElement, MouseEvent>): void
    onChange(date: MaterialUiPickersDate | null, value?: string): void
}

const DEFAULT_FORMATS = {
    date: 'dd/MM/yyyy',
    time: 'HH:mm',
    datetime: 'dd/MM/yyyy HH:mm'
}

export type DateTimeProps = Omit<
    KeyboardDatePickerProps,
    'margin' | 'onChange'
> &
    Omit<KeyboardDateTimePickerProps, 'margin' | 'onChange'> &
    Omit<KeyboardTimePickerProps, 'margin' | 'onChange'> &
    IProps &
    DefaultProps

export const DateTime = ({
    padding,
    margin,
    style,
    format,
    variant = 'inline',
    inputVariant = 'outlined',
    ampm = false,
    invalidDateMessage = '',
    minDateMessage = '',
    maxDateMessage = '',
    locale,
    type = 'date',
    ...otherProps
}: DateTimeProps) => {
    const classes = useStyles()

    const fieldProps = {
        ...otherProps,
        format: format ? format : DEFAULT_FORMATS[type],
        variant,
        inputVariant,
        ampm,
        invalidDateMessage,
        minDateMessage,
        maxDateMessage,
        style: { margin, padding, ...style },
        inputProps: {
            autoComplete: 'off',
            role: 'date-picker',
            ...otherProps.inputProps
        },
        InputAdornmentProps: {
            style: { width: '32px' },
            ...otherProps.InputAdornmentProps
        },
        InputLabelProps: {
            classes: {
                outlined:
                    inputVariant === 'outlined' ? classes.outlinedLabel : ''
            },
            ...otherProps.InputLabelProps
        },
        InputProps: {
            classes: {
                input: inputVariant === 'outlined' ? classes.outlinedInput : '',
                multiline:
                    inputVariant === 'outlined' ? classes.outlinedMultiline : ''
            },
            ...otherProps.InputProps
        }
    }
    const renderDatePicker = () => <KeyboardDatePicker {...fieldProps} />
    const renderTimePicker = () => <KeyboardTimePicker {...fieldProps} />
    const renderDateTimePicker = () => (
        <KeyboardDateTimePicker {...fieldProps} />
    )

    const renderChildren = () => {
        if (type === 'date') {
            return renderDatePicker()
        }

        if (type === 'time') {
            return renderTimePicker()
        }

        return renderDateTimePicker()
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
            {renderChildren()}
        </MuiPickersUtilsProvider>
    )
}

export default DateTime
