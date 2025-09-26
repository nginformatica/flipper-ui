import React, { useState } from 'react'
import { Button } from '@mui/material'
import type { ITableInteractive } from '../table-interactive/TableInteractive'
import type { Meta, StoryObj } from '@storybook/react'
import TextField from '@/core/inputs/text-field'
import TableCell from '../table/table-cell'
import TableRow from '../table/table-row'
import { TableInteractive } from '../table-interactive/TableInteractive'
import {
    getInitialColumns,
    getOrderedVisibleColumns,
    setVisibleColumns
} from './utils'

const meta: Meta<typeof TableInteractive> = {
    title: 'DataDisplay/Table Interactive',
    component: TableInteractive,
    argTypes: {
        name: {
            control: 'text',
            description: 'The table name or identifier.'
        },
        page: {
            control: 'number',
            description: 'Current page number.'
        },
        open: {
            control: 'boolean',
            description: 'Whether the dialog is open.'
        },
        total: {
            control: 'number',
            description: 'Total number of items to render on the pagination.'
        },
        active: {
            control: 'text',
            description: 'Currently active sorted column.'
        },
        headers: {
            control: false,
            description: 'Array of header objects with name and label.'
        },
        paginated: {
            control: 'boolean',
            description: 'Whether pagination footer is visible.'
        },
        rowsPerPage: {
            control: 'number',
            description: 'Number of rows displayed per page.'
        },
        direction: {
            control: 'radio',
            options: ['asc', 'desc'],
            description: 'Sorting direction.'
        },
        isInteractive: {
            control: 'boolean',
            description: 'Whether the table is interactive.'
        },
        isCollapsible: {
            control: 'boolean',
            description: 'Whether the table can be collapsed.'
        },
        visibleColumns: {
            control: false,
            description: 'List of currently visible column names.'
        },
        columnsTemporary: {
            control: false,
            description: 'Temporary state for visible columns.'
        },
        valuesInvoices: {
            control: false,
            description: 'Table specific data.'
        },
        headerActions: {
            control: false,
            description: 'To add extra elements with the settings icon.'
        },
        onCancel: {
            control: false,
            description: 'Callback triggered on cancel.'
        },
        onConfirm: {
            control: false,
            description: 'Callback triggered on confirm.'
        },
        handleOpen: {
            control: false,
            description: 'Function to handle opening the dialog.'
        },
        onSort: {
            control: false,
            description: 'Callback triggered when a column is sorted.'
        },
        setPage: {
            control: false,
            description: 'State setter for the current page.'
        },
        setRowsPerPage: {
            control: false,
            description: 'State setter for number of rows per page.'
        },
        children: {
            control: false,
            description: 'To verify the necessity to adjust the header length.'
        },
        setColumnsTemporary: {
            control: false,
            description: 'Setter for temporary visible columns state.'
        },
        rowsContent: {
            control: false,
            description: 'The table body content.'
        }
    }
}

export default meta

type Story = StoryObj<typeof TableInteractive>

const HEADERS = [
    { name: 'name', label: 'Nome', width: '300px', show: true, sortable: true },
    { name: 'email', label: 'E-mail', show: true, sortable: false },
    { name: 'cel', label: 'Celular', show: false, sortable: false }
]

const TABLE_DATA = [
    { name: 'Name 1', email: 'Email 1', cel: 'Celular1' },
    { name: 'Name 2', email: 'Email 2', cel: 'Celular2' },
    { name: 'Name 3', email: 'Email 3', cel: 'Celular3' },
    { name: 'Name 4', email: 'Email 4', cel: 'Celular4' },
    { name: 'Name 5', email: 'Email 5', cel: 'Celular5' }
]

const InteractiveTable = (args: ITableInteractive) => {
    const [open, setOpen] = useState<boolean>(false)
    const [columns, setColumns] = useState<string[]>(
        getInitialColumns(HEADERS, 'infos')
    )
    const [columnsTemporary, setColumnsTemporary] = useState<string[]>(columns)

    const orderedVisibleColumns = getOrderedVisibleColumns(HEADERS, columns)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleCancel = () => {
        setOpen(false)

        setColumnsTemporary(columns)
    }

    const handleConfirmColumns = () => {
        setColumns(columnsTemporary)
        setVisibleColumns(columnsTemporary, 'infos')

        setOpen(false)
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

    return (
        <>
            <TableInteractive
                {...args}
                fixed
                open={open}
                active='name'
                headers={HEADERS}
                visibleColumns={columns}
                columnsTemporary={columnsTemporary}
                headerActions={
                    <>
                        <TextField placeholder='Pesquisar' />
                        <Button fullWidth variant='contained'>
                            Aplicar Filtros
                        </Button>
                    </>
                }
                handleOpen={handleOpen}
                rowsContent={handleContent}
                setColumnsTemporary={setColumnsTemporary}
                onCancel={handleCancel}
                onConfirm={handleConfirmColumns}
            />
        </>
    )
}

export const interactiveTable: Story = {
    render: ({ ...args }) => <InteractiveTable {...args} />,
    args: {
        isInteractive: true,
        name: 'info'
    }
}
