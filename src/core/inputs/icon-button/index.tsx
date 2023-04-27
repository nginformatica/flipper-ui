import MuiIconButton from '@material-ui/core/IconButton'
import React, { MouseEvent } from 'react'
import { DefaultProps } from '../../types'

export interface IconButtonProps extends DefaultProps {
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    disabled?: boolean
    'data-testid'?: string
    role?: string
    onClick?(event: MouseEvent<HTMLButtonElement>): void
}

export const IconButton = ({
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
