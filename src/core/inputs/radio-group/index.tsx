import React from 'react'
import type { ChangeEvent, ReactNode } from 'react'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import MuiRadioGroup from '@mui/material/RadioGroup'
import type { DefaultProps } from '../../types'

export interface RadioGroupProps extends DefaultProps {
    row?: boolean
    title?: ReactNode
    name: string
    value?: string
    disabled?: boolean
    spacing?: 'default' | 'equal'
    color?: 'primary' | 'secondary'
    options?: IOption[]
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export interface IOption {
    value: string
    label?: ReactNode
    disabled?: boolean
}

const RadioGroup = ({
    row,
    options = [],
    className,
    padding,
    margin,
    color = 'secondary',
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
        <MuiRadioGroup
            row={row}
            name={name}
            value={value}
            color={color}
            onChange={onChange}>
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
