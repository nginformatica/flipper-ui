import React, { useState, forwardRef, useRef, useEffect } from 'react'
import MaterialTable, {
    Column,
    Options,
    MTableEditRow,
    MTableBodyRow,
    MTableAction,
    MTableEditField,
    MTableActions,
    MTablePagination
} from 'material-table'
import {
    NoteAdd as IconAdd,
    Done as IconDone,
    Delete as IconRemove,
    Clear as IconClear,
    Edit as IconEdit,
    ChevronLeft as IconChevronLeft,
    ChevronRight as IconChevronRight,
    FirstPage as IconFirstPage,
    LastPage
} from '../icons'
import Typography from './Typography'
import { equals, omit } from 'ramda'
import styled from 'styled-components'
import Button from './Button'
import DateTime from './DateTime'
import ptBRLocale from 'date-fns/locale/pt-BR'
import AutoComplete from './AutoComplete'
import ListItem from './ListItem'
import TextField from './TextField'

interface IProps<T extends object> {
    title?: string
    color?: 'primary' | 'inherit' | 'secondary' | 'disabled'
    columns?: Column<object>[]
    data?: T[]
    options?: Options
    addIcon?: React.ReactElement
    deleteIcon?: React.ReactElement
    paginationInfo?: boolean
    noRowsExpand?: boolean
    noHeader?: boolean
    autoCompleteSuggestions?: TSuggestion[]
    autoCompleteField?: string
    onUpdateRow?: (newData: object, oldData?: object) => Promise<void>
    onDeleteRow?: (newData: object, oldData?: object) => Promise<void>
    onAddRow?: (oldData: object) => Promise<void>
    onClickAdd?(): void
}

export type TSuggestion = {
    label: string
    value: string
}

const AddRowButton = styled.div`
    display: flex;
    align-items: center;
`

const AddRowText = styled(Typography)`
    margin-left: 4px; 
    font-weight: 500 !important;
`

const FullWidthButton = styled(Button)`
    width: calc(100% - 24px);
    margin: 12px !important;
`

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

const RightPagination = styled.div`
    & div[class*=MTablePaginationInner-root] {
        display: block;
        float: right;
    }
`

const usePrevious = (data?: object[]) => {
    const ref = useRef<object[] | undefined>()

    useEffect(() => {
        ref.current = data
    })

    return ref.current
}

const EditableTable = <T extends object>(props: IProps<T>) => {
    const [data, setData] = useState<object[]>(props.data || [])
    const previous = usePrevious(props.data)
    const addButtonColor = (props.color !== 'disabled' && props.color) || 'primary'

    useEffect(() => {
        if (props.data && !equals(props.data, previous)) {
            setData(props.data)
        }
    }, [props.data])

    const renderAddComponent = () =>
        <AddRowButton data-id='add-row'>
            <IconAdd />
            <AddRowText>
                Adicionar { props.title }
            </AddRowText>
        </AddRowButton>

    const pagination = !props.paginationInfo
        ? { Pagination: (() => null) }
        : props.noRowsExpand && {
            Pagination: item =>
                <RightPagination>
                    <MTablePagination
                        { ...omit(['classes'], item) }
                    />
                </RightPagination>
        }

    const toolbar = props.noHeader && { Toolbar: (() => null) }

    const renderAutoComplete = inputProps =>
        <AutoComplete
            openOnFocus
            selectTextOnFocus
            value={ inputProps.value }
            onChange={ inputProps.onChange }
            suggestions={ props.autoCompleteSuggestions || [] }
            renderSuggestion={ (item: TSuggestion, props, selected) =>
                <ListItem
                    key={ item.value }
                    selected={ selected }
                    { ...props }>
                    { item.label }
                </ListItem>
            }
            renderInput={ itemProps =>
                <TextField
                    fullWidth
                    name={ inputProps.columnDef.field + '-input' }
                    { ...itemProps }
                />
            }
            actions={
                props.onClickAdd && (
                    <FullWidthButton
                        color={ addButtonColor }
                        name='dialog-add'
                        variant='dashed'
                        onClick={ props.onClickAdd }>
                        <IconAdd />
                        Adicionar
                    </FullWidthButton>
                )
            }
        />

    return (
        <div style={ { width: '100%' } } >
            <MaterialTable
                components={ {
                    EditRow: props => <CustomRemove { ...props } />,
                    Row: props => <CustomRows { ...props } />,
                    Toolbar: props => {
                        const [actions] = props.actions

                        return (
                            <MTableActions
                                { ...props }
                                actions={ [actions] }
                                components={ { Action: props.components.Action } }
                            />
                        )
                    },
                    Action: props => {
                        if (
                            'position' in props.action &&
                            props.action.position === 'toolbar'
                        ) {
                            const Label = props.action.icon

                            return (
                                <Button
                                    fullWidth
                                    variant='dashed'
                                    color={ props.color || 'primary' }
                                    onClick={ props.action.onClick }>
                                    <Label />
                                </Button>
                            )
                        }

                        return <MTableAction { ...props } />
                    },
                    EditField: localProps => {
                        if (localProps.columnDef.type === 'datetime') {
                            return (
                                <DateTime
                                    name={ localProps.columnDef.field + '-input' }
                                    type={ localProps.columnDef.type }
                                    value={ localProps.value }
                                    locale={ ptBRLocale }
                                    onChange={ localProps.onChange }
                                />
                            )
                        }

                        if (
                            localProps.columnDef.field === props.autoCompleteField &&
                            props.autoCompleteSuggestions
                        ) {
                            return renderAutoComplete(localProps)
                        }

                        return <MTableEditField
                            name={ localProps.columnDef.field + '-input' }
                            { ...localProps }
                        />
                    },
                    ...pagination,
                    ...toolbar
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
                        <IconRemove
                            name='row-remove'
                            color={ props.color || 'primary' }
                        />
                    ),
                    Check: forwardRef(() =>
                        <IconDone
                            name='confirm-row-edit'
                            color={ props.color || 'primary' }
                        />
                    ),
                    Clear: forwardRef(() =>
                        <IconClear
                            name='cancel-row-edit'
                            color={ props.color || 'primary' }
                        />
                    ),
                    Edit: forwardRef(() =>
                        <IconEdit
                            name='row-edit'
                            color={ props.color || 'primary' }
                        />
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
                    display: 'flex',
                    border: '1px solid #CED4DE',
                    boxShadow: 'none',
                    height: '270px',
                    justifyContent: 'space-between',
                    flexDirection: 'column'
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
                editable={ {
                    onRowUpdate: props.onUpdateRow,
                    onRowAdd: props.onAddRow,
                    onRowDelete: props.onDeleteRow
                } }
            />
        </div>
    )
}

export default EditableTable
