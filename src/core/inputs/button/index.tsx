import React from 'react'
import type { ElementType, MouseEvent, ReactNode } from 'react'
import { Button as MuiButton } from '@material-ui/core'
import type { DefaultProps } from '../../types'

export interface ButtonProps extends DefaultProps {
    disabled?: boolean
    selected?: boolean
    disableTouchRipple?: boolean
    component?: ElementType
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    fullWidth?: boolean
    variant?: 'text' | 'outlined' | 'contained' | 'dashed'
    target?: string
    children?: ReactNode
    'data-testid'?: string
    onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const Button = ({
    children,
    margin,
    padding,
    style = {},
    variant,
    ...otherProps
}: ButtonProps) => (
    <MuiButton
        {...otherProps}
        variant={variant === 'dashed' ? 'outlined' : variant}
        style={{
            ...style,
            margin,
            padding,
            opacity: otherProps.selected ? 0.5 : 1,
            borderStyle: variant
        }}>
        {children}
    </MuiButton>
)

export default Button
