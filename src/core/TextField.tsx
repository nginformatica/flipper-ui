import { createStyles, withStyles } from '@material-ui/core'
import { TextField as MuiTextField } from '@material-ui/core'
import { merge } from 'ramda'
import React, { ChangeEvent } from 'react'
import { background } from '../colors'
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
    classes: {
        input: string
        root: string
        label: string
    }
    InputProps?: object
    InputLabelProps?: object
    SelectProps?: object
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const styles = theme => createStyles({
    input: {
        '&:focus': {
            borderColor: theme.palette.primary.light,
            boxShadow: `0 0 0 0.2rem ${theme.palette.primary.light}D9`,
        },
        'backgroundColor': theme.palette.common.white,
        'border': `1px solid ${background.dark}`,
        'borderRadius': 4,
        'fontSize': 16,
        'padding': '10px 12px',
        'transition': theme.transitions.create(['border-color', 'box-shadow']),
        'width': 'calc(100% - 24px)'
    },
    label: {
        fontSize: 18
    },
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
        'padding': 0
    }
})

const TextField: React.SFC<IProps> = ({
    classes,
    margin,
    padding,
    style = {},
    InputProps,
    InputLabelProps,
    ...otherProps
}) =>
    <MuiTextField
        style={ { margin, padding, ...style } }
        { ...otherProps }
        InputProps={
            merge(
                {
                    classes: {
                        input: classes.input,
                        root: classes.root
                    },
                    disableUnderline: true
                },
                InputProps
            )
        }
        InputLabelProps={
            merge({
                    className: classes.label,
                    shrink: true
                },
                InputLabelProps
            )
        }
    />

export default withStyles(styles)(TextField)
