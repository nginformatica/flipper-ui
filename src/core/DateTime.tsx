import React, { FC } from 'react'
import {
    KeyboardTimePicker,
    KeyboardDatePicker,
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { IDefault } from './Advertise'
import { IClasses, styles } from './TextField'
import { withStyles } from '@material-ui/styles'
import { KeyboardDatePickerProps } from '@material-ui/pickers/DatePicker'
import { KeyboardDateTimePickerProps } from '@material-ui/pickers/DateTimePicker'
import { KeyboardTimePickerProps } from '@material-ui/pickers/TimePicker'

interface IProps extends IDefault {
    type?: 'date' | 'time' | 'datetime'
    onAuxClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void
    onAuxClickCapture?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}

type TProps =
    & KeyboardDatePickerProps
    & KeyboardDateTimePickerProps
    & KeyboardTimePickerProps
    & IProps
    & IClasses

const DateTime: FC<TProps> = ({
    padding,
    margin,
    style,
    format,
    variant = 'inline',
    inputVariant = 'outlined',
    classes,
    type = 'date',
    onAuxClick,
    onAuxClickCapture,
    ...otherProps
}) => {
    const defaultFormats = {
        date: 'dd/MM/yyyy',
        time: 'HH:mm',
        datetime: 'dd/MM/yyyy HH:mm'
    }

    const fieldProps = {
        format: format ? format : defaultFormats[type],
        variant,
        inputVariant,
        style: { margin, padding, ...style },
        InputAdornmentProps: {
            style: { width: '32px' },
            ...otherProps.InputAdornmentProps
        },
        InputLabelProps: {
            classes: {
                outlined: inputVariant === 'outlined'
                    ? classes.outlinedLabel
                    : ''
            },
            ...otherProps.InputLabelProps
        },
        InputProps: {
            classes: {
                input: inputVariant === 'outlined'
                    ? classes.outlinedInput
                    : '',
                multiline: inputVariant === 'outlined'
                    ? classes.outlinedMultiline
                    : ''
            },
            ...otherProps.InputProps
        },
        ...otherProps
    }

    const renderDatePicker = () => <KeyboardDatePicker { ...fieldProps } />
    const renderTimePicker = () => <KeyboardTimePicker { ...fieldProps } />
    const renderDateTimePicker = () => <KeyboardDateTimePicker { ...fieldProps } />

    return (
        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
            { type === 'date' && renderDatePicker() }
            { type === 'time' && renderTimePicker() }
            { type === 'datetime' && renderDateTimePicker() }
        </MuiPickersUtilsProvider>
    )
}

export default withStyles(styles)(DateTime)
