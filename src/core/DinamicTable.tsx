import React, { FC, useState, forwardRef } from 'react'
import MaterialTable, {
    Column,
    Options,
    MTableEditRow,
    MTableBodyRow
} from 'material-table'
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
import Typography from './Typography'
import ptBR from 'date-fns/locale/pt-BR'
import { update, sortBy, prop, reverse } from 'ramda'
import styled from 'styled-components'

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
    readAt: string
    position: string
    origin: string,
}

const Remove = styled(MTableEditRow)({
    '&': {
        '& h6': {
            fontSize: '0.85em'
        }
    }
})


const Rows = styled(MTableBodyRow)`
    transition: opacity 200ms ease;
    button {
        display: none;  
    };   
    &:hover {
        cursor: pointer;
        background: -moz-linear-gradient(left, rgba(189,189,189,0) 0%, rgba(189,189,189,1) 100%);
        background: -webkit-linear-gradient(left, rgba(189,189,189,0) 0%,rgba(189,189,189,1) 100%);
        background: linear-gradient(to right, rgba(189,189,189,0) 0%,rgba(189,189,189,1) 100%);
    };
    &:hover button {
        display: inline-block !important;
    };
    td {
        min-width: 64px;
    };
`

export const DinamicTable: FC<IProps> = props => {
    const [data, setData] = useState<TColumn[]>(props.data || [])

    const handleUpdate = (newData: TColumn, oldData: TColumn) =>
        new Promise<void>(resolve => {
            const index = data.indexOf(oldData)
            const updatedData =
                reverse(sortBy(prop('readAt'), update(index, newData, data)))

            setData(updatedData as TColumn[])

            resolve()
        })

    const handleAdd = (newData: TColumn) =>
        new Promise<void>(resolve => {
            const defaultValue = {
                readAt: new Date(),
                origin: 'Manual',
                ...newData
            }

            const updatedData =
                reverse(sortBy(prop('readAt'), [defaultValue, ...data]))

            setData(updatedData)
            resolve()
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
        <div style={{ width: '100%' }} >
            <MaterialTable
                components={{
                    EditRow: props => <Remove {...props} />,
                    Row: props => <Rows {...props} />
                }}
                localization={{
                    body: {
                        dateTimePickerLocalization: { locale: ptBR },
                        emptyDataSourceMessage:
                            'Não há dados para serem exibidos no momento',
                        editRow: {
                            saveTooltip: 'Salvar',
                            cancelTooltip: 'Cancelar',
                            deleteText:
                                'Você tem certeza que deseja excluir esse contador?'
                        },
                        addTooltip: 'Adicionar contador',
                        deleteTooltip: 'Remover contador',
                        editTooltip: 'Editar contador'
                    },
                    header: {
                        actions: ''
                    },
                    pagination: {
                        firstTooltip: 'Primeira',
                        firstAriaLabel: 'Primeira',
                        previousTooltip: 'Anterior',
                        previousAriaLabel: 'Anterior',
                        nextTooltip: 'Próxima',
                        nextAriaLabel: 'Próxima',
                        lastTooltip: 'Ultima',
                        lastAriaLabel: 'Ulima',
                        labelRowsSelect: 'Linhas'
                    }
                }}
                icons={{
                    Add: forwardRef(() =>
                        <div style={{ display: 'flex', alignItems: 'end' }} >
                            <IconAdd />
                            <Typography style={{ marginLeft: '4px' }}>
                                {props.addItemTitle}
                            </Typography>
                        </div>
                    ),
                    Delete: forwardRef(() =>
                        <IconRemove />
                    ),
                    Check: forwardRef(() =>
                        <IconDone />
                    ),
                    Clear: forwardRef(() =>
                        <IconClear />
                    ),
                    Edit: forwardRef(() =>
                        <IconEdit />
                    ),
                    FirstPage: forwardRef(() =>
                        <FirstPage />
                    ),
                    PreviousPage: forwardRef(() =>
                        <ChevronLeft />
                    ),
                    LastPage: forwardRef(() =>
                        <LastPage />
                    ),
                    NextPage: forwardRef(() =>
                        <ChevronRight />
                    )
                }}
                style={{
                    border: '1px solid #CED4DE',
                    boxShadow: 'none'
                }}
                columns={props.columns || []}
                data={data}
                options={props.options}
                {...editable}
            />
        </div>
    )
}
