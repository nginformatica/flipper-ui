import React from 'react'
import type { MouseEvent, ReactElement } from 'react'
import { Fab as MuiFab } from '@material-ui/core'
import type { DefaultProps } from '@/core/types'
import type { FabProps as MuiFabProps } from '@material-ui/core'

export interface FabProps extends DefaultProps, MuiFabProps {
    onClick?: (event?: MouseEvent<HTMLElement>) => void
    children: ReactElement<Record<string, unknown>>
}

const Fab = ({
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
