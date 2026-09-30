import React, { act } from 'react'
import type { CSSProperties } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { format } from 'date-fns'
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

        const container = screen.getByTestId('data-table-container')
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

describe('DataTable layout props', () => {
    type Item = { id: number; name: string }

    const items: Item[] = [{ id: 1, name: 'Magazine' }]

    const columns: ColumnSpec<Item>[] = [
        { title: 'Name', type: 'text', field: 'name' }
    ]

    const styledColumns: ColumnSpec<Item>[] = [
        {
            title: 'Name',
            type: 'text',
            field: 'name',
            cellStyle: { padding: '1px 2px' },
            headerStyle: { padding: '3px 4px' }
        }
    ]

    it('should not bound the container nor stick the header by default', () => {
        const { container } = render(
            <DataTable data={items} columns={columns} />
        )

        expect(container.querySelector('table')?.className).not.toContain(
            'MuiTable-stickyHeader'
        )
        expect(
            getComputedStyle(screen.getByTestId('data-table-container'))
                .maxHeight
        ).toBe('')
    })

    it('should stick the header and bound the container when asked', () => {
        const { container } = render(
            <DataTable
                stickyHeader
                data={items}
                columns={columns}
                maxHeight={320}
            />
        )

        expect(container.querySelector('table')?.className).toContain(
            'MuiTable-stickyHeader'
        )
        expect(
            getComputedStyle(screen.getByTestId('data-table-container'))
                .maxHeight
        ).toBe('320px')
    })

    it('should not stick the footer by default', () => {
        const { container } = render(
            <DataTable data={items} columns={columns} />
        )
        const footer = container.querySelector('tfoot td') as HTMLElement

        expect(getComputedStyle(footer).position).not.toBe('sticky')
    })

    it('should stick the footer when stickyFooter is true', () => {
        const { container } = render(
            <DataTable
                stickyFooter
                data={items}
                columns={columns}
                maxHeight={320}
            />
        )
        const footer = container.querySelector('tfoot td') as HTMLElement

        expect(getComputedStyle(footer).position).toBe('sticky')
    })

    it('should separate the borders so the stuck footer can paint its own', () => {
        const { container } = render(
            <DataTable
                stickyFooter
                data={items}
                columns={columns}
                maxHeight={320}
            />
        )
        const table = container.querySelector('table') as HTMLElement

        expect(getComputedStyle(table).borderCollapse).toBe('separate')
    })

    it('should apply cellPadding to head and body cells', () => {
        const { container } = render(
            <DataTable data={items} columns={columns} cellPadding='2px 6px' />
        )

        expect(
            container.querySelector<HTMLElement>('thead th')?.style.padding
        ).toBe('2px 6px')
        expect(
            container.querySelector<HTMLElement>('tbody td')?.style.padding
        ).toBe('2px 6px')
    })

    it('should let per column styles win over cellPadding', () => {
        const { container } = render(
            <DataTable
                data={items}
                columns={styledColumns}
                cellPadding='2px 6px'
            />
        )

        expect(
            container.querySelector<HTMLElement>('thead th')?.style.padding
        ).toBe('3px 4px')
        expect(
            container.querySelector<HTMLElement>('tbody td')?.style.padding
        ).toBe('1px 2px')
    })
})

describe('DataTable frame props', () => {
    type Item = { id: number; name: string }

    const items: Item[] = [{ id: 1, name: 'Magazine' }]

    const columns: ColumnSpec<Item>[] = [
        { title: 'Name', type: 'text', field: 'name' }
    ]

    const container = () =>
        getComputedStyle(screen.getByTestId('data-table-container'))

    it('should keep the elevated card look by default', () => {
        render(<DataTable data={items} columns={columns} />)

        expect(container().boxShadow).not.toBe('none')
        expect(container().border).toBe('')
    })

    it('should swap the shadow for a border when framed', () => {
        render(<DataTable framed data={items} columns={columns} />)

        expect(container().boxShadow).toBe('none')
        expect(container().borderRadius).toBe('12px')
        expect(container().border).toContain('1px solid')
    })

    it('should let borderRadius override the framed default', () => {
        render(
            <DataTable
                framed
                data={items}
                columns={columns}
                borderRadius={20}
            />
        )

        expect(container().borderRadius).toBe('20px')
    })

    it('should round the container without framing it', () => {
        render(<DataTable data={items} columns={columns} borderRadius={8} />)

        expect(container().borderRadius).toBe('8px')
        expect(container().boxShadow).not.toBe('none')
    })
})

describe('DataTable column truncation', () => {
    type Item = { id: number; name: string }

    const items: Item[] = [{ id: 1, name: 'A very long product description' }]

    const build = (column: {
        truncate?: boolean | number | string
        cellStyle?: CSSProperties
    }): ColumnSpec<Item>[] => [
        { title: 'Name', type: 'text', field: 'name', ...column }
    ]

    const cells = (container: HTMLElement) => ({
        head: container.querySelector<HTMLElement>('thead th'),
        body: container.querySelector<HTMLElement>('tbody td')
    })

    it('should not clip the content by default', () => {
        const { container } = render(
            <DataTable data={items} columns={build({})} />
        )

        expect(cells(container).body?.style.textOverflow).toBe('')
        expect(cells(container).body?.style.maxWidth).toBe('')
    })

    it('should clip head and body when the column opts in', () => {
        const { container } = render(
            <DataTable data={items} columns={build({ truncate: true })} />
        )

        const { head, body } = cells(container)

        expect(body?.style.maxWidth).toBe('150px')
        expect(body?.style.textOverflow).toBe('ellipsis')
        expect(body?.style.whiteSpace).toBe('nowrap')
        expect(body?.style.overflow).toBe('hidden')
        expect(head?.style.maxWidth).toBe('150px')
    })

    it('should take the max width from the truncate value', () => {
        const { container } = render(
            <DataTable data={items} columns={build({ truncate: 300 })} />
        )

        expect(cells(container).body?.style.maxWidth).toBe('300px')
    })

    it('should accept a css length', () => {
        const { container } = render(
            <DataTable data={items} columns={build({ truncate: '20rem' })} />
        )

        expect(cells(container).body?.style.maxWidth).toBe('20rem')
    })

    it('should let cellStyle win over the truncation', () => {
        const { container } = render(
            <DataTable
                data={items}
                columns={build({
                    truncate: true,
                    cellStyle: { maxWidth: '400px', whiteSpace: 'normal' }
                })}
            />
        )

        const { body } = cells(container)

        expect(body?.style.maxWidth).toBe('400px')
        expect(body?.style.whiteSpace).toBe('normal')
    })
})
