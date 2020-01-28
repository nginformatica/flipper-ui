import React, { FC, useState } from 'react'
import MaterialTable, { Column, Options } from 'material-table'

interface IProps {
    title?: string | React.ReactElement
    columns?: Column<TColumn>[]
    data?: TColumn[]
    options?: Options
    isEditable?: boolean
}

export type TColumns = {
    title: string
    field: string
    type: string
    lookup: Record<string, TColumn>
}

export type TColumn = {
    title: string
}

export const DinamicTable: FC<IProps> = props => {
    const [data, setData] = useState<TColumn[]>(props.data || [])

    const handleUpdate = (newData: TColumn, oldData: TColumn) =>
        new Promise<void>(resolve => {
            resolve()
            if (oldData) {
                (setData([newData]))
            }
        })

    return (
        <div style={ { width: '100%' } } >
            <MaterialTable
                columns={ props.columns || [] }
                data={ data }
                title={ props.title }
                options={ props.options }
                editable={ {
                    onRowUpdate: handleUpdate
                } }
            />
        </div>
    )
}
