import MuiIconButton from '@material-ui/core/IconButton'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: React.ReactNode
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    disabled?: boolean
    onClick?: (event?) => any
}

const IconButton: React.SFC<IProps> = ({ children, padding, margin, style, ...otherProps }) =>
    <MuiIconButton
        { ...otherProps }
        style={ { margin, padding, ...style } }>
        { children }
    </MuiIconButton>

export default IconButton
