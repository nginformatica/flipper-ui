import React from 'react'
import type { MouseEvent } from 'react'
import MuiIconButton from '@mui/material/IconButton'
import type { DefaultProps } from '../../types'

export interface IconButtonProps extends DefaultProps {
    color?:
        | 'inherit'
        | 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
    role?: string
    disabled?: boolean
    'data-testid'?: string
    size?: 'small' | 'medium' | 'large'
    onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const IconButton = ({
    children,
    padding,
    margin,
    size,
    style,
    ...otherProps
}: IconButtonProps) => {
    return (
        <MuiIconButton
            {...otherProps}
            size={size || 'large'}
            style={{ margin, padding, ...style }}>
            {children}
        </MuiIconButton>
    )
}

export default IconButton
