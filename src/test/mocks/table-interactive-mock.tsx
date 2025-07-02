import React, { useState } from 'react'
import { Button, TextField, TableRow, TableCell } from '@mui/material'
import type { ITableInteractive } from '@/core/data-display/table-interactive/TableInteractive'
import {
    Direction,
    TableInteractive
} from '@/core/data-display/table-interactive/TableInteractive'
import {
    getInitialColumns,
    getOrderedVisibleColumns
} from '@/core/data-display/table-interactive/utils'

interface TableInteractiveWrapperProps extends Partial<ITableInteractive> {
    initialArgs?: Partial<ITableInteractive>
    onConfirmMock?: jest.Mock
    onCancelMock?: jest.Mock
    setPageMock?: jest.Mock
    setRowsPerPageMock?: jest.Mock
    setVisibleColumnsMock?: jest.Mock
}

export const HEADERS = [
    { name: 'name', label: 'Nome', show: true },
    { name: 'email', label: 'E-mail', show: true },
    { name: 'cel', label: 'Celular', show: false }
]

export const TABLE_DATA = [
    { name: 'Name 1', email: 'Email 1', cel: 'Celular1' },
    { name: 'Name 2', email: 'Email 2', cel: 'Celular2' },
    { name: 'Name 3', email: 'Name 3', cel: 'Celular3' },
    { name: 'Name 4', email: 'Email 4', cel: 'Celular4' },
    { name: 'Name 5', email: 'Email 5', cel: 'Celular5' }
]

export const InteractiveTableWrapper = ({
    initialArgs,
    onConfirmMock,
    onCancelMock,
    setVisibleColumnsMock,
    setPageMock,
    setRowsPerPageMock,
    ...props
}: TableInteractiveWrapperProps) => {
    const [open, setOpen] = useState<boolean>(initialArgs?.open ?? false)
    const [columns, setColumns] = useState<string[]>(
        getInitialColumns(HEADERS, 'test')
    )
    const [columnsTemporary, setColumnsTemporary] = useState<string[]>(columns)

    const orderedVisibleColumns = getOrderedVisibleColumns(HEADERS, columns)

    const mockSetPage = setPageMock ?? jest.fn()
    const mockSetRowsPerPage = setRowsPerPageMock ?? jest.fn()
    const mockSetVisibleColumns = setVisibleColumnsMock ?? jest.fn()

    const handleOpen = () => {
        setOpen(true)

        if (initialArgs?.handleOpen) initialArgs.handleOpen()
    }

    const handleCancel = () => {
        setOpen(false)
        setColumnsTemporary(columns)

        if (initialArgs?.onCancel) initialArgs.onCancel()

        if (onCancelMock) onCancelMock()
    }

    const handleConfirmColumns = () => {
        setOpen(false)
        setColumns(columnsTemporary)
        mockSetVisibleColumns(columnsTemporary, 'infos')

        if (initialArgs?.onConfirm) initialArgs.onConfirm()

        if (onConfirmMock) onConfirmMock()
    }

    const handleContent = () => {
        return TABLE_DATA.map((row, i) => (
            <TableRow key={i}>
                {orderedVisibleColumns.map((col, j) => (
                    <TableCell key={j}>
                        {row[col as keyof typeof row]}
                    </TableCell>
                ))}
            </TableRow>
        ))
    }

    const defaultTableInteractiveProps: ITableInteractive = {
        name: 'test-table',
        page: 0,
        open: open,
        rowsPerPage: 10,
        paginated: true,
        isInteractive: true,
        isCollapsible: false,
        headers: HEADERS,
        visibleColumns: columns,
        total: TABLE_DATA.length,
        direction: Direction.ASCENDENT,
        columnsTemporary: columnsTemporary,
        headerActions: (
            <>
                <TextField placeholder='Pesquisar' />
                <Button fullWidth variant='contained'>
                    Aplicar Filtros
                </Button>
            </>
        ),
        handleOpen: handleOpen,
        rowsContent: handleContent,
        setColumnsTemporary: setColumnsTemporary,
        onCancel: handleCancel,
        onConfirm: handleConfirmColumns,
        onSort: jest.fn(),
        setPage: mockSetPage,
        setRowsPerPage: mockSetRowsPerPage,
        ...initialArgs
    }

    return <TableInteractive {...defaultTableInteractiveProps} {...props} />
}
