/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-lines */
import React, { useState, useRef } from 'react'
import { Meta } from '@storybook/react'
import format from 'date-fns/format'
import DataTable from './data-table'
import Button from '@/core/inputs/button'
import Typography from '@/core/data-display/typography'
import { DataTableAction } from './data-table-action'
import { ColumnSpec, DataTableController, Identifier, RowMode } from './types'
import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    Save as SaveIcon,
    Cancel as CancelIcon,
    Check as CheckIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@/icons'
import { v4 as uuid } from 'uuid'

export default {
    title: 'DataDisplay/DataTable',
    component: DataTable
} as Meta<typeof DataTable>

type Data = {
    id: number
    product: string
    price: number
    quantity: number
    date: Date
}

// const Template: ComponentStory<typeof DataTable> = args =>
// <DataTable { ...args } />

export const Default = () => {
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

    return (
        <DataTable
            data={data}
            pagination={{
                rowsPerPage: 5,
                labelRowsPerPage: 'Row per page'
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
            data={data}
            noHeader
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
    type Data = {
        id: Identifier
        product: string
        price: number
        quantity: number
        date: Date
    }

    type View = {
        confirmDelete(): JSX.Element
    }

    const date = () => new Date()
    const controllerRef = useRef<DataTableController<Data, View>>()
    const [errors, setErrors] = useState({})

    const randomId = () => Math.random().toString(36).substr(0, 12)

    const [data, setData] = useState<Data[]>([
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

                return isErrorIf.some(cond => cond)
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
                                <EditIcon />
                            </DataTableAction>
                            <DataTableAction
                                label='Delete'
                                onClick={handleDelete(id)}>
                                <DeleteIcon />
                            </DataTableAction>
                        </div>
                    )
                }

                return (
                    <div style={{ display: 'flex' }}>
                        <DataTableAction
                            label='Save'
                            onClick={handleSave(id, isNew)}>
                            <SaveIcon />
                        </DataTableAction>
                        <DataTableAction
                            label='Cancel'
                            onClick={handleView(id)}>
                            <CancelIcon />
                        </DataTableAction>
                    </div>
                )
            }
        }
    ]

    const rowViews = {
        confirmDelete: ({ data }: { data: Data }) => {
            return (
                <td colSpan={5}>
                    <div
                        style={{
                            display: 'flex',
                            padding: '16px',
                            justifyContent: 'space-between'
                        }}>
                        <Typography>
                            Confirm Delete "{data.product}"?
                        </Typography>
                        <div style={{ display: 'flex' }}>
                            <DataTableAction
                                label='CheckIcon'
                                onClick={() => {
                                    controllerRef.current?.popRowView(data.id)
                                    setData(dataList =>
                                        dataList.filter(
                                            item => item.id !== data.id
                                        )
                                    )
                                }}>
                                <CheckIcon />
                            </DataTableAction>
                            <DataTableAction
                                label='CancelIcon'
                                onClick={() => {
                                    controllerRef.current?.popRowView(data.id)
                                }}>
                                <CancelIcon />
                            </DataTableAction>
                        </div>
                    </div>
                </td>
            )
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

export const CrudWithHidden = () => {
    type Data = {
        id: Identifier
        name: string
        key: string
        secret: string
        rowMode: RowMode
    }

    type View = {
        confirmDelete(): JSX.Element
    }

    const controllerRef = useRef<DataTableController<Data, View>>()
    const [errors, setErrors] = useState({})

    const randomId = () => Math.random().toString(36).substr(0, 12)

    const [data, setData] = useState<Data[]>([
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
        nextItem = {},
        isPartial = false
    ) => {
        const errorFields = [{ field: 'name', isErrorIf: [isEmpty] }]
            .filter(({ field, isErrorIf }) => {
                // @ts-ignore
                const value = nextItem[field]

                if (isNullable(value)) {
                    if (isPartial) {
                        return false
                    }

                    return true
                }

                return isErrorIf.some(cond => cond(value))
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
                    { ...nextItem, key: uuid(), secret: uuid() } as Data,
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

    const columns: ColumnSpec<Data>[] = [
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
                                <VisibilityIcon />
                            </DataTableAction>
                            <DataTableAction
                                label='Edit'
                                onClick={handleEdit(id)}>
                                <EditIcon />
                            </DataTableAction>
                            <DataTableAction
                                label='Delete'
                                onClick={handleDelete(id)}>
                                <DeleteIcon />
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
                                <VisibilityOffIcon />
                            </DataTableAction>
                            <DataTableAction
                                label='Edit'
                                onClick={handleEdit(id)}>
                                <EditIcon />
                            </DataTableAction>
                            <DataTableAction
                                label='Delete'
                                onClick={handleDelete(id)}>
                                <DeleteIcon />
                            </DataTableAction>
                        </div>
                    )
                }

                return (
                    <div style={{ display: 'flex' }}>
                        <DataTableAction
                            label='Save'
                            onClick={handleSave(id, isNew)}>
                            <SaveIcon />
                        </DataTableAction>
                        <DataTableAction
                            label='Cancel'
                            onClick={handleView(id)}>
                            <CancelIcon />
                        </DataTableAction>
                    </div>
                )
            }
        }
    ]

    const rowViews = {
        confirmDelete: ({ data }: { data: Data }) => {
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
                                    controllerRef.current?.popRowView(data.id)
                                    setData(dataList =>
                                        dataList.filter(
                                            item => item.id !== data.id
                                        )
                                    )
                                }}>
                                <CheckIcon />
                            </DataTableAction>
                            <DataTableAction
                                label='CancelIcon'
                                onClick={() => {
                                    controllerRef.current?.popRowView(data.id)
                                }}>
                                <CancelIcon />
                            </DataTableAction>
                        </div>
                    </div>
                </td>
            )
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
