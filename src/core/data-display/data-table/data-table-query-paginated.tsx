import React, { useMemo, useState, useRef, useEffect } from 'react'
import type {
    MouseEvent,
    MutableRefObject,
    CSSProperties,
    ReactNode
} from 'react'
import { Box } from '@mui/material'
import MuiPaper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import MuiTableBody from '@mui/material/TableBody'
import MuiTableCell from '@mui/material/TableCell'
import MuiTableContainer from '@mui/material/TableContainer'
import MuiTableFooter from '@mui/material/TableFooter'
import MuiTableHead from '@mui/material/TableHead'
import MuiTablePagination from '@mui/material/TablePagination'
import MuiTableRow from '@mui/material/TableRow'
import { last } from 'ramda'
import type {
    ColumnSpec,
    Data,
    DataTableController,
    Errors,
    PaginationOptions,
    RowViewComponent,
    StackView,
    PartialData
} from './types'
import { makeDataTablePaginationActions } from './data-table-pagination-actions'
import { StatefulRow, NewRow } from './rows'
import { RowMode } from './types'
import { useRowsState } from './use-rows-state'

export type DataTableProps<
    D extends Data,
    V extends StackView = Record<string, unknown>
> = {
    data: D[]
    totalElements: number
    handleChangePage: (page: number) => void
    perPage: number
    handleChangePerPage: (value: number) => void
    page: number
    errors?: Errors<D>
    columns: ColumnSpec<D>[]
    noHeader?: boolean
    componentForEmpty?: ReactNode
    bodyStyle?: CSSProperties
    headStyle?: CSSProperties
    bodyRowStyle?: CSSProperties
    headRowStyle?: CSSProperties
    hiddenRowHeight?: number
    pagination?: Partial<PaginationOptions>
    controllerRef?: MutableRefObject<DataTableController<D, V> | undefined>
    hidden?: boolean
    className?: string
    responsive?: boolean
    rowViews?: Record<keyof V, RowViewComponent<D>>
    onRowClick?: (event: MouseEvent<HTMLTableRowElement>, rowData: D) => void
}

const defaultPagination: PaginationOptions = {
    rowsPerPage: 10,
    labelRowsPerPage: 'Linhas por página:',
    labelDisplayedRows: ({ from, to, count }) => {
        return `${from}-${to} de ${count !== -1 ? count : `mais que ${to}`}`
    },
    disabled: false,
    showFirstButton: false,
    showLastButton: false,
    clickable: true,
    rowsPerPageOptions: [5, 10, 25, 50]
}

export const DataTableQueryPaginated = <D extends Data, V extends StackView>(
    props: DataTableProps<D, V>
) => {
    const pagination = { ...defaultPagination, ...props.pagination }
    const {
        data,
        totalElements,
        handleChangePage,
        perPage,
        handleChangePerPage,
        columns,
        page,
        rowViews,
        onRowClick,
        controllerRef,
        noHeader,
        bodyRowStyle,
        headRowStyle,
        errors,
        componentForEmpty,
        bodyStyle,
        headStyle,
        hiddenRowHeight,
        hidden,
        className,
        responsive = false
    } = props

    const [newRow, setNewRow] = useState<PartialData<D> | undefined>()

    const rows = useMemo(() => {
        if (pagination.disabled) {
            return data
        }

        return data
    }, [pagination.disabled, data])

    const {
        getRowState,
        setEditableRowState,
        setRowState,
        pushRowView,
        popRowView
    } = useRowsState<D, V>(rows, hidden, newRow)

    const controller = useRef<DataTableController<D, V>>()

    useEffect(() => {
        const nextController: DataTableController<D, V> = {
            editRow: (id: string) => {
                setRowState(id, { mode: RowMode.Edit })
            },
            viewRow: (id: string) => {
                setRowState(id, { mode: RowMode.View })
                setNewRow(undefined)
            },
            hideRow: (id: string) => {
                setRowState(id, { mode: RowMode.Hide })
            },
            addRow: (partial: PartialData<D>) => {
                handleChangePerPage(0)
                setNewRow(partial)
            },
            getEditedRowData: (id: string) =>
                ({
                    id,
                    ...getRowState(id)?.editableState
                }) as PartialData<D>,
            getRowData: (id: string) => {
                const raw = getRowState(id)

                return {
                    edited: { id, ...raw?.editableState } as PartialData<D>,
                    current: raw?.currentState
                }
            },
            pushRowView,
            popRowView
        } as const

        controller.current = nextController

        if (controllerRef) {
            controllerRef.current = nextController
        }
    }, [
        setRowState,
        pushRowView,
        popRowView,
        getRowState,
        controllerRef,
        handleChangePerPage
    ])

    const rowsList = useMemo(
        () =>
            rows.map(row => {
                const rowState = getRowState(row.id)
                const lastView = rowState?.stackView && last(rowState.stackView)
                const view = lastView && rowViews?.[lastView]
                const mode = rowState?.mode || RowMode.View

                return (
                    <MuiTableRow
                        key={row.id}
                        data-id={row.id}
                        style={bodyRowStyle}
                        onClick={event => onRowClick?.(event, row)}>
                        {view ? (
                            view({ data: row })
                        ) : (
                            <StatefulRow
                                columns={columns}
                                data={row}
                                errors={errors}
                                mode={mode}
                                onUpdate={setEditableRowState(row.id)}
                            />
                        )}
                    </MuiTableRow>
                )
            }),
        [
            rows,
            getRowState,
            onRowClick,
            setEditableRowState,
            errors,
            rowViews,
            bodyRowStyle,
            columns
        ]
    )

    const columnsList = useMemo(
        () =>
            columns.map(column => (
                <MuiTableCell
                    key={column.title}
                    variant='head'
                    style={column.headerStyle}
                    align={column.align}>
                    {column.title}
                </MuiTableCell>
            )),
        [columns]
    )

    const currentRowsNumber = rows.length + (newRow ? 1 : 0)

    const hiddenRowsNumber = pagination.disabled
        ? 0
        : perPage - currentRowsNumber

    const hiddenRowFiller = hiddenRowsNumber !== 0 && (
        <MuiTableRow style={bodyRowStyle}>
            <MuiTableCell
                colSpan={columns.length}
                padding='none'
                style={{
                    height:
                        hiddenRowHeight &&
                        `${hiddenRowHeight * hiddenRowsNumber}px`
                }}
            />
        </MuiTableRow>
    )

    const rowsElements = (
        <>
            {newRow?.id && (
                <NewRow
                    data={newRow}
                    errors={errors}
                    columns={columns}
                    onUpdate={setEditableRowState(newRow.id)}
                />
            )}
            {rowsList}
        </>
    )

    const paginationActionsComponent = useMemo(
        () =>
            makeDataTablePaginationActions({
                showFirstButton: pagination.showFirstButton,
                showLastButton: pagination.showLastButton,
                clickable: !pagination.clickable
            }),
        [
            pagination.showFirstButton,
            pagination.showLastButton,
            pagination.clickable
        ]
    )

    const table = (
        <MuiTableContainer component={MuiPaper}>
            <MuiTable className={className}>
                {!noHeader && (
                    <MuiTableHead style={headStyle}>
                        <MuiTableRow style={headRowStyle}>
                            {columnsList}
                        </MuiTableRow>
                    </MuiTableHead>
                )}
                <MuiTableBody style={bodyStyle}>
                    {currentRowsNumber === 0 || !pagination.clickable
                        ? componentForEmpty
                        : rowsElements}
                    {hiddenRowFiller}
                </MuiTableBody>
                {!pagination.disabled && (
                    <MuiTableFooter>
                        <MuiTableRow className='no-hover'>
                            <MuiTablePagination
                                count={totalElements}
                                page={page}
                                rowsPerPageOptions={
                                    pagination.rowsPerPageOptions
                                }
                                rowsPerPage={perPage}
                                labelRowsPerPage={pagination.labelRowsPerPage}
                                labelDisplayedRows={
                                    pagination.labelDisplayedRows
                                }
                                ActionsComponent={paginationActionsComponent}
                                onPageChange={(_, page) => {
                                    handleChangePage(page)
                                }}
                                onRowsPerPageChange={event => {
                                    handleChangePerPage(
                                        parseInt(event.target.value, 10)
                                    )
                                }}
                            />
                        </MuiTableRow>
                    </MuiTableFooter>
                )}
            </MuiTable>
        </MuiTableContainer>
    )

    return responsive ? (
        <Box sx={{ overflow: 'auto' }}>
            <Box
                sx={{
                    width: '100%',
                    display: 'table',
                    tableLayout: 'fixed'
                }}>
                {table}
            </Box>
        </Box>
    ) : (
        table
    )
}

export default DataTableQueryPaginated
