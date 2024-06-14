import React from 'react'
import type { ChangeEvent } from 'react'
import MuiRadio from '@mui/material/Radio'
import type { DefaultProps } from '@/core/types'
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

const Radio = ({ padding, margin, style, ...otherProps }: IRadioProps) => (
    <MuiRadio {...otherProps} style={{ padding, margin, ...style }} />
)

export default Radio
