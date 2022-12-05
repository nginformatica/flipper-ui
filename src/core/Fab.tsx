import { Fab as MuiFab } from '@material-ui/core'
import React, { MouseEvent } from 'react'
import { DefaultProps } from './types'

interface FabProps extends DefaultProps {
    disabled?: boolean
    component?: string
    color?: 'default' | 'primary' | 'inherit' | 'secondary'
    size?: 'small' | 'medium' | 'large'
    href?: string
    variant?: 'round' | 'extended'
    onClick?: (event?: MouseEvent<HTMLElement>) => void
    children: React.ReactElement<{}>
}

const Fab = ({
    children,
    margin,
    padding,
    style = {},
    variant,
    ...otherProps
}: FabProps) => (
    <MuiFab
        {...otherProps}
        variant={variant}
        style={{ margin, padding, ...style }}>
        {children}
    </MuiFab>
)

export default Fab
