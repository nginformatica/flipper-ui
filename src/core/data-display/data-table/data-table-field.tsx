import React from 'react'
import type { ChangeEvent, Dispatch, SetStateAction } from 'react'
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import { TextField } from '@/index'

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

    const tableBody = (rows: D[], header: IHeader[]) =>
        rows.map((row, index) => {
            const columns = header.map((column, i) => {
                if (Object.keys(row).includes(column.field)) {
                    return (
                        <TableCell key={i} align='center'>
                            {column.editable ? (
                                <TextField
                                    fullWidth
                                    key={`${column.field}-${i}`}
                                    type={column.type}
                                    value={
                                        (row[column.field] as
                                            | string
                                            | number) || ''
                                    }
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
                                <span>{row[column.field] as string}</span>
                            )}
                        </TableCell>
                    )
                }

                return
            })

            return (
                <TableRow key={index}>
                    {checkbox && (
                        <TableCell padding='checkbox'>
                            <Checkbox
                                color='primary'
                                checked={
                                    checkboxProps?.checkRow?.[index] !==
                                    undefined
                                        ? checkboxProps.checkRow[index]
                                        : false
                                }
                                onChange={() => {
                                    if (
                                        checkboxProps?.setSelectedRow &&
                                        checkboxProps.setSelectedAllRows
                                    ) {
                                        handleSelectCheckbox(
                                            index,
                                            checkboxProps.setSelectedRow,
                                            checkboxProps.setSelectedAllRows
                                        )
                                    }
                                }}
                            />
                        </TableCell>
                    )}
                    {columns}
                </TableRow>
            )
        })

    return (
        <Table>
            <TableHead>
                {checkbox && (
                    <TableCell padding='checkbox'>
                        <Checkbox
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
                    </TableCell>
                )}
                {header.map((item, i) => (
                    <TableCell key={i} align='center'>
                        {item.title}
                    </TableCell>
                ))}
            </TableHead>
            <TableBody>{tableBody(rows, header)}</TableBody>
        </Table>
    )
}
