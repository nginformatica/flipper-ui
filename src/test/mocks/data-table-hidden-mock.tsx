/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import type { DataTableController } from '@/core/data-display/data-table'
import type {
    ColumnSpec,
    Identifier
} from '@/core/data-display/data-table/types'
import { DataTableAction } from '@/core/data-display/data-table'
import { DataTable } from '@/core/data-display/data-table/data-table'
import { RowMode } from '@/core/data-display/data-table/types'
import Typography from '@/core/data-display/typography'
import Button from '@/core/inputs/button'
import {
    Cancel as CancelIcon,
    Check as CheckIcon,
    Delete as DeleteIcon,
    Edit as EditIcon,
    Save as SaveIcon,
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon
} from '@/icons'

const Default = () => {
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
                const value: string = nextItem[field]

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

export default Default
