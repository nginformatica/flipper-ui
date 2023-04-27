import {
    Radio as MuiRadio,
    RadioProps as MuiRadioProps
} from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { DefaultProps } from '../../types'

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
