import { Select as MuiSelect } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    autoWidth?: boolean
    children?: React.ReactNode
    value?: string | number
    multiple?: boolean
    onClose?: () => void
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const Select = ({ children, style = {}, margin, padding, ...otherProps }: IProps) =>
    <MuiSelect
        style={ { margin, padding, ...style } }
        {...otherProps }>
        { children }
    </MuiSelect>

export default Select
