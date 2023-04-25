import * as React from 'react'
import EditableTable, {
    EditableTableProps
} from '@/core/data-display/EditableTable'

interface IProps<T extends object> {
    tableProps?: Partial<EditableTableProps<T>>
}
interface IDate {
    date: Date
    position: number
}
const Default = ({ tableProps }: IProps<IDate>) => {
    return <EditableTable {...tableProps} />
}
export default Default
