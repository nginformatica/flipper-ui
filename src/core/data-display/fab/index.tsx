import React from 'react'
import type { MouseEvent, ReactElement } from 'react'
import MuiFab from '@mui/material/Fab'
import type { DefaultProps } from '../../types'
import type { FabProps } from '@mui/material/Fab'

export interface IFabProps extends DefaultProps, FabProps {
    onClick?: (event?: MouseEvent<HTMLElement>) => void
    children: ReactElement<Record<string, unknown>>
}

const Fab = ({
    children,
    margin,
    padding,
    style = {},
    ...otherProps
}: IFabProps) => (
    <MuiFab {...otherProps} style={{ margin, padding, ...style }}>
        {children}
    </MuiFab>
)

export default Fab
