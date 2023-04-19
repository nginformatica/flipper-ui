/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-lines */
import { TableCell, TableRow, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { ComponentMeta } from '@storybook/react'
import format from 'date-fns/format'
import React, { ReactNode, useMemo, useRef, useState } from 'react'
import Button from '../Button'
import { DataTableAction } from './DataTableAction'
import DataTableQueryPaginated from './DataTableQueryPaginated'
import { ColumnSpec, DataTableController, Identifier, RowMode } from './types'
import { usePaginated } from './usePaginated'
import {
    Cancel as CancelIcon,
    Check as CheckIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
    Save as SaveIcon
} from '../../icons'

export default {
    title: 'DataTableQueryPaginated',
    component: DataTableQueryPaginated
} as ComponentMeta<typeof DataTableQueryPaginated>

type DataActual = {
    id: number
    product: string
    price: number
    quantity: number
    date: Date
}

const columnsData: ColumnSpec<DataActual>[] = [
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

const generateSkeleton = (
    size: number,
    columns: ColumnSpec<DataActual>[]
): Array<JSX.Element> => {
    const result: Array<JSX.Element> = []

    for (let i = 0; i < size; i++) {
        const table = (
            <TableRow key={`skeleton-${i}`} style={{ width: '10px' }}>
                {columns.map(column => (
                    <TableCell
                        align={column.align}
                        key={column.title}
                        style={column.cellStyle}>
                        <Skeleton />
                    </TableCell>
                ))}
            </TableRow>
        )
        result.push(table)
    }

    return result
}

export const Default = () => {
    const {
        data,
        totalElements,
        actualPage,
        size,
        handleChangePerPage,
        handleChangePage,
        loading
    } = usePaginated()

    const LoadNode: React.ReactNode = useMemo(
        () => generateSkeleton(size, columnsData),
        [size]
    )

    return (
        <DataTableQueryPaginated
            data={data}
            totalElements={totalElements}
            handleChangePage={handleChangePage}
            handleChangePerPage={handleChangePerPage}
            perPage={size}
            componentForEmpty={LoadNode}
            page={actualPage}
            pagination={{
                rowsPerPage: size,
                labelRowsPerPage: 'Row per page ',
                clickable: !loading
            }}
            columns={columnsData}
        />
    )
}

export const Empty = () => {
    const {
        totalElements,
        actualPage,
        size,
        handleChangePerPage,
        handleChangePage,
        loading
    } = usePaginated()

    const columns: ColumnSpec<DataActual>[] = [
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

    const componentForEmpty: ReactNode = (
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

    const LoadNode: React.ReactNode = loading
        ? generateSkeleton(size, columnsData)
        : componentForEmpty

    return (
        <DataTableQueryPaginated
            data={[]}
            bodyStyle={{ position: 'relative' }}
            hiddenRowHeight={53}
            handleChangePage={handleChangePage}
            handleChangePerPage={handleChangePerPage}
            totalElements={totalElements}
            page={actualPage}
            perPage={size}
            componentForEmpty={LoadNode}
            pagination={{
                rowsPerPage: 5,
                labelRowsPerPage: 'Row per page'
            }}
            columns={columns}
        />
    )
}

export const NoHeader = () => {
    const {
        totalElements,
        actualPage,
        size,
        handleChangePerPage,
        handleChangePage,
        loading,
        data
    } = usePaginated()

    const LoadNode: React.ReactNode = useMemo(
        () => generateSkeleton(size, columnsData),
        [size]
    )

    const columns: ColumnSpec<DataActual>[] = [
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
        <DataTableQueryPaginated
            data={data}
            handleChangePage={handleChangePage}
            handleChangePerPage={handleChangePerPage}
            totalElements={totalElements}
            page={actualPage}
            perPage={size}
            noHeader
            hiddenRowHeight={53}
            componentForEmpty={LoadNode}
            pagination={{
                rowsPerPage: 5,
                labelRowsPerPage: 'Row per page',
                clickable: !loading
            }}
            columns={columns}
        />
    )
}

export const Crud = () => {
    const {
        totalElements,
        actualPage,
        size,
        handleChangePerPage,
        handleChangePage,
        loading,
        data,
        setData
    } = usePaginated()

    const newData: ColumnSpec<DataActual>[] = [
        ...columnsData,
        {
            title: 'Actions',
            type: 'text',
            field: 'product',
            cellStyle: {
                maxWidth: '30px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            editable: true
        }
    ]

    const LoadNode: React.ReactNode = useMemo(
        () => generateSkeleton(size, newData),
        [size]
    )

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
                setData([nextItem as Data, ...data])
            } else {
                setData(
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
            <DataTableQueryPaginated
                data={data}
                controllerRef={controllerRef}
                errors={errors}
                handleChangePage={handleChangePage}
                handleChangePerPage={handleChangePerPage}
                componentForEmpty={LoadNode}
                totalElements={totalElements}
                page={actualPage}
                perPage={size}
                pagination={{
                    rowsPerPage: 5,
                    clickable: !loading,
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
