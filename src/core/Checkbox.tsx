import {
    Checkbox as MuiCheckbox,
    FormControlLabel as MuiFormControlLabel,
    Switch as MuiSwitch,
    Typography
} from '@material-ui/core'
import React, { ChangeEvent, ReactNode } from 'react'
import { IDefault } from './Advertise'
import { HelperBox, TextFieldWrapper as CheckFieldsWrapper } from './TextField'
interface IProps extends IDefault {
    name: string
    label?: ReactNode
    color?: 'primary' | 'secondary' | 'default'
    className?: string
    disabled?: boolean
    checked?: boolean
    dense?: boolean
    type?: 'switch' | 'checkbox'
    helperIcon?: React.ReactNode
    onHelperClick?: () => void
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const DENSE = { padding: '2px', margin: '0px 7px' }

const Checkbox = (props: IProps) => {
    const {
        type = 'checkbox',
        margin,
        padding,
        style,
        helperIcon,
        onHelperClick
    } = props

    const renderHelper = (
        <>
            {
                onHelperClick && (
                    <HelperBox
                        helperIcon={ helperIcon }
                        onHelperClick={ onHelperClick }
                    />
                )
            }
        </>
    )

    const renderCheckbox = () =>
        <MuiCheckbox
            id={ props.id }
            name={ props.name }
            checked={ props.checked }
            value={ props.name }
            color={ props.color }
            style={ props.dense ? DENSE : {} }
            disabled={ props.disabled }
            onChange={ props.onChange }
        />

    const renderSwitch = () =>
        <MuiSwitch
            id={ props.id }
            name={ props.name }
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

    return (
        <CheckFieldsWrapper>
            {
                props.label
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
            { renderHelper }
        </CheckFieldsWrapper>
    )
}

export default Checkbox
