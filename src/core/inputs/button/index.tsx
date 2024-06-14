import React from 'react'
import type { ElementType, MouseEvent, ReactNode } from 'react'
import MuiButton from '@mui/material/Button'
import type { DefaultProps } from '@/core/types'
import type { ButtonProps } from '@mui/material/Button'

export interface IButtonProps extends DefaultProps, ButtonProps {
    children?: ReactNode
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
    component?: ElementType
    dashed?: boolean
    disabled?: boolean
    disableTouchRipple?: boolean
    'data-testid'?: string
    fullWidth?: boolean
    href?: string
    selected?: boolean
    size?: 'small' | 'medium' | 'large'
    target?: string
    variant?: 'text' | 'outlined' | 'contained'
    onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const Button = ({
    children,
    color = 'inherit',
    dashed,
    href = '',
    margin,
    padding,
    style = {},
    variant,
    ...otherProps
}: IButtonProps) => (
    <MuiButton
        href={href}
        color={color}
        variant={dashed ? 'outlined' : variant}
        style={{
            ...style,
            margin,
            padding,
            opacity: otherProps.selected ? 0.5 : 1,
            borderStyle: dashed ? 'dashed' : variant
        }}
        {...otherProps}>
        {children}
    </MuiButton>
)

export default Button
