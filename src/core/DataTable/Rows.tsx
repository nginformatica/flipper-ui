import { ColumnSpec, Data, Errors, PartialData, RowMode } from './types'
import TextField from '../TextField'
import MaskField from '../MaskField'
import DateTime from '../DateTime'
import React, { ReactNode, useState, useCallback } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

type RowStateUpdater = <D extends Data>(field: keyof D, value: D[keyof D]) => void

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
                type='datetime'
                value={ date }
                fullWidth
                error={ hasError }
                name={ column.field.toString() }
                onChange={ value => {
                    updateRow(column.field, value as D[keyof D])
                } }
            />
        )
    }

    if (column.type?.includes('numeric')) {
        const decimalScale = column.type === 'numeric-int' ? 0 : 2

        const numeric = row[column.field] as number

        return (
            <MaskField
                fixedDecimalScale
                type='text'
                fullWidth
                error={ hasError }
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={ decimalScale }
                value={ numeric }
                name={ column.field.toString() }
                onChange={ event => {
                    const rawValue =
                        event.target.value?.replace('.','').replace(',','.')
                    const value = decimalScale === 0
                        ? parseInt(rawValue)
                        : parseFloat(rawValue)
                    updateRow(column.field, value as D[keyof D])
                } }
            />
        )
    }

    const type = column.type === 'number' ? 'number' : 'text'
    const value = row[column.field] as string

    return (
        <TextField
            defaultValue={ value }
            type={ type }
            fullWidth
            error={ hasError }
            name={ column.field.toString() }
            onChange={ event =>
                updateRow(column.field, event.target.value as D[keyof D])
            }
        />
    )
}

const renderViewMode = <D extends Data>(
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
            rowMode: RowMode.View,
            value: rawValue
        })
    }

    return column.getValue?.(rawValue) || rawValue as ReactNode
}

type StatefulRowProps<D extends Data> = {
    data: D
    mode: RowMode
    errors?: Errors<D>
    columns: ColumnSpec<D>[]
    onUpdate?(partial: Partial<Data>): void
}

export const StatefulRow = <D extends Data>({
    data,
    mode,
    errors,
    columns,
    onUpdate
}: StatefulRowProps<D>) => {
    const [editableState, setEditableState] = useState(() => data)

    const partialUpdate = useCallback(<D1 extends Data>(
        field: keyof D1,
        value: D1[keyof D1]
    ) => {
        setEditableState(values => ({ ...values, [`${field}`]: value }))
        const patch: Partial<D1> = { }
        patch[field] = value
        onUpdate?.(patch)
    }, [])

    return (<>
        { columns.map(column =>
            <TableCell
                align={ column.align }
                key={ column.title }
                style={ column.cellStyle }>
                { mode === RowMode.Edit && isEditable(column)
                    ? renderEditMode(column, editableState, partialUpdate, errors)
                    : renderViewMode(column, data)
                }
            </TableCell>
        ) }
        </>
    )
}

type NewRowProps<D extends Data> = {
    data: PartialData<D>
    errors?: Errors<D>
    columns: ColumnSpec<D>[]
    onUpdate?(partial: Partial<Data>): void
}

export const NewRow = <D extends Data>({
    data,
    columns,
    errors,
    onUpdate
}: NewRowProps<D>) => {
    const [editableState,setEditableState] = useState(() => data)

    const partialUpdate = useCallback(<D1 extends Data>(
        field: keyof D1,
        value: D1[keyof D1]
    ) => {
        setEditableState(values => ({ ...values, [field]: value }))
        onUpdate?.({ [field]: value })
    }, [])

    return (
        <TableRow>
            { columns.map(column =>
                <TableCell
                    style={ column.cellStyle }
                    align={ column.align }
                    key={ column.title }>
                    {
                        isEditable(column)
                            ? renderEditMode(
                                column,
                                editableState,
                                partialUpdate,
                                errors,
                                true
                            )
                            : renderViewMode(column, editableState)
                    }
                </TableCell>
            ) }
        </TableRow>
    )
}
