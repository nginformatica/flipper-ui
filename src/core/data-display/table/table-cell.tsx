import React, { useContext } from 'react'
import MuiTableCell from '@mui/material/TableCell'
import MuiTableSortLabel from '@mui/material/TableSortLabel'
import type { DefaultProps } from '../../types'
import type { TableCellProps } from '@mui/material/TableCell'
import { SortContext } from './table-head'

export interface ITableCellProps
    extends DefaultProps,
        Omit<TableCellProps, 'padding'> {
    numeric?: boolean
    variant?: 'head' | 'body' | 'footer'
    spacing?: 'normal' | 'checkbox' | 'none'
    padding?: number | string
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

const TableCell = ({
    style,
    margin,
    padding,
    children,
    spacing,
    ...otherProps
}: ITableCellProps) => {
    const { onSort, active, direction } = useContext(SortContext)

    const handleSort = () => {
        onSort?.(otherProps.name || '')
    }

    return (
        <MuiTableCell
            {...otherProps}
            style={{ padding, margin, ...style }}
            padding={spacing}>
            {onSort ? (
                <MuiTableSortLabel
                    active={otherProps.name === active}
                    direction={direction}
                    onClick={handleSort}>
                    {children}
                </MuiTableSortLabel>
            ) : (
                children
            )}
        </MuiTableCell>
    )
}

export default TableCell
