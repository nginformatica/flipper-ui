import React, { Children } from 'react'
import type { MouseEvent, ReactNode } from 'react'
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
    /**
     * Accessible name. Falls back to `name` when the button has no text of
     * its own — an icon alone leaves it unnamed, since the icon itself is
     * `aria-hidden` (WCAG 4.1.2). Never applied over a text child, which
     * already names the button.
     */
    'aria-label'?: string
    size?: 'small' | 'medium' | 'large'
    onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const hasTextChild = (children: ReactNode) =>
    Children.toArray(children).some(
        child => typeof child === 'string' || typeof child === 'number'
    )

const IconButton = ({
    children,
    padding,
    margin,
    size,
    style,
    ...otherProps
}: IconButtonProps) => {
    const ariaLabel =
        otherProps['aria-label'] ??
        (hasTextChild(children) ? undefined : otherProps.name)

    return (
        <MuiIconButton
            {...otherProps}
            size={size || 'large'}
            aria-label={ariaLabel}
            style={{ margin, padding, ...style }}>
            {children}
        </MuiIconButton>
    )
}

export default IconButton
