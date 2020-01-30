import React, { FC, useState, forwardRef } from 'react'
import MaterialTable, {
    Column,
    Options,
    MTableEditRow,
    MTableBodyRow,
    MTableAction,
    MTableEditField
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
import { update, sortBy, prop, reverse } from 'ramda'
import styled from 'styled-components'
import Button from './Button'
import DateTime from './DateTime'
import ptBRLocale from 'date-fns/locale/pt-BR'

interface IProps {
    title?: string
    columns?: Column<object>[]
    data?: TCounterColumn[]
    options?: Options
    isEditable?: boolean
    addIcon?: React.ReactElement
    deleteIcon?: React.ReactElement
    onUpdateRow?: (newData: object) => Promise<void>
    onDeleteRow?: (newData: object, oldData?: object) => Promise<void>
    onAddRow?: (oldData: object) => Promise<void>
}

export type TCounterColumn = {
    readAt: string
    position: string
    origin: string,
}

const CustomRemove = styled(MTableEditRow)({
    '&': {
        '& h6': {
            fontSize: '0.85em'
        }
    }
})

const BLACK = ' rgba(189,189,189,0)'
const GRAY = 'rgba(189,189,189,1)'

const CustomRows = styled(MTableBodyRow)`
    transition: opacity 200ms ease;
    button {
        display: none;  
    };   
    &:hover {
        cursor: pointer;
        background: -moz-linear-gradient(left,${BLACK} 0%, ${GRAY} 100%);
        background: -webkit-linear-gradient(left,${BLACK} 0%,${GRAY} 100%);
        background: linear-gradient(to right,${BLACK} 0%,${GRAY} 100%);
    };
    &:hover button {
        display: inline-block !important;
    };
    td {
        min-width: 64px;
    };
`

export const EditableTable: FC<IProps> = props => {
    const [data, setData] = useState<TCounterColumn[]>(props.data || [])

    const handleUpdate = (newData: TCounterColumn, oldData: TCounterColumn) =>
        new Promise<void>(resolve => {
            const index = data.indexOf(oldData)
            const updatedData = update(index, newData, data)
            const sortedData = reverse(sortBy(prop('readAt'), updatedData))

            setData(sortedData)

            resolve()
        })

    const handleAdd = (newData: TCounterColumn) =>
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

    const handleDelete = (oldData: TCounterColumn) =>
        new Promise<void>(resolve => {
            resolve()
            const newData =
                data.filter(data => data['readAt'] !== oldData['readAt'])

            setData(newData)
        })

    const editable = props.isEditable || props.onAddRow
        ? {
            editable: {
                onRowUpdate: props.onUpdateRow || handleUpdate,
                onRowAdd: props.onAddRow || handleAdd,
                onRowDelete: props.onDeleteRow || handleDelete
            }
        }
        : {}

    const renderAddComponent = () =>
        <div style={ { display: 'flex', alignItems: 'end' } } >
            <IconAdd />
            <Typography style={ { marginLeft: '4px' } }>
                Adicionar { props.title }
            </Typography>
        </div>

    return (
        <div style={ { width: '100%' } } >
            <MaterialTable
                components={ {
                    EditRow: props => <CustomRemove { ...props } />,
                    Row: props => <CustomRows { ...props } />,
                    Action: props => {
                        if ('position' in props.action &&
                            props.action.position === 'toolbar'
                        ) {
                            const Label = props.action.icon

                            return (
                                <Button
                                    onClick={ props.action.onClick }>
                                    <Label />
                                </Button>
                            )
                        }

                        return <MTableAction { ...props } />
                    },
                    EditField: props => { console.log(props)
                        if (props.columnDef.type === 'datetime') {
                            return (
                                <DateTime
                                    type={ props.columnDef.type }
                                    value={ props.value }
                                    locale={ ptBRLocale }
                                    onChange={ props.onChange }
                                />
                            )
                        }

                        return <MTableEditField { ...props } />
                    }
                } }
                localization={ {
                    body: {
                        dateTimePickerLocalization: { locale: ptBRLocale },
                        emptyDataSourceMessage:
                            'Não há dados para serem exibidos no momento',
                        editRow: {
                            saveTooltip: 'Salvar',
                            cancelTooltip: 'Cancelar',
                            deleteText:
                                'Você tem certeza que deseja excluir esse '
                                + props.title + '?'
                        },
                        addTooltip: 'Adicionar ' + props.title,
                        deleteTooltip: 'Remover ' + props.title,
                        editTooltip: 'Editar ' + props.title
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
                } }
                icons={ {
                    Add: forwardRef(() => renderAddComponent()),
                    Delete: forwardRef(() => <IconRemove />),
                    Check: forwardRef(() => <IconDone />),
                    Clear: forwardRef(() => <IconClear />),
                    Edit: forwardRef(() => <IconEdit />),
                    FirstPage: forwardRef(() => <FirstPage />),
                    PreviousPage: forwardRef(() => <ChevronLeft />),
                    LastPage: forwardRef(() => <LastPage />),
                    NextPage: forwardRef(() => <ChevronRight />)
                } }
                style={ {
                    border: '1px solid #CED4DE',
                    boxShadow: 'none'
                } }
                columns={ props.columns || [] }
                data={ data }
                options={ {
                    search: false,
                    draggable: false,
                    sorting: false,
                    showTitle: false,
                    addRowPosition: 'first',
                    actionsColumnIndex: 4,
                    toolbarButtonAlignment: 'left',
                    padding: 'dense',
                    headerStyle: {
                        borderBottom: '2px #CED4DE solid'
                    },
                    ...props.options
                } }
                { ...editable }
            />
        </div>
    )
}
