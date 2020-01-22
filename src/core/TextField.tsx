import { TextField as MuiTextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { ChangeEvent, KeyboardEvent, FC, FocusEvent } from 'react'
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
    value?: string | number
    variant?: 'standard' | 'outlined' | 'filled'
    inputRef?: React.Ref<HTMLInputElement>
    inputProps?: object
    InputProps?: object
    InputLabelProps?: object
    SelectProps?: object
    rows?: string | number
    rowsMax?: string | number
    helperText?: React.ReactNode
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void
    onKeyUp?: (event: KeyboardEvent) => void
    onKeyDown?: (event: KeyboardEvent) => void
}

export const useStyles = makeStyles({
    input: {
        fontSize: '14px',
        padding: '10px',
        height: 'auto'
    },
    outlinedInput: {
        fontSize: '14px',
        padding: '10px',
        height: 'auto'
    },
    outlinedLabel: {
        fontSize: '14px',
        transform: 'translate(14px, 13px) scale(1)'
    },
    outlinedMultiline: {
        padding: '0px'
    },
    iconOutlined: {
        right: '2px'
    }
})

type TProps = IProps

const TextField: FC<TProps> = ({
    margin,
    padding,
    style = {},
    error,
    variant = 'outlined',
    InputLabelProps = {},
    InputProps = {},
    SelectProps = {},
    autoComplete='off',
    ...otherProps
}) => {
    const classes = useStyles()

    return (
        <MuiTextField
            autoComplete={ autoComplete }
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
                    multiline:
                        variant === 'outlined' ? classes.outlinedMultiline : ''
                },
                ...InputProps
            } }
            SelectProps={ {
                classes: {
                    iconOutlined: classes.iconOutlined
                },
                ...SelectProps
            } }
            { ...otherProps }
        />
    )
}

export default TextField
