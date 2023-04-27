/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines */
import React, { forwardRef, useRef } from 'react'
import MaterialTable, {
    Column,
    Options,
    MTableEditRow,
    MTableBodyRow,
    MTableEditField,
    MTableAction,
    MTablePagination,
    MTableActions
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
} from '@/icons'
import Typography from '@/core/data-display/typography'
import { omit, contains, propOr } from 'ramda'
import styled from 'styled-components'
import Button from '@/core/inputs/button'
import DateTime from '@/core/inputs/date-time'
import ptBRLocale from 'date-fns/locale/pt-BR'
import AutoComplete from '@/core/inputs/auto-complete'
import ListItem from '@/core/data-display/list-item'
import TextField from '@/core/inputs/text-field'
import MaskField from '@/core/inputs/mask-field'
import { DARK, GREY } from '@/colors'
import { getLocalization } from '@/lib/localization'

export interface EditableTableProps<T extends object> {
    /**
     * The title of the table
     */
    title?: string
    /**
     * The color of the add button
     */
    color?: 'primary' | 'inherit' | 'secondary' | 'disabled'
    /**
     * The columns of the table
     */
    columns?: Column<object>[]
    /**
     * The data of the table
     */
    data?: T[]
    /**
     * The options of the table
     */
    options?: Options<T>
    /**
     * Show the pagination info
     */
    paginationInfo?: boolean
    /**
     * If 'true', the rows wont expand
     */
    noRowsExpand?: boolean
    /**
     * If 'true', the table will have no header
     */
    noHeader?: boolean
    /**
     * List of suggestions for the autocomplete field
     */
    autoCompleteSuggestions?: TSuggestion[]
    /**
     * The field to be used as the autocomplete field
     */
    autoCompleteField?: string
    /**
     * If 'true', the add button will be disabled
     */
    disableAddHeader?: boolean
    /**
     * The error message to be displayed
     */
    errors?: string[]
    /**
     * The input value
     */
    value?: string
    onRowClick?: (event?: React.MouseEvent, rowData?: T) => void
    onUpdateRow?: (newData: object, oldData?: object) => Promise<void>
    onDeleteRow?: (newData: object, oldData?: object) => Promise<void>
    onAddRow?: (oldData: object) => Promise<void>
    onRowAddCancelled?: (newData: object) => Promise<void>
    onRowUpdateCancelled?: (newData: object) => Promise<void>
    onClickAdd?(): void
}

export type TSuggestion = { label: string; value: string }

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

const CustomRows = styled(MTableBodyRow)`
    transition: opacity 200ms ease;
    button {
        display: none;
    }
    &:hover {
        background: -moz-linear-gradient(left, ${DARK} 0%, ${GREY} 100%);
        background: -webkit-linear-gradient(left, ${DARK} 0%, ${GREY} 100%);
        background: linear-gradient(to right, ${DARK} 0%, ${GREY} 100%);
    }
    &:hover button {
        display: inline-block !important;
    }
    td {
        min-width: 64px;
    }
`

const RightPagination = styled.div`
    & > div {
        display: block;
        float: right;
    }
`

const Wrapper = styled.div`
    & > div {
        justify-content: flex-end;
    }
`
export const EditableTable = <T extends object>(
    props: EditableTableProps<T>
) => {
    const addButtonColor =
        (props.color !== 'disabled' && props.color) || 'primary'
    const valueRef = useRef<string | number>()

    const getErrors = (field: string) => contains(field, props.errors || [])

    const renderMaskField = (item: any, error: boolean) => (
        <Wrapper>
            <MaskField
                {...item}
                fixedDecimalScale
                error={props.errors ? error : item.error}
                type='text'
                thousandSeparator='.'
                decimalSeparator=','
                decimalScale={0}
                // This approach was necessary to fix the problem with the
                // state values of the inputs
                value={
                    error ? valueRef.current : item.value ?? valueRef.current
                }
                name={item.columnDef.field + '-input'}
                onChange={event => {
                    item.onChange(event.target.value)
                    valueRef.current = event.target.value
                }}
            />
        </Wrapper>
    )

    const renderAddComponent = (
        <AddRowButton data-id='add-row'>
            <IconAdd />
            <AddRowText> Adicionar {props.title} </AddRowText>
        </AddRowButton>
    )

    const pagination = !props.paginationInfo
        ? { Pagination: () => null }
        : props.noRowsExpand && {
              Pagination: (item: any) => (
                  <RightPagination data-id='pagination'>
                      <MTablePagination
                          {...omit(['classes'], item)}
                          localization={getLocalization(props.title).pagination}
                      />
                  </RightPagination>
              )
          }

    const toolbar = props.noHeader && { Toolbar: () => null }

    const renderAutoComplete = (inputProps: any) => (
        <AutoComplete
            openOnFocus
            selectTextOnFocus
            data-testid='autocomplete-container'
            value={inputProps.value}
            onChange={inputProps.onChange}
            suggestions={propOr([], 'autoCompleteSuggestions', props)}
            renderSuggestion={(item: TSuggestion, props, selected) => (
                <ListItem key={item.value} selected={selected} {...props}>
                    {item.label}
                </ListItem>
            )}
            renderInput={itemProps => (
                <TextField
                    fullWidth
                    error={getErrors(inputProps.columnDef.field)}
                    name={inputProps.columnDef.field + '-input'}
                    {...itemProps}
                />
            )}
            actions={
                props.onClickAdd && (
                    <FullWidthButton
                        color={addButtonColor}
                        name='dialog-add'
                        data-testid='dialog-add'
                        variant='dashed'
                        onClick={props.onClickAdd}>
                        <IconAdd />
                        Adicionar
                    </FullWidthButton>
                )
            }
        />
    )

    return (
        <div style={{ width: '100%' }}>
            <MaterialTable
                onRowClick={props.onRowClick}
                components={{
                    EditRow: props => <CustomRemove {...props} />,
                    Row: props => <CustomRows {...props} />,
                    Toolbar: props => {
                        const [actions] = props.actions

                        return (
                            <MTableActions
                                {...props}
                                actions={[actions]}
                                components={{ Action: props.components.Action }}
                            />
                        )
                    },
                    Action: localProps => {
                        const { disabled, size, data } = localProps
                        const isDisabled = !!disabled

                        const renderToolbarButton = () => {
                            const ActionIcon = localProps.action.icon

                            return (
                                <Button
                                    fullWidth
                                    disabled={props.disableAddHeader}
                                    variant='dashed'
                                    color={localProps.color || 'primary'}
                                    onClick={() => {
                                        localProps.action.onClick()
                                        valueRef.current = ''
                                    }}>
                                    <ActionIcon />
                                </Button>
                            )
                        }

                        const renderActionButton = () => (
                            <MTableAction
                                disabled={isDisabled}
                                size={size}
                                data={data}
                                action={localProps.action}
                            />
                        )

                        // const renderDefault = () => (
                        //     <MTableAction
                        //         disabled
                        //         action={() => {}}
                        //         size={0}
                        //         data={[]}
                        //     />
                        // )

                        // const hasData = !!localProps.action && size && data
                        const isToolbar =
                            localProps.action &&
                            'position' in localProps.action &&
                            localProps.action.position === 'toolbar'

                        if (isToolbar) {
                            return renderToolbarButton()
                        }

                        return renderActionButton()

                        // return cond([
                        //     [isToolbar, renderToolbarButton],
                        //     [hasData, renderActionButton],
                        //     [T, renderDefault]
                        // ])(localProps)
                    },
                    EditField: localProps => {
                        if (localProps.columnDef.type === 'datetime') {
                            return (
                                <DateTime
                                    error={
                                        props.errors
                                            ? getErrors(
                                                  localProps.columnDef.field
                                              )
                                            : localProps.error
                                    }
                                    name={localProps.columnDef.field + '-input'}
                                    type={localProps.columnDef.type}
                                    value={localProps.value}
                                    locale={ptBRLocale}
                                    onChange={localProps.onChange}
                                />
                            )
                        }

                        if (localProps.columnDef.type === 'numeric') {
                            const error = getErrors(localProps.columnDef.field)

                            return renderMaskField(localProps, error)
                        }

                        if (
                            localProps.columnDef.field ===
                                props.autoCompleteField &&
                            props.autoCompleteSuggestions
                        ) {
                            return renderAutoComplete(localProps)
                        }

                        return (
                            <MTableEditField
                                data-testid='mui-input'
                                role={`${localProps.columnDef.field}-input`}
                                name={localProps.columnDef.field + '-input'}
                                {...localProps}
                            />
                        )
                    },
                    ...pagination,
                    ...toolbar
                }}
                localization={getLocalization(props.title)}
                icons={{
                    Add: forwardRef(() => renderAddComponent),
                    Delete: forwardRef(() => (
                        <IconRemove
                            name='row-remove'
                            color={props.color || 'primary'}
                        />
                    )),
                    Check: forwardRef(() => (
                        <IconDone
                            name='confirm-row-edit'
                            color={props.color || 'primary'}
                        />
                    )),
                    Clear: forwardRef(() => (
                        <IconClear
                            name='cancel-row-edit'
                            color={props.color || 'primary'}
                        />
                    )),
                    Edit: forwardRef(() => (
                        <IconEdit
                            name='row-edit'
                            color={props.color || 'primary'}
                        />
                    )),
                    FirstPage: forwardRef(() => (
                        <IconFirstPage color={props.color || 'primary'} />
                    )),
                    PreviousPage: forwardRef(() => (
                        <IconChevronLeft color={props.color || 'primary'} />
                    )),
                    LastPage: forwardRef(() => (
                        <LastPage color={props.color || 'primary'} />
                    )),
                    NextPage: forwardRef(() => (
                        <IconChevronRight
                            data-testid='next-page'
                            color={props.color || 'primary'}
                        />
                    ))
                }}
                style={{
                    display: 'flex',
                    border: '1px solid #CED4DE',
                    boxShadow: 'none',
                    height: props.noRowsExpand ? '270px' : undefined,
                    justifyContent: 'space-between',
                    flexDirection: 'column'
                }}
                columns={props.columns || []}
                data={props.data ?? []}
                options={{
                    search: false,
                    draggable: false,
                    sorting: false,
                    showTitle: false,
                    addRowPosition: 'first',
                    actionsColumnIndex: 4,
                    toolbarButtonAlignment: 'left',
                    padding: 'dense',
                    rowStyle: {
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                    },
                    headerStyle: { borderBottom: '2px #CED4DE solid' },
                    ...props.options
                }}
                editable={{
                    onRowUpdate: props.onUpdateRow,
                    onRowAdd: props.onAddRow,
                    onRowDelete: props.onDeleteRow,
                    onRowAddCancelled: props.onRowAddCancelled,
                    onRowUpdateCancelled: props.onRowUpdateCancelled
                }}
            />
        </div>
    )
}

export default EditableTable
