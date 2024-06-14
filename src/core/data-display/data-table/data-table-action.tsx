import React from 'react'
import type { ReactNode } from 'react'
import IconButton from '@mui/material/IconButton'

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
    <IconButton size='small' color={color} aria-label={label} onClick={onClick}>
        {children}
    </IconButton>
)
