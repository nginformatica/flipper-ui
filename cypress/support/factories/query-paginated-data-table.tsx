import { Skeleton } from '@material-ui/lab'
import { mount } from 'cypress/react'
import React, { useMemo } from 'react'
import { Generators } from '..'
import { TableCell, TableRow } from '../../../src'
import { DataTableQueryPaginated } from '../../../src/core/DataTable'
import { ColumnSpec, Data } from '../../../src/core/DataTable/types'
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
    columnsData: ColumnSpec<Data>[]
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

    const LoadNode: React.ReactNode = useMemo(
        () => generateSkeleton(size, props.columnsData),
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
            columns={props.columnsData}
        />
    )
}

export const QueyPaginatedDataTableFactory = (preset: DataTableVariant) => {
    const { columns, ...props } = Generators.GenerateDataTableProps(preset)
    const columnsData = columns as ColumnSpec<Data>[]
    mount(<Component columnsData={columnsData} {...props} />)
}
