import React, { useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import MuiTableCell from '@mui/material/TableCell'
import MuiTableRow from '@mui/material/TableRow'
import type { ColumnSpec, Data, Errors, PartialData } from './types'
import DateTime from '@/core/inputs/date-time'
import MaskField from '@/core/inputs/mask-field'
import TextField from '@/core/inputs/text-field'
import { RowMode } from './types'

type RowStateUpdater = <D extends Data>(
    field: keyof D,
    value: D[keyof D]
) => void

type NewRowProps<D extends Data> = {
    data: PartialData<D>
    errors?: Errors<D>
    columns: ColumnSpec<D>[]
    onUpdate?(partial: Partial<Data>): void
}

const isEditable = <D extends Data>(column: ColumnSpec<D>) =>
    column.type === 'actions' || column.editable

const renderEditMode = <D extends Data>(
    column: ColumnSpec<D>,
    row: PartialData<D>,
    updateRow: RowStateUpdater,
    errors?: Errors<D>,
    isNew = false
) => {
    if (column.type === 'actions') {
        return column.renderCell({ data: row, rowMode: RowMode.Edit, isNew })
    }

    const hasError = errors?.[row.id]?.has(column.field)

    if (column.renderCell) {
        const value = row[column.field]

        return column.renderCell({
            data: row,
            rowMode: RowMode.Edit,
            isNew,
            hasError,
            value
        })
    }

    if (column.type === 'datetime') {
        const date = row[column.field] as Date

        return (
            <DateTime
                fullWidth
                type='datetime'
                value={date}
                error={hasError}
                name={column.field.toString()}
                onChange={value => {
                    updateRow(column.field, value as D[keyof D])
                }}
            />
        )
    }

    if (column.type.includes('numeric')) {
        const decimalScale = column.type === 'numeric-int' ? 0 : 2

        const numeric = row[column.field] as number

        return (
            <MaskField
                fixedDecimalScale
                fullWidth
                type='text'
                error={hasError}
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={decimalScale}
                value={numeric}
                name={column.field.toString()}
                onValueChange={values => {
                    updateRow(column.field, values.value as D[keyof D])
                }}
            />
        )
    }

    const type = column.type === 'number' ? 'number' : 'text'
    const value = row[column.field] as string

    return (
        <TextField
            fullWidth
            options={column.options}
            defaultValue={value}
            type={type}
            error={hasError}
            name={column.field.toString()}
            onChange={event =>
                updateRow(column.field, event.target.value as D[keyof D])
            }
        />
    )
}

const renderHidenMode = <D extends Data>(
    column: ColumnSpec<D>,
    row: PartialData<D>
) => {
    if (column.type === 'actions') {
        return column.renderCell({ data: row, rowMode: RowMode.View })
    }

    const rawValue = row[column.field]

    if (column.renderCell) {
        return column.renderCell({
            data: row,
            rowMode: RowMode.Hide,
            value: rawValue
        })
    }

    return column.getValue?.(rawValue) || (rawValue as ReactNode)
}

const renderViewMode = <D extends Data>(
    column: ColumnSpec<D>,
    row: PartialData<D>,
    isHidden = false
) => {
    if (column.type === 'actions') {
        return column.renderCell({
            data: row,
            rowMode: isHidden ? RowMode.Hide : RowMode.View
        })
    }

    const rawValue = row[column.field]

    if (column.renderCell) {
        return column.renderCell({
            data: row,
            rowMode: RowMode.View,
            value: rawValue
        })
    }

    return column.getValue?.(rawValue) || (rawValue as ReactNode)
}

type StatefulRowProps<D extends Data> = {
    data: D
    mode: RowMode
    errors?: Errors<D>
    columns: ColumnSpec<D>[]
    isHidden?: boolean
    onUpdate?(partial: Partial<Data>): void
}

export const StatefulRow = <D extends Data>({
    data,
    mode,
    errors,
    columns,
    onUpdate,
    isHidden
}: StatefulRowProps<D>) => {
    const [editableState, setEditableState] = useState(() => data)

    const partialUpdate = useCallback(
        <D1 extends Data>(field: keyof D1, value: D1[keyof D1]) => {
            setEditableState(values => ({
                ...values,
                [`${String(field)}`]: value
            }))
            const patch: Partial<D1> = {}

            patch[field] = value
            onUpdate?.(patch)
        },
        [onUpdate]
    )

    const getCorrectViewMode = (
        column: ColumnSpec<D>,
        mode: RowMode,
        isEditable: boolean | undefined
    ) => {
        if (mode === RowMode.Edit && isEditable) {
            return renderEditMode(column, editableState, partialUpdate, errors)
        }

        if (mode === RowMode.View) {
            return renderViewMode(column, data, isHidden)
        }

        return renderHidenMode(column, data)
    }

    return (
        <>
            {columns.map((column, i) => (
                <MuiTableCell
                    align={column.align}
                    key={`${column.title}-${i}`}
                    style={column.cellStyle}>
                    {getCorrectViewMode(column, mode, isEditable(column))}
                </MuiTableCell>
            ))}
        </>
    )
}

export const NewRow = <D extends Data>({
    data,
    columns,
    errors,
    onUpdate
}: NewRowProps<D>) => {
    const [editableState, setEditableState] = useState(() => data)

    const partialUpdate = useCallback(
        <D1 extends Data>(field: keyof D1, value: D1[keyof D1]) => {
            setEditableState(values => ({ ...values, [field]: value }))
            onUpdate?.({ [field]: value })
        },
        [onUpdate]
    )

    return (
        <MuiTableRow data-testid='table-row'>
            {columns.map((column, i) => (
                <MuiTableCell
                    style={column.cellStyle}
                    align={column.align}
                    key={`${column.title}-${i}`}>
                    {isEditable(column)
                        ? renderEditMode(
                              column,
                              editableState,
                              partialUpdate,
                              errors,
                              true
                          )
                        : renderViewMode(column, editableState)}
                </MuiTableCell>
            ))}
        </MuiTableRow>
    )
}
