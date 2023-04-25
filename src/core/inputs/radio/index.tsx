import { Radio as MuiRadio } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { DefaultProps } from '../../types'

export interface RadioProps extends DefaultProps {
    checked?: boolean
    color?: 'primary' | 'secondary' | 'default'
    value?: string
    disabled?: boolean
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const Radio = ({ padding, margin, style, ...otherProps }: RadioProps) => (
    <MuiRadio {...otherProps} style={{ padding, margin, ...style }} />
)

export default Radio
