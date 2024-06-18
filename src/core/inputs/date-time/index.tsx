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

const DateTime = ({
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
            ...otherProps.InputLabelProps
        },
        InputProps: {
            style: { fontSize: '14px' },
            ...otherProps.InputProps
        }
    }

    const renderDatePicker = () => (
        <KeyboardDatePicker {...fieldProps} size='small' />
    )

    const renderTimePicker = () => (
        <KeyboardTimePicker {...fieldProps} size='small' />
    )

    const renderDateTimePicker = () => (
        <KeyboardDateTimePicker {...fieldProps} size='small' />
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
