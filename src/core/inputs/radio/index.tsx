import React from 'react'
import type { ChangeEvent } from 'react'
import MuiRadio from '@mui/material/Radio'
import type { DefaultProps } from '../../types'
import type { RadioProps } from '@mui/material/Radio'

export interface IRadioProps extends DefaultProps, RadioProps {
    value?: string
    checked?: boolean
    disabled?: boolean
    color?:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
        | 'default'
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const Radio = ({
    color = 'secondary',
    padding,
    margin,
    style,
    ...otherProps
}: IRadioProps) => (
    <MuiRadio
        {...otherProps}
        color={color}
        style={{ padding, margin, ...style }}
    />
)

export default Radio
