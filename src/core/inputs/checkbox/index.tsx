import React from 'react'
import type { ChangeEvent, CSSProperties, ReactNode } from 'react'
import MuiCheckbox from '@mui/material/Checkbox'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import MuiSwitch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import type { DefaultProps } from '../../types'
import type { CheckboxProps } from '@mui/material/Checkbox'
import type { SwitchProps } from '@mui/material/Switch'
import { HelperBox } from '@/core/inputs/text-field'
import { CheckFieldsWrapper, DENSE } from './styles'

export interface ICheckboxProps extends DefaultProps {
    name: string
    label?: ReactNode
    color?: 'primary' | 'secondary' | 'default'
    className?: string
    disabled?: boolean
    checked?: boolean
    dense?: boolean
    type?: 'switch' | 'checkbox'
    helperIcon?: ReactNode
    sx?: CSSProperties
    onHelperClick?: () => void
    onChange?: (event: ChangeEvent<HTMLElement>) => void
    checkboxProps?: CheckboxProps
}

const Checkbox = (props: ICheckboxProps) => {
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

    const renderCheckbox = (checkboxProps?: CheckboxProps) => (
        <MuiCheckbox
            {...checkboxProps}
            sx={props.sx}
            name={props.name}
            value={props.name}
            checked={props.checked}
            color={props.color || 'secondary'}
            style={props.dense ? DENSE : {}}
            disabled={props.disabled}
            onChange={props.onChange}
        />
    )

    const renderSwitch = (checkboxProps?: SwitchProps) => (
        <MuiSwitch
            {...checkboxProps}
            role='switch'
            sx={props.sx}
            name={props.name}
            value={props.name}
            checked={props.checked}
            color={props.color || 'secondary'}
            disabled={props.disabled}
            onChange={props.onChange}
        />
    )

    const renderControl = (props: CheckboxProps | SwitchProps | undefined) =>
        type === 'checkbox'
            ? renderCheckbox(props as CheckboxProps)
            : renderSwitch(props as SwitchProps)

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
