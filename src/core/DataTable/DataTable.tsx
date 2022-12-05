import React, {
    useMemo,
    useState,
    useRef,
    useEffect,
    MutableRefObject,
    CSSProperties
} from 'react'
import { last } from 'ramda'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TablePagination from '@material-ui/core/TablePagination'
import TableFooter from '@material-ui/core/TableFooter'
import {
    ColumnSpec,
    Data,
    DataTableController,
    Errors,
    PaginationOptions,
    RowMode,
    RowViewComponent,
    StackView,
    PartialData
} from './types'
import { useRowsState } from './useRowsState'
import { StatefulRow, NewRow } from './Rows'
import { makeDataTablePaginationActions } from './DataTablePaginationActions'

export type DataTableProps<D extends Data, V extends StackView = {}> = {
    /**
     * The data to be shown in the table
     */
    data: D[]
    /**
     * Errors as an object where the key is the ID of the row and the value is
     * a Set with the fields of error
     */
    errors?: Errors<D>
    /**
     * The columns specification
     */
    columns: ColumnSpec<D>[]
    /**
     * Hide the table header
     */
    noHeader?: boolean
    /**
     * Component to show when there are no data
     */
    componentForEmpty?: React.ReactNode
    /**
     * Custom style to be applied to the table body
     */
    bodyStyle?: CSSProperties
    /**
     * Custom style to be applied to the table head
     */
    headStyle?: CSSProperties
    /**
     * Custom style to be applied to all rows of the table body
     */
    bodyRowStyle?: CSSProperties
    /**
     * Custom style to be applied to all rows of the table head
     */
    headRowStyle?: CSSProperties
    /**
     * Height of a hidden row, when you need to have some blank space in case
     * you fill in the pagination.rowsPerPage
     */
    hiddenRowHeight?: number
    /**
     * The pagination configuration
     */
    pagination?: Partial<PaginationOptions>
    /**
     * A React MutableRefObject for the row controller
     */
    controllerRef?: MutableRefObject<DataTableController<D, V> | undefined>
    /**
     * Custom rowViews used as a Stac
     */
    rowViews?: Record<keyof V, RowViewComponent<D>>
    onRowClick?: (
        event: React.MouseEvent<HTMLTableRowElement>,
        rowData: D
    ) => void
}

const defaultPagination: PaginationOptions = {
    rowsPerPage: 10,
    labelRowsPerPage: 'Rows per page:',
    labelDisplayedRows: ({ from, to, count }) => {
        return `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`
    },
    disabled: false,
    showFirstButton: false,
    showLastButton: false,
    rowsPerPageOptions: [5, 10, 20],
    clickable: false
}

const sliceData = <D,>(data: D[], page: number, rowsPerPage: number) => {
    const start = page * rowsPerPage
    const end = start + rowsPerPage

    return data.slice(start, end)
}

export const DataTable = <D extends Data, V extends StackView>(
    props: DataTableProps<D, V>
) => {
    const [page, setPage] = useState(0)
    const pagination = { ...defaultPagination, ...props.pagination }
    const [rowsPerPage, setRowsPerPage] = useState(pagination.rowsPerPage)
    const {
        data,
        columns,
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
        hiddenRowHeight
    } = props

    const [newRow, setNewRow] = useState<PartialData<D> | undefined>()

    const rows = useMemo(() => {
        if (pagination.disabled) {
            return data
        }
        // this case is not good for the useRowsMode hook
        if (newRow && page === 0) {
            return sliceData(data, page, rowsPerPage - 1)
        }

        return sliceData(data, page, rowsPerPage)
    }, [pagination.disabled, data, rowsPerPage, page, newRow])

    const {
        getRowState,
        setEditableRowState,
        setRowState,
        pushRowView,
        popRowView
    } = useRowsState<D, V>(rows, newRow)

    const controller = useRef<DataTableController<D, V>>()

    useEffect(() => {
        const nextController: DataTableController<D, V> = {
            editRow: id => {
                setRowState(id, { mode: RowMode.Edit })
            },
            viewRow: id => {
                setRowState(id, { mode: RowMode.View })
                setNewRow(undefined)
            },
            addRow: partial => {
                setPage(0)
                setNewRow(partial)
            },
            getEditedRowData: id => ({ id, ...getRowState(id)?.editableState }),
            getRowData: id => {
                const raw = getRowState(id)

                return {
                    edited: { id, ...raw?.editableState },
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
    }, [setRowState, pushRowView, popRowView, getRowState, controllerRef])

    const rowsList = useMemo(
        () =>
            rows.map(row => {
                const rowState = getRowState(row.id)
                const lastView = rowState?.stackView && last(rowState.stackView)
                const view = lastView && rowViews?.[lastView]
                const mode = rowState?.mode || RowMode.View

                return (
                    <TableRow
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
                    </TableRow>
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
                <TableCell
                    key={column.title}
                    variant='head'
                    style={column.headerStyle}
                    align={column.align}>
                    {column.title}
                </TableCell>
            )),
        [columns]
    )

    const currentRowsNumber = rows.length + (newRow ? 1 : 0)

    const hiddenRowsNumber = pagination.disabled
        ? 0
        : rowsPerPage - currentRowsNumber

    const hiddenRowFiller = hiddenRowsNumber !== 0 && (
        <TableRow style={bodyRowStyle}>
            <TableCell
                colSpan={columns.length}
                padding='none'
                style={{
                    height:
                        hiddenRowHeight &&
                        `${hiddenRowHeight * hiddenRowsNumber}px`
                }}></TableCell>
        </TableRow>
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
                showLastButton: pagination.showLastButton
            }),
        [pagination.showFirstButton, pagination.showLastButton]
    )

    return (
        <TableContainer component={Paper}>
            <Table>
                {!noHeader && (
                    <TableHead style={headStyle}>
                        <TableRow style={headRowStyle}>{columnsList}</TableRow>
                    </TableHead>
                )}
                <TableBody style={bodyStyle}>
                    {currentRowsNumber === 0 ? componentForEmpty : rowsElements}
                    {hiddenRowFiller}
                </TableBody>
                {!pagination.disabled && (
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                count={data.length}
                                page={page}
                                rowsPerPageOptions={
                                    pagination.rowsPerPageOptions
                                }
                                rowsPerPage={rowsPerPage}
                                labelRowsPerPage={pagination.labelRowsPerPage}
                                labelDisplayedRows={
                                    pagination.labelDisplayedRows
                                }
                                onChangePage={(_, page) => {
                                    setPage(page)
                                }}
                                onChangeRowsPerPage={event => {
                                    setRowsPerPage(
                                        parseInt(event.target.value, 10)
                                    )
                                    setPage(0)
                                }}
                                ActionsComponent={paginationActionsComponent}
                            />
                        </TableRow>
                    </TableFooter>
                )}
            </Table>
        </TableContainer>
    )
}

export default DataTable
