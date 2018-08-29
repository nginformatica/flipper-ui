import { withStyles } from '@material-ui/core'
import { TextField as MuiTextField } from '@material-ui/core'
import { merge } from 'ramda'
import React from 'react'
import { background, primary } from '../colors'

interface IProps {
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
    value?: string | number | boolean | []
    children?: React.ReactNode
    InputProps?: object
    InputLabelProps?: object
    SelectProps?: object
    classes: {
        root: string
        input: string
        label: string
    }
    onChange?: (event) => {}
}

const styles = theme => ({
    input: {
        '&:focus': {
            borderColor: primary.light,
            boxShadow: `0 0 0 0.2rem ${primary.light}D9`,
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
