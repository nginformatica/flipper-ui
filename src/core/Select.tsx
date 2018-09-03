import { Select as MuiSelect } from '@material-ui/core'
import React, { ChangeEvent } from 'react'

interface IProps {
    autoWidth?: boolean
    children?: React.ReactNode
    value?: string | number
    multiple?: boolean
    onClose?: () => {}
    onChange?: (event: ChangeEvent<HTMLElement>) => void
}

const Select = ({ children, ...otherProps }: IProps) =>
    <MuiSelect {...otherProps }>
        { children }
    </MuiSelect>

export default Select
