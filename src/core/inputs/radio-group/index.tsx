import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup as MuiRadioGroup
} from '@material-ui/core'
import React, { ChangeEvent, ReactNode } from 'react'
import { DefaultProps } from '../../types'

export interface RadioGroupProps extends DefaultProps {
    row?: boolean
    title?: ReactNode
    name: string
    value?: string
    disabled?: boolean
    spacing?: 'default' | 'equal'
    options?: IOption[]
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface IOption {
    value: string
    label?: ReactNode
    disabled?: boolean
}

export const RadioGroup = ({
    row,
    options = [],
    className,
    padding,
    margin,
    style = {},
    title,
    value,
    spacing,
    name,
    onChange,
    ...otherProps
}: RadioGroupProps) => (
    <FormControl
        fullWidth
        className={className}
        style={{ padding, margin, ...style }}
        {...otherProps}>
        <FormLabel component='legend'>{title}</FormLabel>
        <MuiRadioGroup row={row} name={name} value={value} onChange={onChange}>
            {options.map(option => (
                <FormControlLabel
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    control={<Radio />}
                    disabled={option.disabled}
                    style={spacing === 'equal' ? { flex: 1 } : {}}
                />
            ))}
        </MuiRadioGroup>
    </FormControl>
)

export default RadioGroup
