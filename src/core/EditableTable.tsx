import React, { forwardRef, useRef } from 'react'
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
import { omit, contains } from 'ramda'
import styled from 'styled-components'
import Button from './Button'
import DateTime from './DateTime'
import ptBRLocale from 'date-fns/locale/pt-BR'
import AutoComplete from './AutoComplete'
import ListItem from './ListItem'
import TextField from './TextField'
import MaskField from './MaskField'

interface IProps<T extends object> {
    title?: string
    color?: 'primary' | 'inherit' | 'secondary' | 'disabled'
    columns?: Column<object>[]
    data?: T[]
    options?: Options<T>
    paginationInfo?: boolean
    noRowsExpand?: boolean
    noHeader?: boolean
    autoCompleteSuggestions?: TSuggestion[]
    autoCompleteField?: string
    disableAddHeader?: boolean
    errors?: string[]
    value?: string
    onRowClick?: (event?: React.MouseEvent, rowData?: T) => void
    onUpdateRow?: (newData: object, oldData?: object) => Promise<void>
    onDeleteRow?: (newData: object, oldData?: object) => Promise<void>
    onAddRow?: (oldData: object) => Promise<void>
    onRowAddCancelled: (newData: object) => Promise<void>
    onRowUpdateCancelled: (newData: object) => Promise<void>
    onClickAdd?(): void
}

export type TSuggestion = { label: string, value: string }

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
    & > div {
        display: block;
        float: right;
    }
`

const EditableTable = <T extends object>(props: IProps<T>) => {
    const addButtonColor = (props.color !== 'disabled' && props.color) || 'primary'
    const valueRef = useRef<string | number>()

    const getErrors = (field: string) => contains(field, props.errors || [])

    const localization = {
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
        header: { actions: '' },
        pagination: {
            firstTooltip: 'Primeira',
            firstAriaLabel: 'Primeira',
            previousTooltip: 'Anterior',
            previousAriaLabel: 'Anterior',
            nextTooltip: 'Próxima',
            nextAriaLabel: 'Próxima',
            lastTooltip: 'Ultima',
            lastAriaLabel: 'Ulima',
            labelRowsSelect: 'Linhas',
            labelDisplayedRows: '{from}-{to} de {count}'
        }
    }

    const renderAddComponent = () =>
        <AddRowButton data-id='add-row'>
            <IconAdd />
            <AddRowText> Adicionar { props.title } </AddRowText>
        </AddRowButton>

    const pagination = !props.paginationInfo
        ? { Pagination: (() => null) }
        : props.noRowsExpand && {
            Pagination: item =>
                <RightPagination>
                    <MTablePagination
                        { ...omit(['classes'], item) }
                        localization={ localization.pagination }
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
                    error={ getErrors(inputProps.columnDef.field) }
                    name={ inputProps.columnDef.field + '-input' }
                    { ...itemProps }
                />
            }
            actions={ props.onClickAdd && (
                <FullWidthButton
                    color={ addButtonColor }
                    name='dialog-add'
                    variant='dashed'
                    onClick={ props.onClickAdd }>
                    <IconAdd />
                    Adicionar
                </FullWidthButton>
            ) }
        />

    return (
        <div style={ { width: '100%' } } >
            <MaterialTable
                onRowClick={ props.onRowClick }
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
                    Action: localProps => {
                        if (
                            'position' in localProps.action &&
                            localProps.action.position === 'toolbar'
                        ) {
                            const ActionIcon = localProps.action.icon

                            return (
                                <Button
                                    fullWidth
                                    disabled={ props.disableAddHeader }
                                    variant='dashed'
                                    color={ localProps.color || 'primary' }
                                    onClick={ () => {
                                        localProps.action.onClick()
                                        valueRef.current = ''
                                    }
                                    }>
                                    <ActionIcon />
                                </Button>
                            )
                        }

                        return <MTableAction { ...localProps } />
                    },
                    EditField: localProps => {
                        if (localProps.columnDef.type === 'datetime') {

                            return (
                                <DateTime
                                    error={ getErrors(localProps.columnDef.field) }
                                    name={ localProps.columnDef.field + '-input' }
                                    type={ localProps.columnDef.type }
                                    value={ localProps.value }
                                    locale={ ptBRLocale }
                                    onChange={ localProps.onChange }
                                />
                            )
                        }

                        if (localProps.columnDef.type === 'numeric') {
                            const error = getErrors(localProps.columnDef.field)

                            return (
                                <MaskField
                                    { ...localProps }
                                    fixedDecimalScale
                                    error={ error }
                                    type='text'
                                    thousandSeparator='.'
                                    decimalSeparator=','
                                    decimalScale={ 0 }
                                    // This approach was necessary to fix the
                                    // library problem to handle with the state
                                    // values of the inputs
                                    value={ error
                                        ? valueRef.current
                                        : localProps.value ?? valueRef.current }
                                    name={ localProps.columnDef.field + '-input' }
                                    onChange={ event => {
                                        localProps.onChange(event.target.value)
                                        valueRef.current = event.target.value
                                    } }
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
                localization={ localization }
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
                    height: props.noRowsExpand ? '270px' : undefined,
                    justifyContent: 'space-between',
                    flexDirection: 'column'
                } }
                columns={ props.columns || [] }
                data={ props.data ?? [] }
                options={ {
                    search: false,
                    draggable: false,
                    sorting: false,
                    showTitle: false,
                    addRowPosition: 'first',
                    actionsColumnIndex: 4,
                    toolbarButtonAlignment: 'left',
                    padding: 'dense',
                    headerStyle: { borderBottom: '2px #CED4DE solid' },
                    ...props.options
                } }
                editable={ {
                    onRowUpdate: props.onUpdateRow,
                    onRowAdd: props.onAddRow,
                    onRowDelete: props.onDeleteRow,
                    onRowAddCancelled: props.onRowAddCancelled,
                    onRowUpdateCancelled: props.onRowUpdateCancelled
                } }
            />
        </div>
    )
}

export default EditableTable
