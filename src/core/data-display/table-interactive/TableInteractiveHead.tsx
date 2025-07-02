import React from 'react'
import TableCell from '../table/table-cell'
import TableHead from '../table/table-head'
import TableRow from '../table/table-row'
import { type ITableInteractive } from './TableInteractive'
import { generateHeader, getVisibleColumns } from './utils'

export type ITableInteractiveHead = Pick<
    ITableInteractive,
    | 'headers'
    | 'visibleColumns'
    | 'onSort'
    | 'active'
    | 'direction'
    | 'children'
    | 'isCollapsible'
>

export const TableInteractiveHead = (props: ITableInteractiveHead) => {
    const visibleColumns = getVisibleColumns(
        props.headers,
        props.visibleColumns
    )

    const handleSort = (name: string) => {
        props.onSort?.(name)
    }

    return (
        <TableHead
            active={props.active}
            direction={props.direction}
            onSort={props.onSort && handleSort}>
            <TableRow>
                {props.headers.map(header =>
                    generateHeader(header, visibleColumns)
                )}
                {(props.children || props.isCollapsible) && <TableCell />}
            </TableRow>
        </TableHead>
    )
}
