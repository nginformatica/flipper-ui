import { Button as MuiButton } from '@material-ui/core'
import React from 'react'

interface IProps {
    mini?: boolean
    style?: object
    disabled?: boolean
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    margin?: number
    fullWidth?: boolean
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab'
    children?: React.ReactNode
    onClick?: () => {}
}

const Button = ({ children, margin, style = {}, ...otherProps }: IProps)  =>
    <MuiButton
        { ...otherProps }
        style={ { margin, ...style } }>
        { children }
    </MuiButton>

export default Button
