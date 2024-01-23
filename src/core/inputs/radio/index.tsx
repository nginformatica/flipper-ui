import type { ChangeEvent } from 'react'
import React from 'react'
import { Radio as MuiRadio } from '@material-ui/core'
import type { DefaultProps } from '@/core/types'
import type { RadioProps as MuiRadioProps } from '@material-ui/core'

export interface RadioProps extends DefaultProps, MuiRadioProps {
    checked?: boolean
    color?: 'primary' | 'secondary' | 'default'
    value?: string
    disabled?: boolean
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

export const Radio = ({
    padding,
    margin,
    style,
    ...otherProps
}: RadioProps) => (
    <MuiRadio {...otherProps} style={{ padding, margin, ...style }} />
)

export default Radio
