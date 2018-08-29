import { Button as MuiButton } from '@material-ui/core'
import React from 'react'

interface IProps {
    mini?: boolean
    style?: object
    disabled?: boolean
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    fullWidth?: boolean
    variant?: 'text' | 'flat' | 'outlined' | 'contained' | 'raised' | 'fab' | 'extendedFab'
    children?: React.ReactNode
    onClick?: () => void
}

const Button = ({ children, ...otherProps }: IProps)  =>
    <MuiButton { ...otherProps }>
        { children }
    </MuiButton>

export default Button
