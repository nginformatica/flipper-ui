import React, { useContext } from 'react'
import MuiTableCell from '@mui/material/TableCell'
import MuiTableSortLabel from '@mui/material/TableSortLabel'
import type { DefaultProps } from '../../types'
import type { TableCellProps } from '@mui/material/TableCell'
import { SortContext } from './table-head'

export interface ITableCellProps
    extends DefaultProps, Omit<TableCellProps, 'padding'> {
    numeric?: boolean
    sortable?: boolean
    padding?: number | string
    variant?: 'head' | 'body' | 'footer'
    spacing?: 'normal' | 'checkbox' | 'none'
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
}

const TableCell = ({
    style,
    margin,
    padding,
    children,
    spacing,
    sortable,
    ...otherProps
}: ITableCellProps) => {
    const { onSort, active, direction } = useContext(SortContext)

    const handleSort = () => {
        onSort?.(otherProps.name || '')
    }

    return (
        <MuiTableCell
            {...otherProps}
            padding={spacing}
            style={{ padding, margin, ...style }}>
            {(sortable ?? onSort) ? (
                <MuiTableSortLabel
                    direction={direction}
                    active={otherProps.name === active}
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
