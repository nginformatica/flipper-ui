import React from 'react'
import MuiTable from '@mui/material/Table'
import type { DefaultProps } from '../../types'
import type { TableProps } from '@mui/material/Table'
import { theme } from '@/theme'

const { grays } = theme.colors

export interface ITableProps extends DefaultProps, Omit<TableProps, 'padding'> {
    spacing?: 'normal' | 'checkbox' | 'none'
}

const Table = ({
    style,
    margin,
    padding,
    spacing,
    children,
    ...otherProps
}: ITableProps) => (
    <MuiTable
        {...otherProps}
        padding={spacing}
        style={{
            border: `1px solid ${grays.g6}`,
            padding,
            margin,
            ...style
        }}>
        {children}
    </MuiTable>
)

export default Table
