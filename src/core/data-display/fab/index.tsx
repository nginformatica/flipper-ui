import React from 'react'
import type { MouseEvent, ReactElement } from 'react'
import MuiFab from '@mui/material/Fab'
import type { DefaultProps } from '../../types'
import type { FabProps } from '@mui/material/Fab'
import { theme } from '@/theme'

const { gray } = theme.colors

export interface IFabProps extends DefaultProps, FabProps {
    onClick?: (event?: MouseEvent<HTMLElement>) => void
    children: ReactElement<Record<string, unknown>> | string
}

const Fab = ({
    children,
    margin,
    padding,
    style = {},
    ...otherProps
}: IFabProps) => {
    return (
        <MuiFab
            {...otherProps}
            color='inherit'
            style={{
                margin,
                padding,
                ...style
            }}
            sx={{
                '&:hover': {
                    backgroundColor: `${gray[500]}80`
                }
            }}>
            {children}
        </MuiFab>
    )
}

export default Fab
