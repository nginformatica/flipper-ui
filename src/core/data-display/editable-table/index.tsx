/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useRef } from 'react'
import type { MouseEvent } from 'react'
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
} from '@mui/icons-material'
import ptBRLocale from 'date-fns/locale/pt-BR'
import MaterialTable, {
    MTableEditField,
    MTableAction,
    MTablePagination,
    MTableActions
} from 'material-table'
import { omit, contains, propOr } from 'ramda'
import type { Column, Options } from 'material-table'
import ListItem from '@/core/data-display/list-item'
import { default as AutoComplete } from '@/core/inputs/auto-complete'
import Button from '@/core/inputs/button'
import { DateTime } from '@/core/inputs/date-time'
import MaskField from '@/core/inputs/mask-field'
import { TextField } from '@/core/inputs/text-field'
import { getLocalization } from '@/lib/localization'
import {
    AddRowButton,
    AddRowText,
    Container,
    CustomRemove,
    CustomRows,
    FullWidthButton,
    RightPagination,
    Wrapper
} from './styles'

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
    onRowClick?: (event?: MouseEvent, rowData?: T) => void
    onUpdateRow?: (newData: object, oldData?: object) => Promise<void>
    onDeleteRow?: (newData: object, oldData?: object) => Promise<void>
    onAddRow?: (oldData: object) => Promise<void>
    onRowAddCancelled?: (newData: object) => Promise<void>
    onRowUpdateCancelled?: (newData: object) => Promise<void>
    onClickAdd?(): void
}

export type TSuggestion = { label: string; value: string }

const handlePagination = (
    paginationInfo?: boolean,
    noRowsExpand?: boolean,
    title?: string
) => {
    const pagination = !paginationInfo
        ? { Pagination: () => null }
        : noRowsExpand && {
              Pagination: (item: any) => (
                  <RightPagination data-id='pagination'>
                      <MTablePagination
                          {...omit(['classes'], item)}
                          localization={getLocalization(title).pagination}
                      />
                  </RightPagination>
              )
          }

    return pagination
}

const EditableTable = <T extends object>(props: EditableTableProps<T>) => {
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

    const toolbar = props.noHeader && { Toolbar: () => null }

    const renderAutoComplete = (inputProps: any) => (
        <AutoComplete
            openOnFocus
            selectTextOnFocus
            data-testid='autocomplete-container'
            value={inputProps.value}
            suggestions={propOr([], 'autoCompleteSuggestions', props)}
            renderSuggestion={(item: TSuggestion, props, selected) => (
                <ListItem key={item.value} selected={selected} {...props}>
                    {item.label}
                </ListItem>
            )}
            renderInput={itemProps => (
                <TextField
                    fullWidth
                    error={getErrors(inputProps.columnDef.field as string)}
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
            onChange={inputProps.onChange}
        />
    )

    return (
        <Container>
            <MaterialTable
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

                        const isToolbar =
                            localProps.action &&
                            'position' in localProps.action &&
                            localProps.action.position === 'toolbar'

                        if (isToolbar) {
                            return renderToolbarButton()
                        }

                        return renderActionButton()
                    },
                    EditField: localProps => {
                        if (localProps.columnDef.type === 'datetime') {
                            return (
                                <DateTime
                                    error={
                                        props.errors
                                            ? getErrors(
                                                  localProps.columnDef
                                                      .field as string
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
                            const error = getErrors(
                                localProps.columnDef.field as string
                            )

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
                    ...handlePagination(
                        props.paginationInfo,
                        props.noRowsExpand,
                        props.title
                    ),
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
                onRowClick={props.onRowClick}
            />
        </Container>
    )
}

export default EditableTable
