import React, { FC, useState, forwardRef, useRef, useEffect } from 'react'
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
    ChevronLeft as IconChevronLeft ,
    ChevronRight as IconChevronRight ,
    FirstPage as IconFirstPage ,
    LastPage
} from '../icons'
import Typography from './Typography'
import { equals, update, reverse } from 'ramda'
import styled from 'styled-components'
import Button from './Button'
import DateTime from './DateTime'
import ptBRLocale from 'date-fns/locale/pt-BR'

interface IProps {
    title?: string
    color?: 'primary' | 'inherit' | 'secondary' | 'disabled'
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
    readAt: string | Date
    position: string | number
    origin: string,
}

const CustomRemove = styled(MTableEditRow)({
    '&': {
        '& h6': {
            fontSize: '0.85em'
        }
    }
})

const BLACK = 'rgba(189,189,189,0)'
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

const usePrevious = (data?: TCounterColumn[]) => {
    const ref = useRef<TCounterColumn[] | undefined>()

    useEffect(() => {
        ref.current = data
    })

    return ref.current
}

const EditableTable: FC<IProps> = props => {
    const [data, setData] = useState<TCounterColumn[]>(props.data || [])
    const previous = usePrevious(props.data)

    useEffect(() => {
        if (props.data && !equals(props.data, previous)) {
            setData(props.data)
        }
    }, [props.data])

    const handleUpdate = (newData: TCounterColumn, oldData: TCounterColumn) =>
        Promise.resolve().then((() => {
            const index = data.indexOf(oldData)
            const updatedData = update(index, newData, data)

            setData(reverse(updatedData))
        }))

    const handleAdd = (newData: TCounterColumn) =>
        Promise.resolve().then((() => {
            const defaultValue = {
                readAt: new Date(),
                origin: 'Manual',
                ...newData
            }

            const updatedData = reverse([defaultValue, ...data])

            setData(updatedData)
        }))

    const handleDelete = (oldData: TCounterColumn) =>
        Promise.resolve().then((() => {
            const newData =
                data.filter(data => data['readAt'] !== oldData['readAt'])

            setData(newData)
        }))

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
                        if (
                            'position' in props.action &&
                            props.action.position === 'toolbar'
                        ) {
                            const Label = props.action.icon

                            return (
                                <Button
                                    color={ props.color || 'primary' }
                                    onClick={ props.action.onClick }>
                                    <Label />
                                </Button>
                            )
                        }

                        return <MTableAction { ...props } />
                    },
                    EditField: props => {
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
                    Delete: forwardRef(() =>
                        <IconRemove color={ props.color || 'primary' } />
                    ),
                    Check: forwardRef(() =>
                        <IconDone color={ props.color || 'primary' } />
                    ),
                    Clear: forwardRef(() =>
                        <IconClear color={ props.color || 'primary' } />
                    ),
                    Edit: forwardRef(() =>
                        <IconEdit color={ props.color || 'primary' } />
                    ),
                    FirstPage: forwardRef(() =>
                        <IconFirstPage color={ props.color || 'primary' } />
                    ),
                    PreviousPage: forwardRef(() =>
                        <IconChevronLeft color={ props.color || 'primary' } />
                    ),
                    LastPage: forwardRef(() =>
                        <LastPage color={ props.color || 'primary' } />
                    ),
                    NextPage: forwardRef(() =>
                        <IconChevronRight color={ props.color || 'primary' } />)
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

export default EditableTable
