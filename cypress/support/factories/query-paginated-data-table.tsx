import { Skeleton } from '@material-ui/lab'
import { mount } from 'cypress/react18'
import { omit } from 'ramda'
import React, { useMemo } from 'react'
import { Generators } from '..'
import { TableCell, TableRow } from '../../../src'
import { DataTableQueryPaginated } from '../../../src/core/DataTable'
import { DataTableProps } from '../../../src/core/DataTable/DataTableQueryPaginated'
import {
    ColumnSpec,
    Data,
    RecordUnknown
} from '../../../src/core/DataTable/types'
import { usePaginated } from '../../../src/core/DataTable/usePaginated'
import { DataTableVariant } from '../types-interfaces-enums'

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
    preset: DataTableVariant
    isEmpty?: boolean
    isPaginateDisabled?: boolean
}

const Component: React.FC<IProps> = props => {
    const {
        data,
        totalElements,
        actualPage,
        size,
        handleChangePerPage,
        handleChangePage,
        loading
    } = usePaginated()

    const generatedProps = Generators.GenerateDataTableProps(props.preset)

    const LoadNode: React.ReactNode = useMemo(
        () =>
            generateSkeleton(
                size,
                generatedProps.columns as ColumnSpec<Data>[]
            ),
        [size]
    )

    const treatedProps = omit(
        [
            'data',
            'totalElements',
            'handleChangePage',
            'handleChangePerPage',
            'perPage',
            'page',
            'pagination'
        ],
        generatedProps
    ) as Omit<
        DataTableProps<Data, RecordUnknown>,
        | 'data'
        | 'totalElements'
        | 'handleChangePage'
        | 'handleChangePerPage'
        | 'perPage'
        | 'page'
    >

    const curData = useMemo(() => {
        if (props.isEmpty || loading) {
            return []
        }

        return data
    }, [data, loading, props.isEmpty])

    return (
        <DataTableQueryPaginated
            data={curData}
            totalElements={totalElements}
            handleChangePage={handleChangePage}
            handleChangePerPage={handleChangePerPage}
            perPage={size}
            componentForEmpty={LoadNode}
            page={actualPage}
            pagination={{
                rowsPerPage: size,
                labelRowsPerPage: 'Row per page ',
                clickable: !loading,
                disabled: props.isPaginateDisabled
            }}
            {...treatedProps}
        />
    )
}

export const QueyPaginatedDataTableFactory = (preset: DataTableVariant) => {
    mount(
        <Component
            preset={preset}
            isEmpty={preset === 'empty'}
            isPaginateDisabled={preset === 'no-pagination'}
        />
    )
}
