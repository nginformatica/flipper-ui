import { Fab as MuiFab, FabProps as MuiFabProps } from '@material-ui/core'
import React, { MouseEvent } from 'react'
import { DefaultProps } from '../../types'

export interface FabProps extends DefaultProps, MuiFabProps {
    onClick?: (event?: MouseEvent<HTMLElement>) => void
    children: React.ReactElement<Record<string, unknown>>
}

export const Fab = ({
    children,
    margin,
    padding,
    style = {},
    ...otherProps
}: FabProps) => (
    <MuiFab {...otherProps} style={{ margin, padding, ...style }}>
        {children}
    </MuiFab>
)

export default Fab
