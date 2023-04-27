import MuiTableCell, {
    TableCellProps as MuiTableCellProps
} from '@material-ui/core/TableCell'
import MuiTableSortLabel from '@material-ui/core/TableSortLabel'
import React, { useContext } from 'react'
import { DefaultProps } from '../../types'
import { Omit } from 'ramda'
import { SortContext } from './table-head'

interface TableCellProps extends DefaultProps {
    numeric?: boolean
    variant?: 'head' | 'body' | 'footer'
    spacing?: MuiTableCellProps['padding']
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
}: Omit<MuiTableCellProps, 'padding'> & TableCellProps) => {
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
                    onClick={handleSort}
                    active={otherProps.name === active}
                    direction={direction}>
                    {children}
                </MuiTableSortLabel>
            ) : (
                children
            )}
        </MuiTableCell>
    )
}

export default TableCell
