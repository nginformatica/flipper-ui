import MuiIconButton from '@material-ui/core/IconButton'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: React.ReactNode
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    disabled: boolean
}

const IconButton: React.SFC<IProps> = ({ children, ...otherProps }) =>
    <MuiIconButton { ...otherProps }>
        { children }
    </MuiIconButton>

export default IconButton
