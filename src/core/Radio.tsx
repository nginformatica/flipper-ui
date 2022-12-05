import { Radio as MuiRadio } from '@material-ui/core'
import React, { ChangeEvent, FC } from 'react'
import { DefaultProps } from './types'

interface RadioProps extends DefaultProps {
    checked?: boolean
    color?: 'primary' | 'secondary' | 'default'
    value?: string
    disabled?: boolean
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const Radio: FC<RadioProps> = ({ padding, margin, style, ...otherProps }) => (
    <MuiRadio {...otherProps} style={{ padding, margin, ...style }} />
)

export default Radio
