import React, { useMemo } from 'react'
import type { ReactNode } from 'react'
import type { ChipRenderer } from 'material-ui-chip-input'
import { StyledChipInput } from './styles'

export interface ChipFieldProps {
    allowDuplicates?: boolean
    values: {
        value: string | number
    }[]
    variant?: 'outlined' | 'standard' | 'filled'
    disabled?: boolean
    fullWidth?: boolean
    fullWidthInput?: boolean
    InputLabelProps?: object
    label?: ReactNode
    placeholder?: string
    readOnly?: boolean
    error?: boolean
    chipRenderer?: ChipRenderer
    onAdd: (values: string) => void
    onDelete: (value: string, index?: number) => void
}

const ChipField = (props: ChipFieldProps) => {
    const values = useMemo(
        () => props.values.map(item => item.value),
        [props.values]
    )

    return (
        <StyledChipInput
            {...props}
            alwaysShowPlaceholder
            id='chip-field-root'
            value={values}
        />
    )
}

export default ChipField
