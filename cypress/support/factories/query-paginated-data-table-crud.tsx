import { Skeleton } from '@material-ui/lab'
import { mount } from 'cypress/react'
import format from 'date-fns/format'
import React, { useMemo, useRef, useState } from 'react'
import { DataTableAction } from '../../../src/core/DataTable'
import { Generators } from '..'
import { Button, TableCell, TableRow, Typography } from '../../../src'
// eslint-disable-next-line max-len
import { DataTableQueryPaginated } from '../../../src/core/DataTable/DataTableQueryPaginated'
import {
    ColumnSpec,
    Data,
    DataTableController,
    Identifier,
    RowMode
} from '../../../src/core/DataTable/types'
import { usePaginated } from '../../../src/core/DataTable/usePaginated'
import {
    Cancel as CancelIcon,
    Check as CheckIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
    Save as SaveIcon
} from '../../../src/icons'

const generateSkeleton = (
    size: number,
    columns: ColumnSpec<Data>[]
): Array<JSX.Element> => {
    const result: Array<JSX.Element> = []

    for (let i = 0; i < size; i++) {
        const table = (
            <TableRow
                key={`skeleton-${i}`}
                data-testid='table-skeletons'
                style={{ width: '10px' }}>
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
interface IProps {
    columnsData: ColumnSpec<Data>[]
}

const CrudComponent: React.FC<IProps> = props => {
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

    const newData = [
        ...props.columnsData,
        {
            field: 'product',
            title: 'Actions',
            type: 'text',
            cellStyle: {
                maxWidth: '30px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            editable: true
        }
    ] as ColumnSpec<Data>[]

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

    const isNullable = (x: string | number) => x == null
    const isNotPositive = (x: string | number) => x <= 0
    const isAfterNow = (x: Date) => +x > +new Date()
    const isEmpty = (x: string) => x.trim().length === 0

    const handleErrors = (
        id: number,
        nextItem: Record<string, string | number | Date>,
        isPartial = false
    ) => {
        const errorFields = [
            { field: 'quantity', isErrorIf: [isNaN, isNotPositive] },
            { field: 'date', isErrorIf: [isAfterNow] },
            { field: 'product', isErrorIf: [isEmpty] },
            { field: 'price', isErrorIf: [isNaN, isNotPositive] }
        ]
            .filter(({ field, isErrorIf }) => {
                const value: string | number | Date = nextItem[field]

                if (typeof value !== 'object' && isNullable(value)) {
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

            if (handleErrors(Number(id), nextItem, !isNew)) {
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        confirmDelete: ({ data }: { data: any }) => {
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

export const QueryPaginatedCrudDataTableFactory = () => {
    const { columns } = Generators.GenerateDataTableProps('default')
    const columnsData = columns as ColumnSpec<Data>[]
    mount(<CrudComponent columnsData={columnsData} />)
}
