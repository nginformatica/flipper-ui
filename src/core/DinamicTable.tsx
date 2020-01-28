import React, { FC, useState, forwardRef } from 'react'
import MaterialTable, { Column, Options } from 'material-table'
import {
    NoteAdd as IconAdd,
    Done as IconDone,
    Delete as IconRemove,
    Clear as IconClear,
    Edit as IconEdit,
    ChevronLeft,
    ChevronRight,
    FirstPage,
    LastPage
} from '../icons'
import IconButton from './IconButton'
import Typography from './Typography'

interface IProps {
    title?: string | React.ReactElement
    addItemTitle?: string
    columns?: Column<TColumn>[]
    data?: TColumn[]
    options?: Options
    isEditable?: boolean
    addIcon?: React.ReactElement
    deleteIcon?: React.ReactElement
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

    const handleAdd = (newData: TColumn) =>
        new Promise<void>(resolve => {
            resolve()
            setData([newData, ...data])
        })

    const handleRemove = (oldData: TColumn) =>
        new Promise<void>(resolve => {
            resolve()
            const newData =
                data.filter(data => data['readAt'] !== oldData['readAt'])

            setData(newData)
        })

    const editable = props.isEditable
        ? {
            editable: {
                onRowUpdate: handleUpdate,
                onRowAdd: handleAdd,
                onRowDelete: handleRemove
            }
        }
        : {}

    return (
        <div style={ { width: '100%' } } >
            <MaterialTable
                icons={ {
                    Add: forwardRef(() =>
                        <IconButton color='primary'>
                            <IconAdd />
                            <Typography>
                                { props.addItemTitle }
                            </Typography>
                        </IconButton>
                    ),
                    Delete: forwardRef(() =>
                        <IconButton color='primary'>
                            <IconRemove />
                        </IconButton>
                    ),
                    Check: forwardRef(() =>
                        <IconButton color='primary'>
                            <IconDone />
                        </IconButton>
                    ),
                    Clear: forwardRef(() =>
                        <IconButton color='primary'>
                            <IconClear />
                        </IconButton>
                    ),
                    Edit: forwardRef(() =>
                        <IconButton color='primary'>
                            <IconEdit />
                        </IconButton>
                    ),
                    FirstPage: forwardRef(() =>
                        <IconButton>
                            <FirstPage />
                        </IconButton>
                    ),
                    PreviousPage: forwardRef(() =>
                        <IconButton>
                            <ChevronLeft />
                        </IconButton>
                    ),
                    LastPage: forwardRef(() =>
                        <IconButton>
                            <LastPage />
                        </IconButton>
                    ),
                    NextPage: forwardRef(() =>
                        <IconButton>
                            <ChevronRight />
                        </IconButton>)
                } }
                style={ {
                    border: '1px solid #CED4DE',
                    boxShadow: 'none'
                } }
                columns={ props.columns || [] }
                data={ data }
                options={ props.options }
                { ...editable }
            />
        </div>
    )
}
