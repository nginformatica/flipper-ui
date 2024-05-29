import React, { useContext } from 'react'
import MuiTableCell from '@material-ui/core/TableCell'
import MuiTableSortLabel from '@material-ui/core/TableSortLabel'
import type { DefaultProps } from '../../types'
import type { TableCellProps as MuiTableProps } from '@material-ui/core/TableCell'
import { SortContext } from './table-head'

export interface TableCellProps extends DefaultProps {
    numeric?: boolean
    variant?: 'head' | 'body' | 'footer'
    spacing?: MuiTableProps['padding']
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
}: Omit<MuiTableProps, 'padding'> & TableCellProps) => {
    const { onSort, active, direction } = useContext(SortContext)

    const handleSort = () => {
        if (onSort) {
            onSort(otherProps.name || '')
        }
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
