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

const meta: Meta<typeof DataTable> = {
    title: 'DataDisplay/Data Table',
    component: DataTable,
    argTypes: {
        errors: {
            table: {
                disable: true
            }
        },
        noHeader: {
            table: {
                disable: true
            }
        },
        componentForEmpty: {
            table: {
                disable: true
            }
        },
        bodyStyle: {
            table: {
                disable: true
            }
        },
        headStyle: {
            table: {
                disable: true
            }
        },
        bodyRowStyle: {
            table: {
                disable: true
            }
        },
        headRowStyle: {
            table: {
                disable: true
            }
        },
        hiddenRowHeight: {
            table: {
                disable: true
            }
        },
        pagination: {
            table: {
                disable: true
            }
        },
        controllerRef: {
            table: {
                disable: true
            }
        },
        hidden: {
            table: {
                disable: true
            }
        },
        rowViews: {
            table: {
                disable: true
            }
        },
        renderEmptyRows: {
            table: {
                disable: true
            }
        },
        hideSelect: {
            table: {
                disable: true
            }
        },
        checkbox: {
            table: {
                disable: true
            }
        },
        checkboxProps: {
            table: {
                disable: true
            }
        },
        onRowClick: {
            table: {
                disable: true
            }
        },
        data: {
            control: false,
            description: 'The table data'
        },
        columns: {
            control: false,
            description: 'The table columns'
        },
        size: {
            control: false,
            description:
                'The table size. ' +
                'Must be `"small" | "medium"`' +
                'If not set, the default is "medium"'
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
