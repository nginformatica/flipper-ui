import React from 'react'
import TextField, { IProps as ITextField } from './TextField'

interface IProps {
    type: 'date' | 'time' | 'datetime-local'
}

const DateTime = ({ type, ...otherProps }: IProps & ITextField) =>
    <TextField type={ type } { ...otherProps } />

export default DateTime
