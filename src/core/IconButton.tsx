import MuiIconButton from '@material-ui/core/IconButton'
import React, { ReactNode, SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: ReactNode
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    disabled?: boolean
    onClick?: (event?) => void
}

const IconButton: SFC<IProps> = ({ children, padding, margin, style, ...otherProps }) =>
    <MuiIconButton
        { ...otherProps }
        style={ { margin, padding, ...style } }>
        { children }
    </MuiIconButton>

export default IconButton
