import React from 'react'
import { IDefault } from './Advertise'
import TextField, { IProps as ITextField } from './TextField'

interface IProps extends IDefault {
    type: 'date' | 'time' | 'datetime-local'
}

const DateTime = ({ type, ...otherProps }: IProps & ITextField) =>
    <TextField type={ type } { ...otherProps } />

export default DateTime
