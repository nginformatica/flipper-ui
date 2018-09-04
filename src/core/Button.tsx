import { Button as MuiButton } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    mini?: boolean
    disabled?: boolean
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    fullWidth?: boolean
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab'
    children?: React.ReactNode
    onClick?: () => void
}

const Button = ({ children, margin, padding, style = {}, ...otherProps }: IProps)  =>
    <MuiButton
        { ...otherProps }
        style={ { margin, padding, ...style } }>
        { children }
    </MuiButton>

export default Button
