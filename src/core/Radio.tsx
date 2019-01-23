import { Radio as MuiRadio } from '@material-ui/core'
import React,  { ChangeEvent, SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    checked?: boolean
    color?: 'primary' | 'secondary' | 'default'
    value?: string
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const Radio: SFC<IProps> = ({ padding, margin, style, ...otherProps }) =>
    <MuiRadio
        { ...otherProps }
        style={ { padding, margin, ...style } }
    />

export default Radio
