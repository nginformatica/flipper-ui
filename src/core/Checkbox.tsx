import {
    Checkbox as MuiCheckbox,
    CheckboxProps as MuiCheckboxProps,
    FormControlLabel as MuiFormControlLabel,
    Switch as MuiSwitch,
    Typography
} from '@material-ui/core'
import React, { ChangeEvent, ReactNode } from 'react'
import { DefaultProps } from './types'
import { HelperBox, TextFieldWrapper as CheckFieldsWrapper } from './TextField'
export interface CheckboxProps extends DefaultProps {
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
    checkboxProps?: MuiCheckboxProps
}

const DENSE = { padding: '2px', margin: '0px 7px' }

const Checkbox = (props: CheckboxProps) => {
    const {
        type = 'checkbox',
        margin,
        padding,
        style,
        helperIcon,
        onHelperClick,
        checkboxProps
    } = props

    const renderHelper = (
        <>
            {onHelperClick && (
                <HelperBox
                    helperIcon={helperIcon}
                    onHelperClick={onHelperClick}
                />
            )}
        </>
    )

    const renderCheckbox = (checkboxProps?: MuiCheckboxProps) => (
        <MuiCheckbox
            {...checkboxProps}
            name={props.name}
            checked={props.checked}
            value={props.name}
            color={props.color}
            style={props.dense ? DENSE : {}}
            disabled={props.disabled}
            onChange={props.onChange}
        />
    )

    const renderSwitch = (checkboxProps?: MuiCheckboxProps) => (
        <MuiSwitch
            {...checkboxProps}
            name={props.name}
            checked={props.checked}
            value={props.name}
            color={props.color}
            disabled={props.disabled}
            onChange={props.onChange}
        />
    )

    const renderControl = (props?: MuiCheckboxProps) =>
        type === 'checkbox' ? renderCheckbox(props) : renderSwitch(props)

    const renderLabel = () =>
        typeof props.label === 'string' && props.dense ? (
            <Typography variant='body2'>{props.label}</Typography>
        ) : (
            props.label
        )

    return (
        <CheckFieldsWrapper id={props.id}>
            {props.label ? (
                <MuiFormControlLabel
                    style={{ padding, margin, ...style }}
                    className={props.className}
                    label={renderLabel()}
                    control={renderControl(checkboxProps)}
                />
            ) : (
                renderControl(checkboxProps)
            )}
            {renderHelper}
        </CheckFieldsWrapper>
    )
}

export default Checkbox
