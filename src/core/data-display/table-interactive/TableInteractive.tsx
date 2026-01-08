import React from 'react'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import Box from '@mui/material/Box'
import type { TableProps } from '@mui/material/Table'
import Table from '../table'
import TableBody from '../table/table-body'
import TableFooter from '../table/table-footer'
import TablePagination from '../table/table-pagination'
import TableRow from '../table/table-row'
import { TableDialogPreferences } from './TableDialogPreferences'
import { TableInteractiveHead } from './TableInteractiveHead'
import { TableInteractiveHeader } from './TableInteractiveHeader'
import { TablePaginationActions } from './TablePaginationActions'
import { theme } from '@/theme'

const { gray } = theme.colors

export enum Direction {
    ASCENDENT = 'asc',
    DESCENDENT = 'desc'
}

export interface ITableInteractive extends Omit<TableProps, 'children'> {
    name: string
    page?: number
    open?: boolean
    total?: number
    fixed?: boolean
    active?: string
    headers: {
        name: string
        label: string
        show: boolean
        width?: string
        sortable?: boolean
    }[]
    className?: string
    paginated?: boolean
    rowsPerPage?: number
    direction?: Direction
    isInteractive?: boolean
    isCollapsible?: boolean
    visibleColumns?: string[]
    columnsTemporary?: string[]
    rowsPerPageOptions?: number[]
    headerActions?: JSX.Element | undefined
    valuesInvoices?: Record<string, unknown>[]
    onCancel?: () => void
    onConfirm?: () => void
    handleOpen?: () => void
    onSort?(id: string): void
    setPage?: Dispatch<SetStateAction<number>>
    setRowsPerPage?: Dispatch<SetStateAction<number>>
    children?: (item: Record<string, unknown>) => ReactNode
    rowsContent: () => JSX.Element | JSX.Element[] | undefined
    setColumnsTemporary?: (value: SetStateAction<string[]>) => void
}

export const TableInteractive = (props: ITableInteractive) => {
    const handlePageCount = () => {
        if (props.valuesInvoices) {
            return Number(props.valuesInvoices.length)
        }

        return Number(props.total) || 0
    }

    const count = handlePageCount()
    const rowsPerPage = props.rowsPerPage ?? 10
    const maxPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1)
    const page = Math.min(props.page ?? 0, maxPage)

    return (
        <>
            {props.isInteractive && (
                <TableInteractiveHeader
                    headerActions={props.headerActions}
                    handleOpen={props.handleOpen}
                />
            )}

            <Box sx={{ overflow: 'auto' }}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'table',
                        tableLayout: 'fixed'
                    }}>
                    <Table
                        name={props.name}
                        id={'list-' + props.name}
                        className={props.className}
                        style={{
                            border: props.isInteractive
                                ? 'none !important'
                                : `1px solid ${gray[300]}`
                        }}
                        sx={{
                            ...props.sx
                        }}>
                        <TableInteractiveHead
                            fixed={props.fixed}
                            active={props.active}
                            headers={props.headers}
                            children={props.children}
                            direction={props.direction}
                            isCollapsible={props.isCollapsible}
                            visibleColumns={props.visibleColumns || []}
                            onSort={props.onSort}
                        />

                        <TableBody>{props.rowsContent()}</TableBody>

                        {props.paginated && (
                            <TableFooter>
                                <TableRow className='no-hover'>
                                    <TablePagination
                                        page={page}
                                        count={count}
                                        rowsPerPage={props.rowsPerPage ?? 10}
                                        rowsPerPageOptions={
                                            props.rowsPerPageOptions ?? [
                                                10, 25, 50, 100
                                            ]
                                        }
                                        ActionsComponent={
                                            TablePaginationActions
                                        }
                                        onPageChange={(_, page: number) => {
                                            props.setPage?.(page)
                                        }}
                                        onRowsPerPageChange={event => {
                                            props.setPage?.(0)
                                            props.setRowsPerPage?.(
                                                parseInt(event.target.value, 10)
                                            )
                                        }}
                                    />
                                </TableRow>
                            </TableFooter>
                        )}
                    </Table>
                </Box>
            </Box>

            <TableDialogPreferences
                open={props.open}
                headers={props.headers}
                tableIdentifier={props.name}
                columnsTemporary={props.columnsTemporary}
                setColumnsTemporary={props.setColumnsTemporary}
                onCancel={props.onCancel}
                onConfirm={props.onConfirm}
            />
        </>
    )
}
