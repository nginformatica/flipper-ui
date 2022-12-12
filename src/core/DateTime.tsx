import React, { FC } from 'react'
import {
    KeyboardTimePicker,
    KeyboardDatePicker,
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { DefaultProps } from './types'
import { useStyles } from './TextField'
import { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker'
import { KeyboardDateTimePickerProps } from '@material-ui/pickers/DateTimePicker'
import { KeyboardTimePickerProps } from '@material-ui/pickers/TimePicker'
import { Omit } from 'ramda'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'

interface IProps {
    locale?: DateFnsUtils['locale']
    type?: 'date' | 'time' | 'datetime'
    inputProps?: object
    onAuxClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void
    onAuxClickCapture?(
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void
    onChange(date: MaterialUiPickersDate | null, value?: string): void
}

const DEFAULT_FORMATS = {
    date: 'dd/MM/yyyy',
    time: 'HH:mm',
    datetime: 'dd/MM/yyyy HH:mm'
}

type DateTimeProps = Omit<KeyboardDatePickerProps, 'margin' | 'onChange'> &
    Omit<KeyboardDateTimePickerProps, 'margin' | 'onChange'> &
    Omit<KeyboardTimePickerProps, 'margin' | 'onChange'> &
    IProps &
    DefaultProps

const DateTime: FC<DateTimeProps> = ({
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
}) => {
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

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
            {type === 'date' && renderDatePicker()}
            {type === 'time' && renderTimePicker()}
            {type === 'datetime' && renderDateTimePicker()}
        </MuiPickersUtilsProvider>
    )
}

export default DateTime
