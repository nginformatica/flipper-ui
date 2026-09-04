import React, { useState, useRef } from 'react'
import type { MutableRefObject, Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns'
import { v4 as uuid } from 'uuid'
import type { ColumnSpec, DataTableController, Identifier } from './types'
import type { Meta } from '@storybook/react'
import Typography from '@/core/data-display/typography'
import Button from '@/core/inputs/button'
import {
    IconClose,
    IconCheck,
    IconDelete,
    IconEdit,
    IconSave,
    IconVisibility,
    IconVisibilityOff
} from '@/icons/mui'
import { default as DataTable } from './data-table'
import { DataTableAction } from './data-table-action'
import { DataTableField } from './data-table-field'
import { RowMode } from './types'

const COMPONENT_DESCRIPTION = [
    'A table driven by a **column spec** instead of JSX children. Each',
    'column declares a `field` and a `type`, and the table decides how to',
    'read, format and edit that value:',
    '',
    '```tsx',
    'const columns: ColumnSpec<Product>[] = [',
    "    { title: 'Product', field: 'product', type: 'text', editable: true },",
    '    {',
    "        title: 'Price',",
    "        field: 'price',",
    "        type: 'numeric-float',",
    "        getValue: value => value.toFixed(2).replace('.', ',')",
    '    }',
    ']',
    '',
    '<DataTable data={products} columns={columns} />',
    '```',
    '',
    'Every row has a **mode** — `View`, `Edit` or `Hide` — and the table',
    'renders a different cell for each. `editable` columns turn into the',
    'input that matches their `type`; `renderCell` takes over completely',
    'when you need something else.',
    '',
    'Modes are not props. You drive them through a **controller** handed',
    'to you by `controllerRef`, which is also how rows are added:',
    '',
    '```tsx',
    'const controller = useRef<DataTableController<Product, View>>()',
    '',
    'controller.current?.editRow(id)',
    'controller.current?.addRow({ id: uuid() })',
    '```',
    '',
    'Pagination is built in and slices `data` client side. Pass',
    '`pagination={{ disabled: true }}` to render every row.',
    '',
    '### Truncating a column',
    '',
    'Clipping is **per column and opt-in**, because a table that must not',
    'hide content simply does not ask for it:',
    '',
    '```tsx',
    "{ title: 'Description', field: 'description', type: 'text', truncate: true }",
    "{ title: 'Note', field: 'note', type: 'text', truncate: 300 }",
    "{ title: 'Path', field: 'path', type: 'text', truncate: '20rem' }",
    '```',
    '',
    '`true` clips at 150px; a number is read as pixels; a string is used as',
    'given. It reaches the header cell too, and a `cellStyle` or',
    '`headerStyle` on the same column still wins.',
    '',
    '> The ellipsis is reliable; the width is a ceiling, not a promise.',
    "> Under the browser's default `table-layout: auto` a column can still",
    '> render wider than asked when the table has room to spare — a column',
    '> capped at 180px measured 278px in a 900px table. Only',
    '> `table-layout: fixed` with an explicit `width` holds the exact',
    '> number.',
    '',
    '> Layout is opt-in. Without `stickyHeader`, `maxHeight`, `cellPadding`,',
    '> `framed` or `borderRadius` the table renders exactly as it always',
    '> did — an elevated card with a 4px radius.'
].join('\n')

const meta: Meta<typeof DataTable> = {
    title: 'DataDisplay/Data Table',
    component: DataTable,
    parameters: {
        docs: {
            description: {
                component: COMPONENT_DESCRIPTION
            }
        }
    },
    argTypes: {
        data: {
            control: false,
            description: 'The rows to render. Every row needs an `id`'
        },
        columns: {
            control: false,
            description:
                'The column spec. Drives the header, the cell rendering ' +
                'and the edit inputs. `truncate` on a column clips it with ' +
                'an ellipsis — off unless asked for'
        },
        errors: {
            control: false,
            description:
                'Fields to flag as invalid, as `{ [rowId]: Set<field> }`. ' +
                'Marks the matching edit inputs with an error state'
        },
        controllerRef: {
            control: false,
            description:
                'Receives the controller that drives row modes: ' +
                '`editRow`, `viewRow`, `hideRow`, `addRow`, `getRowData`'
        },
        rowViews: {
            control: false,
            description:
                'Named components that replace the whole row when pushed ' +
                'with `pushRowView`. Used for inline confirmations'
        },
        pagination: {
            control: false,
            description:
                'Pagination options. `disabled: true` renders every row ' +
                'and hides the footer'
        },
        componentForEmpty: {
            control: false,
            description:
                'Rendered in place of the rows when there is no data. ' +
                'Must be table markup, since it lands inside `tbody`'
        },
        onRowClick: {
            control: false,
            description: 'Called with the event and the row data'
        },
        checkboxProps: {
            control: false,
            description:
                'Selection state and setters for the checkbox column. ' +
                'The table does not own the selection'
        },
        noHeader: {
            control: 'boolean',
            description: 'Drops the header row'
        },
        hidden: {
            control: 'boolean',
            description:
                'Starts every row in `Hide` mode instead of `View`, so ' +
                'sensitive values render masked until revealed'
        },
        checkbox: {
            control: 'boolean',
            description: 'Adds the selection column'
        },
        hideSelect: {
            control: 'boolean',
            description: 'Hides the rows per page select in the footer'
        },
        renderEmptyRows: {
            control: 'boolean',
            description:
                'Pads the last page with blank rows so the table keeps ' +
                'the same height across pages'
        },
        hiddenRowHeight: {
            control: 'number',
            description:
                'Height of each padding row, in pixels. Only used while ' +
                'the page is not full'
        },
        bodyStyle: {
            control: false,
            description: 'Inline style for `tbody`'
        },
        headStyle: {
            control: false,
            description: 'Inline style for `thead`'
        },
        bodyRowStyle: {
            control: false,
            description: 'Inline style applied to every body row'
        },
        headRowStyle: {
            control: false,
            description: 'Inline style for the header row'
        },
        size: {
            control: false,
            description:
                'The table size. ' +
                'Must be `"small" | "medium"`' +
                'If not set, the default is "medium"'
        },
        stickyHeader: {
            control: 'boolean',
            description:
                'Keeps the header visible while the body scrolls. ' +
                'Needs `maxHeight` to have something to scroll within'
        },
        maxHeight: {
            control: 'text',
            description:
                'Bounds the table container height and lets the body ' +
                'scroll. Also thins the scrollbar'
        },
        cellPadding: {
            control: 'text',
            description:
                'Padding applied to every head and body cell. ' +
                'A column `cellStyle` or `headerStyle` still wins over it'
        },
        framed: {
            control: 'boolean',
            description:
                'Swaps the elevated card for a bordered frame and drops ' +
                'the last row border'
        },
        borderRadius: {
            control: 'text',
            description:
                'Container corner radius. ' +
                'A bare number is read as pixels. Defaults to 12 when framed'
        }
    }
}

export default meta

type Data = {
    id: number
    product: string
    price: number
    quantity: number
    date: Date
}

type DataCrud = {
    id: Identifier
    product: string
    price: number
    quantity: number
    date: Date
}

type DataCrudWithHidden = {
    id: Identifier
    name: string
    key: string
    secret: string
    rowMode: RowMode
}

type View = {
    confirmDelete(): JSX.Element
}

const DEFAULT_DESCRIPTION = [
    'The column spec at its simplest: `field` picks the value, `type`',
    'decides how it is read and edited, and `getValue` formats it for',
    'display without touching the underlying data.',
    '',
    'The `cellStyle` on the first column is how per column truncation is',
    'done today — `maxWidth` plus `nowrap`, `overflow` and',
    '`textOverflow` written by hand.'
].join('\n')

export const Default = () => {
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

    return <DataTable data={data} columns={columns} />
}

Default.parameters = {
    docs: {
        description: {
            story: DEFAULT_DESCRIPTION
        }
    }
}

const TRUNCATED_DESCRIPTION = [
    'Clipping is decided column by column, so a table that cannot hide',
    'content simply leaves it off. Here the first column clips and the',
    'second does not — the same long text, side by side.',
    '',
    'Note the rendered widths: the clipped column asks for 180px and gets',
    'more than that, because the default table layout redistributes spare',
    'room. What the value buys is the ellipsis and a much narrower column,',
    'not an exact measurement.',
    '',
    '```tsx',
    "{ title: 'Clipped', field: 'clipped', type: 'text', truncate: 180 }",
    "{ title: 'Full', field: 'full', type: 'text' }",
    '```',
    '',
    '`truncate` also reaches the header cell, so a long title cannot widen',
    'the column past the limit and defeat the clipping.'
].join('\n')

export const Truncated = () => {
    const text = 'A description long enough to need clipping in a narrow column'

    const data = [
        { id: 1, clipped: text, full: text },
        { id: 2, clipped: 'Short one', full: 'Short one' }
    ]

    const columns: ColumnSpec<{
        id: number
        clipped: string
        full: string
    }>[] = [
        {
            title: 'Clipped at 180px',
            field: 'clipped',
            type: 'text',
            truncate: 180
        },
        { title: 'Full content', field: 'full', type: 'text' }
    ]

    return (
        <DataTable
            data={data}
            columns={columns}
            pagination={{ disabled: true }}
        />
    )
}

Truncated.parameters = {
    docs: {
        description: {
            story: TRUNCATED_DESCRIPTION
        }
    }
}

const FRAMED_DESCRIPTION = [
    'The frame look: `framed` swaps the elevated card for a bordered',
    'container, rounds it at 12px and drops the border of the last row',
    'so it does not collide with the frame.',
    '',
    '`borderRadius` overrides the radius. A bare number is read as',
    'pixels — `borderRadius={20}` is 20px, not a theme multiple.'
].join('\n')

export const Framed = () => {
    const data = [
        { id: 1, product: 'Magazine', price: 13.5, quantity: 12 },
        { id: 2, product: 'Table', price: 200.49, quantity: 3 },
        { id: 3, product: 'Chair', price: 53.5, quantity: 9 }
    ]

    const columns: ColumnSpec<Omit<Data, 'date'>>[] = [
        { title: 'Product', type: 'text', field: 'product' },
        {
            title: 'Price (R$)',
            field: 'price',
            type: 'numeric-float',
            getValue: (value: number) => value.toFixed(2).replace('.', ',')
        },
        { title: 'Quantity', field: 'quantity', type: 'numeric-int' }
    ]

    return (
        <DataTable
            framed
            data={data}
            columns={columns}
            pagination={{ disabled: true }}
        />
    )
}

Framed.parameters = {
    docs: {
        description: {
            story: FRAMED_DESCRIPTION
        }
    }
}

const STICKY_HEADER_DESCRIPTION = [
    'Three props working together. `maxHeight` bounds the container so',
    'there is something to scroll, `stickyHeader` pins the header while',
    'the body moves under it, and `cellPadding` sets the padding of',
    'every head and body cell at once.',
    '',
    '`stickyHeader` alone does nothing — sticky needs a bounded',
    'container. Setting `maxHeight` also thins the scrollbar.'
].join('\n')

export const StickyHeader = () => {
    const data = Array.from({ length: 24 }, (_, index) => ({
        id: index + 1,
        product: `Product ${index + 1}`,
        price: (index + 1) * 7.5,
        quantity: index + 1,
        date: new Date()
    }))

    const columns: ColumnSpec<Data>[] = [
        { title: 'Product', type: 'text', field: 'product' },
        {
            title: 'Price (R$)',
            field: 'price',
            type: 'numeric-float',
            getValue: (value: number) => value.toFixed(2).replace('.', ',')
        },
        { title: 'Quantity', field: 'quantity', type: 'numeric-int' }
    ]

    return (
        <DataTable
            stickyHeader
            data={data}
            columns={columns}
            maxHeight={320}
            cellPadding='6px 12px'
            pagination={{ disabled: true }}
        />
    )
}

StickyHeader.parameters = {
    docs: {
        description: {
            story: STICKY_HEADER_DESCRIPTION
        }
    }
}

const CUSTOM_DESCRIPTION = [
    'Footer and page shape. `pagination` carries the page size and the',
    'first/last buttons, `hideSelect` drops the rows per page select,',
    'and `renderEmptyRows` pads the last page so the table keeps the',
    'same height while paging.'
].join('\n')

export const Custom = () => {
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

    return (
        <DataTable
            hideSelect
            renderEmptyRows
            data={data}
            pagination={{
                rowsPerPage: 5,
                showFirstButton: true,
                showLastButton: true
            }}
            columns={columns}
        />
    )
}

Custom.parameters = {
    docs: {
        description: {
            story: CUSTOM_DESCRIPTION
        }
    }
}

const EMPTY_DESCRIPTION = [
    '`componentForEmpty` replaces the rows when there is no data. It',
    'lands inside `tbody`, so it has to be table markup — a `tr` with a',
    'spanning `td`, not a bare `div`.'
].join('\n')

export const Empty = () => {
    const columns: ColumnSpec<Data>[] = [
        {
            title: 'Product',
            field: 'product',
            type: 'text',
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
        }
    ]

    const componentForEmpty = (
        <tr>
            <td
                style={{
                    display: 'flex',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxSizing: 'border-box'
                }}>
                <div>
                    <Typography>Empty DataTable</Typography>
                </div>
            </td>
        </tr>
    )

    return (
        <DataTable
            data={[]}
            bodyStyle={{ position: 'relative' }}
            hiddenRowHeight={53}
            componentForEmpty={componentForEmpty}
            pagination={{
                rowsPerPage: 5,
                labelRowsPerPage: 'Row per page'
            }}
            columns={columns}
        />
    )
}

Empty.parameters = {
    docs: {
        description: {
            story: EMPTY_DESCRIPTION
        }
    }
}

const NO_HEADER_DESCRIPTION = [
    '`noHeader` drops the header row entirely. The column titles still',
    'matter: they are the React keys for the cells.'
].join('\n')

export const NoHeader = () => {
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
            field: 'product',
            type: 'text',
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

    return (
        <DataTable
            noHeader
            data={data}
            hiddenRowHeight={53}
            pagination={{
                rowsPerPage: 5,
                labelRowsPerPage: 'Row per page'
            }}
            columns={columns}
        />
    )
}

NoHeader.parameters = {
    docs: {
        description: {
            story: NO_HEADER_DESCRIPTION
        }
    }
}

const NO_PAGINATION_DESCRIPTION = [
    '`pagination={{ disabled: true }}` renders every row and removes the',
    'footer. Without it the table always slices `data` client side.'
].join('\n')

export const NoPagination = () => {
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
            field: 'product',
            type: 'text',
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

    return (
        <DataTable
            data={data}
            hiddenRowHeight={53}
            pagination={{
                disabled: true
            }}
            columns={columns}
        />
    )
}

NoPagination.parameters = {
    docs: {
        description: {
            story: NO_PAGINATION_DESCRIPTION
        }
    }
}

const CRUD_DESCRIPTION = [
    'Row modes in practice. The table never receives a mode as a prop —',
    'it hands you a controller through `controllerRef`, and that is what',
    'moves a row between `View` and `Edit` or adds a new one.',
    '',
    '```tsx',
    'const controller = useRef<DataTableController<Data, View>>()',
    '',
    '<DataTable controllerRef={controller} … />',
    '',
    'controller.current?.editRow(id)',
    'controller.current?.addRow({ id: uuid() })',
    '```',
    '',
    'The delete confirmation is a `rowViews` entry: `pushRowView`',
    'replaces the whole row with a named component until `popRowView`.'
].join('\n')

export const Crud = () => {
    const date = () => new Date()
    const controllerRef = useRef<DataTableController<DataCrud, View>>()
    const [errors, setErrors] = useState({})

    const randomId = () => Math.random().toString(36).substr(0, 12)

    const [data, setData] = useState<DataCrud[]>([
        { id: 1, product: 'Magazine', price: 13.5, quantity: 12, date: date() },
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
    ])

    const rows = (
        data: Data,
        setData: Dispatch<SetStateAction<Data[]>>,
        controllerRef: MutableRefObject<DataTableController<Data, View>>
    ) => {
        return (
            <td colSpan={5}>
                <div
                    style={{
                        display: 'flex',
                        padding: '16px',
                        justifyContent: 'space-between'
                    }}>
                    <Typography>Confirm Delete "{data.product}"?</Typography>
                    <div style={{ display: 'flex' }}>
                        <DataTableAction
                            label='CheckIcon'
                            onClick={() => {
                                controllerRef.current.popRowView(data.id)
                                setData(dataList =>
                                    dataList.filter(item => item.id !== data.id)
                                )
                            }}>
                            <IconCheck />
                        </DataTableAction>
                        <DataTableAction
                            label='CancelIcon'
                            onClick={() => {
                                controllerRef.current.popRowView(data.id)
                            }}>
                            <IconClose />
                        </DataTableAction>
                    </div>
                </div>
            </td>
        )
    }

    const handleAdd = () => {
        controllerRef.current?.addRow({ id: randomId(), date: date() })
    }

    const handleEdit = (id: string | number) => () => {
        controllerRef.current?.editRow(id)
    }

    const handleDelete = (id: string | number) => () => {
        controllerRef.current?.pushRowView(id, 'confirmDelete')
    }

    const handleView = (id: string | number) => () => {
        controllerRef.current?.viewRow(id)
    }

    const isNullable = (x: unknown) => x == null
    const isNotPositive = (x: number) => x <= 0
    const isAfterNow = (x: Date) => +x > +new Date()
    const isEmpty = (x: string) => x.trim().length === 0

    const handleErrors = (
        id: string | number,
        nextItem: { [key: string]: unknown } = {},
        isPartial = false
    ) => {
        const errorFields = [
            { field: 'quantity', isErrorIf: [isNaN, isNotPositive] },
            { field: 'date', isErrorIf: [isAfterNow] },
            { field: 'product', isErrorIf: [isEmpty] },
            { field: 'price', isErrorIf: [isNaN, isNotPositive] }
        ]
            .filter(({ field, isErrorIf }) => {
                const value = nextItem[field]

                if (isNullable(value)) {
                    if (isPartial) {
                        return false
                    }

                    return true
                }

                return isErrorIf.some(cond => cond(value as never))
            })
            .map(({ field }) => field)

        setErrors(errors => ({
            ...errors,
            [id]: new Set(errorFields)
        }))

        return errorFields.length > 0
    }

    const handleSave =
        (id: Identifier, isNew = false) =>
        () => {
            const nextItem = controllerRef.current?.getEditedRowData(id)

            if (!nextItem) {
                return
            }

            if (handleErrors(id, nextItem, !isNew)) {
                return
            }

            if (isNew) {
                setData(data => [nextItem as Data, ...data])
            } else {
                setData(data =>
                    data.map(item => {
                        if (item.id === id) {
                            return { ...item, ...nextItem }
                        }

                        return item
                    })
                )
            }

            controllerRef.current?.viewRow(id)
        }

    const columns: ColumnSpec<Data>[] = [
        {
            title: 'Product',
            field: 'product',
            type: 'text',
            cellStyle: {
                width: '120px'
            },
            editable: true
        },
        {
            title: 'Price (R$)',
            field: 'price',
            type: 'numeric-float',
            editable: true,
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
        },
        {
            title: 'Actions',
            type: 'actions',
            align: 'center',
            cellStyle: {
                width: '60px'
            },
            renderCell: ({ data: { id }, rowMode, isNew = false }) => {
                if (rowMode === RowMode.View) {
                    return (
                        <div style={{ display: 'flex' }}>
                            <DataTableAction
                                label='Edit'
                                onClick={handleEdit(id)}>
                                <IconEdit />
                            </DataTableAction>
                            <DataTableAction
                                label='Delete'
                                onClick={handleDelete(id)}>
                                <IconDelete />
                            </DataTableAction>
                        </div>
                    )
                }

                return (
                    <div style={{ display: 'flex' }}>
                        <DataTableAction
                            label='Save'
                            onClick={handleSave(id, isNew)}>
                            <IconSave />
                        </DataTableAction>
                        <DataTableAction
                            label='Cancel'
                            onClick={handleView(id)}>
                            <IconClose />
                        </DataTableAction>
                    </div>
                )
            }
        }
    ]

    const rowViews = {
        confirmDelete: ({ data }: { data: Data }) => {
            // @ts-expect-error TODO: fix controller type
            return rows(data, setData, controllerRef)
        }
    }

    return (
        <>
            <Button onClick={handleAdd}>Add Row</Button>
            <DataTable
                data={data}
                controllerRef={controllerRef}
                errors={errors}
                pagination={{
                    rowsPerPage: 5,
                    showFirstButton: true,
                    showLastButton: true,
                    labelRowsPerPage: 'Rows per page:',
                    labelDisplayedRows: ({ from, to, count }) => {
                        return `${from}-${to} of ${
                            count !== -1 ? count : `more than ${to}`
                        }`
                    }
                }}
                rowViews={rowViews}
                columns={columns}
            />
        </>
    )
}

Crud.parameters = {
    docs: {
        description: {
            story: CRUD_DESCRIPTION
        }
    }
}

const CRUD_WITHOUT_PAGINATION_DESCRIPTION = [
    'The same controller flow with `pagination={{ disabled: true }}`.',
    'Worth its own story because adding a row while paginated sends the',
    'table back to the first page, and without pagination it does not.'
].join('\n')

export const CrudWithoutPagination = () => {
    const controllerRef =
        useRef<DataTableController<DataCrudWithHidden, View>>()
    const [errors, setErrors] = useState({})

    const randomId = () => Math.random().toString(36).substr(0, 12)

    const [data, setData] = useState<DataCrudWithHidden[]>([
        {
            id: 1,
            name: 'PowerBI',
            rowMode: RowMode.Hide,
            key: '123',
            secret: '456'
        },
        {
            id: 2,
            name: 'External API',
            rowMode: RowMode.Hide,
            key: '123',
            secret: '456'
        },
        {
            id: 3,
            name: 'Sass',
            rowMode: RowMode.Hide,
            key: '123',
            secret: '456'
        }
    ])

    const rows = (
        data: DataCrudWithHidden,
        setData: Dispatch<SetStateAction<DataCrudWithHidden[]>>,
        controllerRef?: MutableRefObject<
            DataTableController<DataCrudWithHidden, View>
        >
    ) => {
        return (
            <td colSpan={5}>
                <div
                    style={{
                        display: 'flex',
                        padding: '16px',
                        justifyContent: 'space-between'
                    }}>
                    <Typography>Confirm Delete "{data.name}"?</Typography>
                    <div style={{ display: 'flex' }}>
                        <DataTableAction
                            label='CheckIcon'
                            onClick={() => {
                                controllerRef?.current.popRowView(data.id)
                                setData(dataList =>
                                    dataList.filter(item => item.id !== data.id)
                                )
                            }}>
                            <IconCheck />
                        </DataTableAction>
                        <DataTableAction
                            label='CancelIcon'
                            onClick={() => {
                                controllerRef?.current.popRowView(data.id)
                            }}>
                            <IconClose />
                        </DataTableAction>
                    </div>
                </div>
            </td>
        )
    }

    const handleAdd = () => {
        controllerRef.current?.addRow({ id: randomId() })
    }

    const handleEdit = (id: string | number) => () => {
        controllerRef.current?.editRow(id)
    }

    const handleHide = (id: string | number) => () => {
        controllerRef.current?.hideRow(id)
    }

    const handleDelete = (id: string | number) => () => {
        controllerRef.current?.pushRowView(id, 'confirmDelete')
    }

    const handleView = (id: string | number) => () => {
        controllerRef.current?.viewRow(id)
    }

    const isNullable = (x: unknown) => x == null
    const isEmpty = (x: string) => x.trim().length === 0

    const handleErrors = (
        id: string | number,
        nextItem: { [key: string]: unknown } = {},
        isPartial = false
    ) => {
        const errorFields = [{ field: 'name', isErrorIf: [isEmpty] }]
            .filter(({ field, isErrorIf }) => {
                const value = nextItem[field]

                if (isNullable(value)) {
                    if (isPartial) {
                        return false
                    }

                    return true
                }

                return isErrorIf.some(cond => cond(value as string))
            })
            .map(({ field }) => field)

        setErrors(errors => ({
            ...errors,
            [id]: new Set(errorFields)
        }))

        return errorFields.length > 0
    }

    const handleSave =
        (id: Identifier, isNew = false) =>
        () => {
            const nextItem = controllerRef.current?.getEditedRowData(id)

            if (!nextItem) {
                return
            }

            if (handleErrors(id, nextItem, !isNew)) {
                return
            }

            if (isNew) {
                setData(data => [
                    {
                        ...nextItem,
                        key: uuid(),
                        secret: uuid()
                    } as DataCrudWithHidden,
                    ...data
                ])
            } else {
                setData(data =>
                    data.map(item => {
                        if (item.id === id) {
                            return {
                                ...item,
                                ...nextItem
                            }
                        }

                        return item
                    })
                )
            }

            controllerRef.current?.viewRow(id)
        }

    const columns: ColumnSpec<DataCrudWithHidden>[] = [
        {
            title: 'Name',
            field: 'name',
            type: 'text',
            editable: true
        },
        {
            title: 'Key',
            field: 'key',
            type: 'text',
            editable: false,
            renderCell: ({ rowMode, isNew = false, value }) => {
                if (isNew) {
                    return null
                }

                if (rowMode === RowMode.Hide) {
                    return <>********</>
                }

                return <>{value as string}</>
            }
        },
        {
            title: 'Secret',
            field: 'secret',
            type: 'text',
            editable: false,
            renderCell: ({ rowMode, isNew = false, value }) => {
                if (isNew) {
                    return null
                }

                if (rowMode === RowMode.Hide) {
                    return <>********</>
                }

                return <>{value as string}</>
            }
        },
        {
            title: 'Actions',
            type: 'actions',
            align: 'center',
            cellStyle: {
                width: '60px'
            },
            renderCell: ({ data: { id }, rowMode, isNew = false }) => {
                if (rowMode === RowMode.View) {
                    return (
                        <div style={{ display: 'flex' }}>
                            <DataTableAction
                                label='Show'
                                onClick={handleView(id)}>
                                <IconVisibility />
                            </DataTableAction>
                            <DataTableAction
                                label='Edit'
                                onClick={handleEdit(id)}>
                                <IconEdit />
                            </DataTableAction>
                            <DataTableAction
                                label='Delete'
                                onClick={handleDelete(id)}>
                                <IconDelete />
                            </DataTableAction>
                        </div>
                    )
                }

                if (rowMode === RowMode.Hide) {
                    return (
                        <div style={{ display: 'flex' }}>
                            <DataTableAction
                                label='Show'
                                onClick={handleHide(id)}>
                                <IconVisibilityOff />
                            </DataTableAction>
                            <DataTableAction
                                label='Edit'
                                onClick={handleEdit(id)}>
                                <IconEdit />
                            </DataTableAction>
                            <DataTableAction
                                label='Delete'
                                onClick={handleDelete(id)}>
                                <IconDelete />
                            </DataTableAction>
                        </div>
                    )
                }

                return (
                    <div style={{ display: 'flex' }}>
                        <DataTableAction
                            label='Save'
                            onClick={handleSave(id, isNew)}>
                            <IconSave />
                        </DataTableAction>
                        <DataTableAction
                            label='Cancel'
                            onClick={handleView(id)}>
                            <IconClose />
                        </DataTableAction>
                    </div>
                )
            }
        }
    ]

    const rowViews = {
        confirmDelete: ({ data }: { data: DataCrudWithHidden }) => {
            // @ts-expect-error TODO: fix controller type
            return rows(data, setData, controllerRef)
        }
    }

    return (
        <>
            <Button onClick={handleAdd}>Add Row</Button>
            <DataTable
                hidden
                data={data}
                controllerRef={controllerRef}
                errors={errors}
                pagination={{
                    disabled: true
                }}
                rowViews={rowViews}
                columns={columns}
            />
        </>
    )
}

CrudWithoutPagination.parameters = {
    docs: {
        description: {
            story: CRUD_WITHOUT_PAGINATION_DESCRIPTION
        }
    }
}

const WITH_FIELD_DESCRIPTION = [
    '`DataTableField` wraps the table with the selection column already',
    'wired. The table itself does not own the selection — `checkboxProps`',
    'carries the state and the setters, so the page keeps control of',
    'what is checked.'
].join('\n')

export const WithField = () => {
    const dataInput = [
        {
            branch: 'Keepfy Joinville',
            local: 'Joiville',
            status: 'Ativo',
            companyCode: '',
            branchCode: ''
        },
        {
            branch: 'Keepfy São Paulo',
            local: 'São Paulo',
            status: 'Ativo',
            companyCode: '',
            branchCode: ''
        },
        {
            branch: 'Keepfy Rio Grande do Sul',
            local: 'Rio Grande do Sul',
            status: 'Ativo',
            companyCode: '',
            branchCode: ''
        },
        {
            branch: 'Keepfy Rio de Janeiro',
            local: 'Rio de Janeiro',
            status: 'Ativo',
            companyCode: '',
            branchCode: ''
        },
        {
            branch: 'Keepfy Curitiba',
            local: 'Curitiba',
            status: 'Ativo',
            companyCode: '',
            branchCode: ''
        },
        {
            branch: 'Keepfy Teresópolis',
            local: 'Teresópolis',
            status: 'Ativo',
            companyCode: '',
            branchCode: ''
        }
    ]

    const tableHead = [
        {
            title: 'Nome da Filial',
            field: 'branch',
            type: 'text',
            editable: false
        },
        {
            title: 'Localidade',
            field: 'local',
            type: 'text',
            editable: false
        },
        {
            title: 'Status',
            field: 'status',
            type: 'text',
            editable: false
        },
        {
            title: 'Código da Empresa',
            field: 'companyCode',
            type: 'number',
            editable: true
        },
        {
            title: 'Código da Filial',
            field: 'branchCode',
            type: 'text',
            editable: true
        }
    ]

    const [data, setData] = useState<Record<string, unknown>[]>(() => dataInput)
    const [selectedAll, setSelectedAll] = useState<boolean>(false)
    const [selected, setSelected] = useState<boolean[]>(
        Array(data.length).fill(false)
    )

    return (
        <DataTableField
            checkbox
            rows={data}
            setRows={setData}
            header={tableHead}
            checkboxProps={{
                checkRow: selected,
                checkAllRows: selectedAll,
                setSelectedRow: setSelected,
                setSelectedAllRows: setSelectedAll
            }}
        />
    )
}

WithField.parameters = {
    docs: {
        description: {
            story: WITH_FIELD_DESCRIPTION
        }
    }
}
