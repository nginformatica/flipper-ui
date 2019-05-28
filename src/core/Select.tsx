import { Select as MuiSelect } from '@material-ui/core'
import React, { ChangeEvent, FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    autoWidth?: boolean
    value?: string | number
    multiple?: boolean
    variant?: 'standard' | 'outlined' | 'filled'
    onClose?: () => void
    onChange?: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

const Select: FC<IProps> = ({
    children,
    style = {},
    margin,
    padding,
    variant = 'outlined',
    ...otherProps
}) =>
    <MuiSelect
        variant={ variant as 'outlined' }
        style={ { margin, padding, ...style } }
        { ...otherProps }>
        { children }
    </MuiSelect>

export default Select
