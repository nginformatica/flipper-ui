import React, { act } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import format from 'date-fns/format'
import type { ColumnSpec } from './types'
import DataTableWithHidden from '@/test/mocks/data-table-hidden-mock'
import DataTableWithCrud from '@/test/mocks/data-table-mock'
import { DataTable } from '.'

type Data = {
    id: number
    product: string
    price: number
    quantity: number
    date: Date
}

const date = () => new Date()

const data = [
    {
        id: 1,
        product: 'Magazine Magazine Magazine',
        price: 13.5,
        quantity: 12,
        date: date()
    },
    { id: 2, product: 'Table', price: 200.49, quantity: 3, date: date() },
    { id: 3, product: 'Chair', price: 53.5, quantity: 9, date: date() },
    { id: 4, product: 'Keyboard', price: 53.29, quantity: 4, date: date() },
    { id: 5, product: 'Mouse', price: 27.13, quantity: 16, date: date() },
    {
        id: 6,
        product: 'Microphone',
        price: 89.14,
        quantity: 2,
        date: date()
    },
    { id: 7, product: 'Headset', price: 117.85, quantity: 6, date: date() },
    { id: 8, product: 'Pencil', price: 1.5, quantity: 11, date: date() }
]

const columns: ColumnSpec<Data>[] = [
    {
        title: 'Product',
        type: 'text',
        field: 'product',
        cellStyle: {
            maxWidth: '72px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        editable: true
    },
    {
        title: 'Price (R$)',
        field: 'price',
        type: 'numeric-float',
        editable: false,
        getValue: (value: number) => value.toFixed(2).replace('.', ',')
    },
    {
        title: 'Quantity',
        field: 'quantity',
        type: 'numeric-int',
        editable: true,
        cellStyle: {
            width: '82px'
        }
    },
    {
        title: 'Date',
        field: 'date',
        type: 'datetime',
        editable: true,
        getValue: (value: Date) => format(value, 'dd/MM/yyyy HH:mm'),
        cellStyle: {
            width: '200px'
        }
    }
]

describe('DataTable', () => {
    it('should render', () => {
        render(
            <DataTable
                data={data}
                pagination={{
                    rowsPerPage: 5,
                    labelRowsPerPage: 'Row per page'
                }}
                columns={columns}
            />
        )

        const container = screen.getByRole('data-table-container')
        const rows = screen.getAllByRole('rowgroup')[1].childElementCount

        expect(container).toBeDefined()
        expect(rows).toBe(5)
    })

    it('should render with no pagination', () => {
        render(
            <DataTable
                data={data}
                pagination={{
                    disabled: true
                }}
                columns={columns}
            />
        )

        const tableElements = screen.getAllByRole('rowgroup')

        expect(tableElements).toHaveLength(2)
    })

    it('should paginate', async () => {
        render(
            <DataTable
                data={data}
                pagination={{
                    rowsPerPage: 5,
                    labelRowsPerPage: 'Row per page'
                }}
                columns={columns}
            />
        )

        const before = screen.queryByText('Microphone')

        const footer = screen.getAllByRole('rowgroup')[2]

        const nextButton = footer.querySelector(
            'button[aria-label="next page"]'
        ) as HTMLButtonElement

        await act(async () => await userEvent.click(nextButton))

        const after = screen.queryByText('Microphone')

        expect(before).toBeNull()
        expect(after).toBeDefined()
    })

    it('should change rows per page', async () => {
        render(
            <DataTable
                data={data}
                pagination={{
                    rowsPerPage: 5,
                    labelRowsPerPage: 'Row per page'
                }}
                columns={columns}
            />
        )

        const footer = screen.getAllByRole('rowgroup')[2]

        const rowSizeInput = footer.querySelector(
            '.MuiInputBase-root'
        ) as HTMLElement

        const rowsBefore = screen.getAllByRole('rowgroup')[1].childElementCount

        await act(
            async () =>
                await userEvent.click(
                    rowSizeInput.firstElementChild as HTMLElement
                )
        )

        const options = screen.getAllByRole('option')[1]

        await act(async () => await userEvent.click(options))
        const rowsAfter = screen.getAllByRole('rowgroup')[1]

        const itensAfter = rowsAfter.querySelectorAll('tr[data-id]')

        expect(rowsBefore).toBe(5)
        expect(itensAfter).toHaveLength(8)
    })

    it('should add row', async () => {
        render(<DataTableWithCrud />)

        const addBtn = screen.getByText('Add Row')

        await act(async () => await userEvent.click(addBtn))

        const container = screen.getAllByRole('rowgroup')[1]

        const row = container.querySelectorAll('tr')[0]

        row.querySelectorAll('input:not([name="date"])').forEach(input => {
            expect((input as HTMLInputElement).value).toBe('')
        })
    })

    it('should edit row', async () => {
        render(<DataTableWithCrud />)

        const container = screen.getAllByRole('rowgroup')[1]

        const row = container.querySelectorAll('tr[data-id]')[0]

        const editButton = row.querySelector(
            'button[aria-label="Edit"]'
        ) as HTMLButtonElement

        await act(async () => await userEvent.click(editButton))

        const rowAfter = container.querySelectorAll('tr[data-id]')[0]

        const saveButton = rowAfter.querySelector(
            'button[aria-label="Save"]'
        ) as HTMLButtonElement

        await act(async () => await userEvent.click(saveButton))

        const text = screen.getByText('Magazine')

        expect(text).toBeDefined()
    })

    it('should render with hidden values', () => {
        render(<DataTableWithHidden />)

        const secrets = screen.queryAllByText('********')

        expect(secrets.length).toBeGreaterThan(0)
    })

    it('should show hidden values', async () => {
        render(<DataTableWithHidden />)

        const container = screen.getAllByRole('rowgroup')[1]
        const row = container.querySelectorAll('tr[data-id]')[0]
        const visibilityButton = row.querySelector(
            'button[aria-label="Show"]'
        ) as HTMLButtonElement

        await act(async () => await userEvent.click(visibilityButton))

        const key = screen.getByText('123')
        const secret = screen.getByText('456')

        expect(key).toBeDefined()
        expect(secret).toBeDefined()
    })

    it('should show and hide values', async () => {
        render(<DataTableWithHidden />)

        const container = screen.getAllByRole('rowgroup')[1]
        const row = container.querySelectorAll('tr[data-id]')[0]
        const visibilityButton = row.querySelector(
            'button[aria-label="Show"]'
        ) as HTMLButtonElement

        await act(async () => await userEvent.click(visibilityButton))

        const keyBefore = screen.queryByText('123')
        const secretBefore = screen.queryByText('456')

        await act(async () => await userEvent.click(visibilityButton))

        const keyAfter = screen.queryByText('123')
        const secretAfter = screen.queryByText('456')

        expect(keyBefore).toBeDefined()
        expect(secretBefore).toBeDefined()
        expect(keyAfter).toBeNull()
        expect(secretAfter).toBeNull()
    })

    it('should update values', async () => {
        render(<DataTableWithHidden />)

        const container = screen.getAllByRole('rowgroup')[1]
        const row = container.querySelectorAll('tr[data-id]')[0]
        const editButton = row.querySelector(
            'button[aria-label="Edit"]'
        ) as HTMLButtonElement

        await act(async () => await userEvent.click(editButton))

        const input = row.querySelector(
            'input[name="name"]'
        ) as HTMLInputElement

        fireEvent.change(input, { target: { value: 'test' } })

        const confirmButton = row.querySelector(
            'button[aria-label="Save"]'
        ) as HTMLButtonElement

        await act(async () => await userEvent.click(confirmButton))

        await waitFor(() => {
            const text = screen.getByText('test')

            expect(text).toBeDefined()
        })
    })
})
