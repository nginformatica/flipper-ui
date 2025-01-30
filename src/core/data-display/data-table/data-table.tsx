import React, { useMemo, useState, useRef, useEffect } from 'react'
import type {
    MouseEvent,
    MutableRefObject,
    CSSProperties,
    ReactNode,
    Dispatch,
    SetStateAction
} from 'react'
import MuiCheckbox from '@mui/material/Checkbox'
import MuiPaper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import MuiTableBody from '@mui/material/TableBody'
import MuiTableCell from '@mui/material/TableCell'
import MuiTableContainer from '@mui/material/TableContainer'
import MuiTableFooter from '@mui/material/TableFooter'
import MuiTableHead from '@mui/material/TableHead'
import MuiTablePagination from '@mui/material/TablePagination'
import MuiTableRow from '@mui/material/TableRow'
import { equals, last } from 'ramda'
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
    rowViews?: Record<keyof V, RowViewComponent<D>>
    size?: 'small' | 'medium'
    renderEmptyRows?: boolean
    hideSelect?: boolean
    checkbox?: boolean
    checkboxProps?: {
        checkRow?: boolean[]
        checkAllRows?: boolean
        setSelectedRow?: Dispatch<SetStateAction<boolean[]>>
        setSelectedAllRows?: Dispatch<SetStateAction<boolean>>
    }
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
    const {
        data = [],
        columns,
        rowViews,
        onRowClick,
        controllerRef,
        noHeader,
        bodyRowStyle,
        headRowStyle,
        errors,
        componentForEmpty,
        size,
        renderEmptyRows,
        hideSelect,
        bodyStyle,
        headStyle,
        hiddenRowHeight,
        hidden,
        checkbox,
        checkboxProps
    } = props

    const pagination = { ...defaultPagination, ...props.pagination }

    const controller = useRef<DataTableController<D, V>>()

    const [page, setPage] = useState(0)
    const [rows, setRows] = useState<D[]>([])
    const [newRow, setNewRow] = useState<PartialData<D> | undefined>()
    const [rowsPerPage, setRowsPerPage] = useState(pagination.rowsPerPage)

    useEffect(() => {
        const newRows = pagination.disabled
            ? data
            : sliceData(
                  data,
                  page,
                  newRow && page === 0 ? rowsPerPage - 1 : rowsPerPage
              )

        if (!equals(rows, newRows)) {
            setRows(newRows)
        }
    }, [data, page, newRow, rowsPerPage, pagination.disabled])

    const {
        getRowState,
        setEditableRowState,
        setRowState,
        pushRowView,
        popRowView
    } = useRowsState<D, V>(rows, hidden, newRow)

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
                setNewRow(undefined)
            },
            addRow: (partial: PartialData<D>) => {
                setPage(0)
                setNewRow(partial)
            },
            getEditedRowData: (id: string) =>
                ({ id, ...getRowState(id)?.editableState }) as PartialData<D>,
            getRowData: (id: string) => {
                const raw = getRowState(id)

                return {
                    edited: { id, ...raw?.editableState } as PartialData<D>,
                    current: raw?.currentState
                }
            },
            pushRowView,
            popRowView
        }

        controller.current = nextController

        if (controllerRef) {
            controllerRef.current = nextController
        }
    }, [setRowState, pushRowView, popRowView, getRowState, controllerRef])

    const handleSelectCheckbox = (
        index: number,
        setSelected: Dispatch<SetStateAction<boolean[]>>,
        setSelectedAll: Dispatch<SetStateAction<boolean>>
    ) => {
        setSelected(state => {
            const newState = state.map((row, i: number) =>
                index === i ? !row : row
            )

            if (newState.includes(false)) {
                setSelectedAll(false)
            }

            if (newState.every(item => item === true)) {
                setSelectedAll(true)
            }

            return newState
        })
    }

    const handleSelectAllCheckbox = (
        setSelected: Dispatch<SetStateAction<boolean[]>>,
        setSelectedAll: Dispatch<SetStateAction<boolean>>
    ) => {
        setSelectedAll(selectedAll => !selectedAll)
        setSelected(state =>
            state.map(() =>
                checkboxProps !== undefined
                    ? !checkboxProps.checkAllRows
                    : false
            )
        )
    }

    const rowsList = useMemo(
        () =>
            rows.map((row, index) => {
                const rowState = getRowState(row.id)
                const lastView = rowState?.stackView && last(rowState.stackView)
                const view = lastView && rowViews?.[lastView]
                const primaryView = hidden ? RowMode.Hide : RowMode.View
                const mode = rowState?.mode || primaryView

                return (
                    <MuiTableRow
                        key={row.id}
                        data-id={row.id}
                        style={bodyRowStyle}
                        onClick={event => onRowClick?.(event, row)}>
                        {checkbox && (
                            <MuiTableCell padding='checkbox'>
                                <MuiCheckbox
                                    checked={
                                        checkboxProps?.checkRow?.[index] !==
                                        undefined
                                            ? checkboxProps.checkRow[index]
                                            : false
                                    }
                                    onChange={() => {
                                        if (
                                            checkboxProps?.setSelectedRow &&
                                            checkboxProps.setSelectedAllRows
                                        ) {
                                            handleSelectCheckbox(
                                                index,
                                                checkboxProps.setSelectedRow,
                                                checkboxProps.setSelectedAllRows
                                            )
                                        }
                                    }}
                                />
                            </MuiTableCell>
                        )}
                        {view ? (
                            view({ data: row })
                        ) : (
                            <StatefulRow
                                columns={columns}
                                data={row}
                                errors={errors}
                                mode={mode}
                                isHidden={hidden}
                                onUpdate={setEditableRowState(row.id)}
                            />
                        )}
                    </MuiTableRow>
                )
            }),
        [
            rows,
            getRowState,
            rowViews,
            hidden,
            bodyRowStyle,
            checkbox,
            columns,
            errors,
            setEditableRowState,
            onRowClick,
            checkboxProps
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
        : rowsPerPage - currentRowsNumber

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
                showLastButton: pagination.showLastButton
            }),
        [pagination.showFirstButton, pagination.showLastButton]
    )

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

    return (
        <MuiTableContainer role='data-table-container' component={MuiPaper}>
            <MuiTable size={size}>
                {!noHeader && (
                    <MuiTableHead style={headStyle}>
                        <MuiTableRow style={headRowStyle}>
                            {checkbox && (
                                <MuiTableCell padding='checkbox'>
                                    <MuiCheckbox
                                        checked={
                                            checkboxProps?.checkAllRows !==
                                            undefined
                                                ? checkboxProps.checkAllRows
                                                : false
                                        }
                                        onChange={() => {
                                            if (
                                                checkboxProps?.setSelectedRow &&
                                                checkboxProps.setSelectedAllRows
                                            ) {
                                                handleSelectAllCheckbox(
                                                    checkboxProps.setSelectedRow,
                                                    checkboxProps.setSelectedAllRows
                                                )
                                            }
                                        }}
                                    />
                                </MuiTableCell>
                            )}
                            {columnsList}
                        </MuiTableRow>
                    </MuiTableHead>
                )}
                <MuiTableBody style={bodyStyle}>
                    {currentRowsNumber === 0 ? componentForEmpty : rowsElements}
                    {hiddenRowFiller}
                    {renderEmptyRows && emptyRows > 0 && (
                        <MuiTableRow
                            style={{
                                height: (size === 'small' ? 33 : 53) * emptyRows
                            }}>
                            <MuiTableCell colSpan={columns.length} />
                        </MuiTableRow>
                    )}
                </MuiTableBody>
                {!pagination.disabled && (
                    <MuiTableFooter>
                        <MuiTableRow>
                            <MuiTablePagination
                                count={data.length}
                                page={page}
                                rowsPerPageOptions={
                                    pagination.rowsPerPageOptions
                                }
                                rowsPerPage={rowsPerPage}
                                labelRowsPerPage={
                                    hideSelect
                                        ? ''
                                        : pagination.labelRowsPerPage
                                }
                                labelDisplayedRows={
                                    pagination.labelDisplayedRows
                                }
                                slotProps={{
                                    select: {
                                        style: hideSelect
                                            ? { display: 'none' }
                                            : {}
                                    }
                                }}
                                ActionsComponent={paginationActionsComponent}
                                onPageChange={(_, page) => {
                                    setPage(page)
                                }}
                                onRowsPerPageChange={event => {
                                    setRowsPerPage(
                                        parseInt(event.target.value, 10)
                                    )
                                    setPage(0)
                                }}
                            />
                        </MuiTableRow>
                    </MuiTableFooter>
                )}
            </MuiTable>
        </MuiTableContainer>
    )
}

export default DataTable
