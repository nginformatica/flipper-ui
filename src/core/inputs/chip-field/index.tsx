import React, { useMemo } from 'react'
import type { ReactNode } from 'react'
import ChipInput from 'material-ui-chip-input'
import { styled } from 'styled-components'
import type { InputLabelProps } from '@material-ui/core'
import type { ChipRenderer } from 'material-ui-chip-input'

export interface ChipFieldProps<T extends TChipValues> {
    allowDuplicates?: boolean
    values: T[]
    variant?: 'outlined' | 'standard' | 'filled'
    disabled?: boolean
    fullWidth?: boolean
    fullWidthInput?: boolean
    InputLabelProps?: InputLabelProps
    label?: ReactNode
    placeholder?: string
    readOnly?: boolean
    error?: boolean
    chipRenderer?: ChipRenderer
    onAdd: (values: string) => void
    onDelete: (value: string, index?: number) => void
}

export type TChipValues = {
    value: string | number
}

const StyledChipInput = styled(ChipInput)`
    & > div > div {
        padding: 0px !important;
    }
    & > div > div > div {
        margin: 2px;
    }
    & > label {
        top: -6px !important;
        font-size: 14px !important;
    }
    & > label.MuiInputLabel-shrink {
        top: 0px !important;
    }
    & > div > div > input {
        padding: 10px !important;
        font-size: 14px !important;
    }
`

export const ChipField = <T extends TChipValues>(props: ChipFieldProps<T>) => {
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
