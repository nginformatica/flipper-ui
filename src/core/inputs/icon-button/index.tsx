import type { MouseEvent } from 'react'
import React from 'react'
import MuiIconButton from '@material-ui/core/IconButton'
import type { DefaultProps } from '../../types'

export interface IconButtonProps extends DefaultProps {
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    disabled?: boolean
    'data-testid'?: string
    role?: string
    onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const IconButton = ({
    children,
    padding,
    margin,
    style,
    ...otherProps
}: IconButtonProps) => {
    return (
        <MuiIconButton {...otherProps} style={{ margin, padding, ...style }}>
            {children}
        </MuiIconButton>
    )
}

export default IconButton
