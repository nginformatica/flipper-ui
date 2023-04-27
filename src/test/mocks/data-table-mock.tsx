/* eslint-disable @typescript-eslint/ban-ts-comment */
import Button from '@/core/inputs/button'
import {
    DataTableAction,
    DataTableController
} from '@/core/data-display/data-table'
import DataTable from '@/core/data-display/data-table/data-table'
import {
    ColumnSpec,
    Identifier,
    RowMode
} from '@/core/data-display/data-table/types'
import Typography from '@/core/data-display/typography'
import {
    Cancel as CancelIcon,
    Check as CheckIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
    Save as SaveIcon
} from '@/icons'
import { format } from 'date-fns'
import React, { useRef, useState } from 'react'

const Default = () => {
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
        nextItem = {},
        isPartial = false
    ) => {
        const errorFields = [
            { field: 'quantity', isErrorIf: [isNaN, isNotPositive] },
            { field: 'date', isErrorIf: [isAfterNow] },
            { field: 'product', isErrorIf: [isEmpty] },
            { field: 'price', isErrorIf: [isNaN, isNotPositive] }
        ]
            .filter(({ field, isErrorIf }) => {
                // @ts-ignore
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

export default Default
