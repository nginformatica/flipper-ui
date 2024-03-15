import type { CSSProperties, FunctionComponent } from 'react'
import type { IOption } from '@/core/inputs/text-field'

export type RecordUnknown = Record<string, unknown>
export type StackView = RecordUnknown
export type Identifier = string | number

export interface Data extends RecordUnknown {
    id: Identifier
}

export type PartialData<D extends RecordUnknown> = Partial<D> & {
    id: Identifier
}

export type ColumnType =
    | 'datetime'
    | 'text'
    | 'number'
    | 'numeric-float'
    | 'numeric-int'

export type Align = 'right' | 'left' | 'center' | 'justify' | 'inherit'

type ColumnSpecBase<F = object> = {
    title: string
    type: string
    cellStyle?: CSSProperties
    headerStyle?: CSSProperties
    align?: Align
    renderCell?: FunctionComponent<F>
}

export type RenderCellProps<D extends Data> = {
    data: D
    rowMode: RowMode
    value: unknown
    hasError?: boolean
    isNew?: boolean
}

interface ColumnSpecDefault<D extends Data>
    extends ColumnSpecBase<RenderCellProps<PartialData<D>>> {
    type: ColumnType
    field: keyof D
    editable?: boolean
    options?: string | IOption[]
    getValue?(value: unknown): string
}

export type ActionsCellProps<D extends Data> = {
    data: PartialData<D>
    rowMode: RowMode
    isNew?: boolean
}

interface ColumnSpecActions<D extends Data>
    extends ColumnSpecBase<ActionsCellProps<D>> {
    type: 'actions'
    renderCell: FunctionComponent<ActionsCellProps<D>>
}

export type ColumnSpec<D extends Data> =
    | ColumnSpecDefault<D>
    | ColumnSpecActions<D>

export type PaginationOptions = {
    rowsPerPage: number
    labelRowsPerPage: string
    labelDisplayedRows: (param: {
        from: number
        to: number
        count: number
    }) => string
    rowsPerPageOptions: number[]
    showFirstButton?: boolean
    showLastButton?: boolean
    disabled: boolean
    clickable: boolean
}

export type RowAction<D> = {
    type: 'add' | 'delete' | 'update'
    data: D
}

export enum RowMode {
    Hide,
    View,
    Edit
}

export type RowState<D extends Data, S extends StackView> = {
    mode: RowMode
    stackView: (keyof S)[]
    currentState?: D
    editableState: Partial<D>
}

export type RowViewComponent<D> = FunctionComponent<{
    popRowView?: () => void
    data: D
}>

export type DataTableController<D extends Data, V extends StackView> = {
    editRow(id: Identifier): void
    viewRow(id: Identifier): void
    hideRow(id: Identifier): void
    addRow(data: PartialData<D>): void
    getEditedRowData(id: Identifier): PartialData<D>
    getRowData(id: Identifier): { edited: PartialData<D>; current?: D }
    pushRowView(id: Identifier, view: keyof V): void
    popRowView(id: Identifier): void
}

export type Errors<D> = Partial<Record<Identifier, Set<keyof D>>>
