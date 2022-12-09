import format from 'date-fns/format'
import { cond, T } from 'ramda'
import React from 'react'
import { Typography } from '../../../../src'
import { DataTableProps } from '../../../../src/core/DataTable/DataTable'
import {
    ColumnSpec,
    RecordUnknown,
    StackView
} from '../../../../src/core/DataTable/types'
import { DataTableVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

type Data = {
    id: number
    product: string
    price: number
    quantity: number
    date: Date
}

const date = () => new Date()

const data: Data[] = [
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

const defs = <D extends Data>() => ({
    data: data as D[],
    columns: columns as ColumnSpec<D>[]
})

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

const generate = <D extends Data, V extends StackView>(): Record<
    DataTableVariant,
    DataTableProps<D, V>
> => {
    const props = defs<D>()

    return {
        default: {
            ...props,
            pagination: {
                rowsPerPage: 5,
                labelRowsPerPage: 'Row per page'
            }
        },
        empty: {
            ...props,
            data: [],
            bodyStyle: { position: 'relative' },
            hiddenRowHeight: 53,
            componentForEmpty: componentForEmpty,
            pagination: {
                rowsPerPage: 5,
                labelRowsPerPage: 'Row per page'
            }
        },
        'no-header': {
            ...props,
            noHeader: true,
            hiddenRowHeight: 53,
            pagination: {
                rowsPerPage: 5,
                labelRowsPerPage: 'Row per page'
            }
        },
        'no-pagination': {
            ...props,
            hiddenRowHeight: 53,
            pagination: {
                disabled: true
            }
        },
        crud: {
            ...props
        }
    }
}

export const GenerateDataTableProps = (
    preset: DataTableVariant
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): DataTableProps<Data, RecordUnknown> => {
    const {
        default: defProps,
        empty,
        'no-header': noHeader,
        'no-pagination': noPagination,
        crud
    } = generate()

    const validate = (variant: DataTableVariant) =>
        validator<DataTableVariant>(variant)

    return cond([
        [validate('empty'), () => empty],
        [validate('no-header'), () => noHeader],
        [validate('no-pagination'), () => noPagination],
        [validate('crud'), () => crud],
        [T, () => defProps]
    ])(preset)
}
