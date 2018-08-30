import {
    createStyles,
    WithStyles,
    withStyles
} from '@material-ui/core'
import { TextField as MuiTextField } from '@material-ui/core'
import { merge } from 'ramda'
import React from 'react'
import { background, primary } from '../colors'

interface IProps extends WithStyles<typeof styles> {
    autoComplete?: string
    autoFocus?: boolean
    defaultValue?: string | number
    disabled?: boolean
    error?: boolean
    fullWidth?: boolean
    id?: string
    label?: string
    placeholder?: string
    style?: object
    margin?: 'none' | 'dense' | 'normal'
    multiline?: boolean
    name?: string
    required?: boolean
    select?: boolean
    type?: string
    value?: string | number | boolean | string[]
    InputProps?: object
    InputLabelProps?: object
    SelectProps?: object
    onChange?: (event) => {}
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

const TextField = ({ classes, InputProps, InputLabelProps, ...otherProps }: IProps) =>
    <MuiTextField
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
