import React, { FC } from 'react'
import { IDefault } from './Advertise'
import TextField, { IProps as ITextField } from './TextField'

interface IProps extends IDefault {
    type: 'date' | 'time' | 'datetime-local'
}

const DateTime: FC<IProps & ITextField> = ({ type, ...otherProps }) =>
    <TextField type={ type } { ...otherProps } />

export default DateTime
