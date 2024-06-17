import React from 'react'
import type { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from 'react'
import MuiCheckbox from '@mui/material/Checkbox'
import MuiTable from '@mui/material/Table'
import MuiTableBody from '@mui/material/TableBody'
import MuiTableCell from '@mui/material/TableCell'
import MuiTableHead from '@mui/material/TableHead'
import TextField from '@/core/inputs/text-field'
import { FieldWrapper, RowTable, TableCellRows } from './styles'

interface IHeader {
    title: string
    field: string
    type?: string
    editable?: boolean
}

interface ITable<D extends Record<string, unknown>> {
    rows: D[]
    setRows: Dispatch<SetStateAction<D[]>>
    header: IHeader[]
    checkbox?: boolean
    checkboxProps?: {
        checkRow?: boolean[]
        checkAllRows?: boolean
        setSelectedRow?: Dispatch<SetStateAction<boolean[]>>
        setSelectedAllRows?: Dispatch<SetStateAction<boolean>>
    }
}

export const DataTableField = <D extends Record<string, unknown>>(
    props: ITable<D>
) => {
    const { rows, header, checkbox, checkboxProps, setRows } = props

    const handleFieldChange = (
        event: ChangeEvent<HTMLInputElement>,
        fieldName: keyof D,
        rowIndex: number,
        setRows: Dispatch<SetStateAction<D[]>>
    ) => {
        const { value } = event.target

        setRows(prevRows => {
            const updatedRows = prevRows.map((row, i) => {
                if (i === rowIndex) {
                    return {
                        ...row,
                        [fieldName]: value
                    }
                }

                return row
            })

            return updatedRows as D[]
        })
    }

    const handleSelectCheckbox = (
        index: number,
        setSelected: Dispatch<SetStateAction<boolean[]>>,
        setSelectedAll: Dispatch<SetStateAction<boolean>>
    ) => {
        setSelected(state => {
            const newState = state.map((row, i: number) =>
                index === i ? !row : row
            )

            if (newState.includes(false)) {
                setSelectedAll(false)
            }

            if (newState.every(item => item === true)) {
                setSelectedAll(true)
            }

            return newState
        })
    }

    const handleSelectAllCheckbox = (
        setSelected: Dispatch<SetStateAction<boolean[]>>,
        setSelectedAll: Dispatch<SetStateAction<boolean>>
    ) => {
        setSelectedAll(selectedAll => !selectedAll)
        setSelected(state =>
            state.map(() =>
                checkboxProps !== undefined
                    ? !checkboxProps.checkAllRows
                    : false
            )
        )
    }

    const handleSelect = (index: number) => {
        if (checkboxProps?.setSelectedRow && checkboxProps.setSelectedAllRows) {
            handleSelectCheckbox(
                index,
                checkboxProps.setSelectedRow,
                checkboxProps.setSelectedAllRows
            )
        }
    }

    const handleTableRow = (
        event: MouseEvent<HTMLTableRowElement>,
        index: number
    ) => {
        const isCheckboxClick =
            (event.target as HTMLElement).closest('input[type="checkbox"]') !==
            null

        if (
            !isCheckboxClick &&
            (!checkboxProps?.checkRow || !checkboxProps.checkRow[index])
        ) {
            handleSelect(index)
        }
    }

    const tableBody = (rows: D[], header: IHeader[]) =>
        rows.map((row, index) => {
            const columns = header.map((column, i) => {
                if (Object.keys(row).includes(column.field)) {
                    return (
                        <TableCellRows key={i} align='center'>
                            {column.editable &&
                            checkboxProps?.checkRow &&
                            checkboxProps.checkRow[index] ? (
                                <TextField
                                    fullWidth
                                    key={`${column.field}-${i}`}
                                    type={column.type}
                                    value={
                                        (row[column.field] as
                                            | string
                                            | number) || ''
                                    }
                                    onClick={event => event.stopPropagation()}
                                    onChange={event =>
                                        handleFieldChange(
                                            event,
                                            column.field,
                                            index,
                                            setRows
                                        )
                                    }
                                />
                            ) : (
                                <FieldWrapper>
                                    {(() => {
                                        if (column.editable) {
                                            return checkboxProps?.checkRow?.[
                                                index
                                            ]
                                                ? (row[column.field] as string)
                                                : ''
                                        }

                                        return row[column.field] as string
                                    })()}
                                </FieldWrapper>
                            )}
                        </TableCellRows>
                    )
                }

                return
            })

            return (
                <RowTable
                    key={index}
                    className={
                        checkboxProps?.checkRow && checkboxProps.checkRow[index]
                            ? 'no-hover'
                            : ''
                    }
                    onClick={event => handleTableRow(event, index)}>
                    {checkbox && (
                        <MuiTableCell padding='checkbox'>
                            <MuiCheckbox
                                color='primary'
                                checked={
                                    checkboxProps?.checkRow?.[index] !==
                                    undefined
                                        ? checkboxProps.checkRow[index]
                                        : false
                                }
                                onChange={() => handleSelect(index)}
                            />
                        </MuiTableCell>
                    )}
                    {columns}
                </RowTable>
            )
        })

    return (
        <MuiTable data-testid='data-table-field'>
            <MuiTableHead>
                {checkbox && (
                    <MuiTableCell padding='checkbox'>
                        <MuiCheckbox
                            color='primary'
                            checked={
                                checkboxProps?.checkAllRows !== undefined
                                    ? checkboxProps.checkAllRows
                                    : false
                            }
                            onChange={() => {
                                if (
                                    checkboxProps?.setSelectedRow &&
                                    checkboxProps.setSelectedAllRows
                                ) {
                                    handleSelectAllCheckbox(
                                        checkboxProps.setSelectedRow,
                                        checkboxProps.setSelectedAllRows
                                    )
                                }
                            }}
                        />
                    </MuiTableCell>
                )}
                {header.map((item, i) => (
                    <MuiTableCell key={i} align='center'>
                        {item.title}
                    </MuiTableCell>
                ))}
            </MuiTableHead>
            <MuiTableBody>{tableBody(rows, header)}</MuiTableBody>
        </MuiTable>
    )
}

export default DataTableField
