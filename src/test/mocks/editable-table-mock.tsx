import React from 'react'
import type { EditableTableProps } from '@/core/data-display/editable-table'
import EditableTable from '@/core/data-display/editable-table'

interface IProps<T extends object> {
    tableProps?: Partial<EditableTableProps<T>>
}

interface IData {
    name: string
    value: number
}

interface IDate {
    date: Date
    position: number
}

const Default = ({ tableProps }: IProps<IData>) => {
    return <EditableTable {...tableProps} />
}

export const WithDate = ({ tableProps }: IProps<IDate>) => {
    return <EditableTable {...tableProps} />
}

export const WithDate2 = ({ tableProps }: IProps<IDate>) => {
    return <EditableTable {...tableProps} />
}

export default Default
