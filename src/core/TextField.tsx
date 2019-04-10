import { TextField as MuiTextField, withStyles } from '@material-ui/core'
import React, { ChangeEvent, KeyboardEvent, SFC } from 'react'
import { IDefault } from './Advertise'

export interface IProps extends IDefault {
    autoComplete?: string
    autoFocus?: boolean
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    fullWidth?: boolean
    id?: string
    label?: string
    placeholder?: string
    multiline?: boolean
    name?: string
    required?: boolean
    select?: boolean
    type?: string
    value?: string | number | boolean | string[]
    variant?: 'standard' | 'outlined' | 'filled'
    inputProps?: object
    InputProps?: object
    InputLabelProps?: object
    SelectProps?: object
    rows?: string | number
    rowsMax?: string | number
    classes: {
        outlinedInput: string
        outlinedLabel: string
        outlinedMultiline: string
    }
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent) => void
    onKeyUp?: (event: KeyboardEvent) => void
    onKeyDown?: (event: KeyboardEvent) => void
}

const styles = () => ({
    outlinedInput: {
        fontSize: '14px',
        padding: '10px'
    },
    outlinedLabel: {
        fontSize: '14px',
        transform: 'translate(14px, 13px) scale(1)'
    },
    outlinedMultiline: {
        padding: '0px'
    }
})

const TextField: SFC<IProps> = ({
    margin,
    padding,
    style = {},
    error,
    variant = 'outlined',
    InputLabelProps = {},
    InputProps = {},
    classes,
    ...otherProps
}) =>
    <MuiTextField
        error={ error }
        variant={ variant as 'outlined' }
        style={ {
            margin,
            padding,
            ...style
        } }
        InputLabelProps={ {
            classes: {
                outlined: variant === 'outlined' ? classes.outlinedLabel : ''
            },
            ...InputLabelProps
        } }
        InputProps={ {
            classes: {
                input: variant === 'outlined' ? classes.outlinedInput : '',
                multiline: variant === 'outlined' ? classes.outlinedMultiline : ''
            },
            ...InputProps
        } }
        { ...otherProps }
    />

export default withStyles(styles)(TextField)
