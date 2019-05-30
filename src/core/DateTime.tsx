import React, { FC, ReactNode } from 'react'
import {
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { IDefault } from './Advertise'
import { PopoverProps } from '@material-ui/core/Popover'
import { IconButtonProps } from '@material-ui/core/IconButton'
import { IClasses, styles } from './TextField'
import { InputLabelProps } from '@material-ui/core/InputLabel'
import { InputProps } from '@material-ui/core/Input'
import { withStyles } from '@material-ui/styles'
import { InputAdornmentProps } from '@material-ui/core/InputAdornment'
import { DialogProps } from '@material-ui/core/Dialog'

interface IProps extends IDefault {
    autoFocus?: boolean
    id?: string
    name?: string
    variant?: 'dialog' | 'inline'
    inputVariant?: 'standard' | 'outlined' | 'filled'
    ampm?: boolean
    label?: string
    value: Date
    mask?: string
    markChar?: string
    maxDate?: Date
    minDate?: Date
    format?: string
    maxDateMessage?: ReactNode
    minDateMessage?: ReactNode
    minutesStep?: number
    PopoverProps?: Partial<PopoverProps>
    refuse?: RegExp
    rightArrowButtonProps?: Partial<IconButtonProps>
    allowKeyboardControl?: boolean
    InputLabelProps?: InputLabelProps
    InputAdornmentProps?: Partial<InputAdornmentProps>
    InputProps?: InputProps
    DialogProps?: DialogProps
    okLabel?: ReactNode
    cancelLabel?: ReactNode
    views?: Array<'date' | 'year' | 'month' | 'hours' | 'minutes'>
    onChange: ((date: Date, value: string) => void) & ((date: Date) => void)
    shouldDisableDate?(date: Date): boolean
}

const DateTime: FC<IProps & IClasses> = ({
    padding,
    margin,
    style,
    format = 'dd/MM/yyyy HH:mm',
    variant = 'inline',
    inputVariant = 'outlined',
    classes,
    ...props
}) =>
    <MuiPickersUtilsProvider utils={ DateFnsUtils }>
        <KeyboardDateTimePicker
            format={ format }
            variant={ variant }
            inputVariant={ inputVariant }
            style={ { margin, padding, ...style } }
            InputAdornmentProps={ {
                style: { width: '32px' },
                ...props.InputAdornmentProps
            } }
            InputLabelProps={ {
                classes: {
                    outlined: inputVariant === 'outlined'
                        ? classes.outlinedLabel
                        : ''
                },
                ...props.InputLabelProps
            } }
            InputProps={ {
                classes: {
                    input: inputVariant === 'outlined'
                        ? classes.outlinedInput
                        : '',
                    multiline: inputVariant === 'outlined'
                        ? classes.outlinedMultiline
                        : ''
                },
                ...props.InputProps
            } }
            { ...props }
        />
    </MuiPickersUtilsProvider>

export default withStyles(styles)(DateTime)
