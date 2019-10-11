import {
    Checkbox as MuiCheckbox,
    FormControlLabel as MuiFormControlLabel,
    Switch as MuiSwitch,
    Typography
} from '@material-ui/core'
import React, { ChangeEvent, ReactNode, FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    name: string
    label?: ReactNode
    color?: 'primary' | 'secondary' | 'default'
    className?: string
    disabled?: boolean
    checked?: boolean
    dense?: boolean
    type?: 'switch' | 'checkbox'
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const Checkbox: FC<IProps> = props => {
    const { type = 'checkbox', margin, padding, style } = props

    const renderCheckbox = () =>
        <MuiCheckbox
            checked={ props.checked }
            value={ props.name }
            color={ props.color }
            style={
                props.dense
                    ? { padding: '2px', margin: '0px 7px' }
                    : {}
            }
            disabled={ props.disabled }
            onChange={ props.onChange }
        />

    const renderSwitch = () =>
        <MuiSwitch
            checked={ props.checked }
            value={ props.name }
            color={ props.color }
            disabled={ props.disabled }
            onChange={ props.onChange }
        />

    const renderControl = () => type === 'checkbox'
        ? renderCheckbox()
        : renderSwitch()

    const renderLabel = () =>
        typeof props.label === 'string' && props.dense
            ? (
                <Typography variant='body2'>
                    { props.label }
                </Typography>
            )
            : props.label

    return props.label
        ? (
            <MuiFormControlLabel
                style={ { padding, margin, ...style } }
                className={ props.className }
                label={ renderLabel() }
                control={ renderControl() }
            />
        )
        : renderControl()
}

export default Checkbox
