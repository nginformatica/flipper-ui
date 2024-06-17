import React from 'react'
import type { ReactNode } from 'react'
import MuiIconButton from '@mui/material/IconButton'

export type DataTableActionProps = {
    label: string
    children: ReactNode
    color?: 'primary' | 'secondary' | 'inherit' | 'default'
    onClick(): void
}

export const DataTableAction = ({
    label,
    children,
    color = 'default',
    onClick
}: DataTableActionProps) => (
    <MuiIconButton
        size='small'
        color={color}
        aria-label={label}
        onClick={onClick}>
        {children}
    </MuiIconButton>
)
