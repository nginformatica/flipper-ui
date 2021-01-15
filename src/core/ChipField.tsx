import React from 'react'
import ChipInput, { ChipRenderer } from 'material-ui-chip-input'
import { InputLabelProps } from '@material-ui/core'

interface IProps<T extends TChipValues> {
  allowDuplicates?: boolean
  values: T[]
  variant?: 'outlined' | 'standard' | 'filled'
  disabled?: boolean
  fullWidth?: boolean
  fullWidthInput?: boolean
  InputLabelProps?: InputLabelProps
  label?: React.ReactNode
  placeholder?: string
  readOnly?: boolean
  chipRenderer?: ChipRenderer
  onAdd: (values: T[]) => void;
  onDelete: (value: T, index: number) => void;
}

export type TChipValues = {
  value: string | number
}

const ChipField = <T extends TChipValues>(props: IProps<T>) => {
    const values = props.values.map(item => item.value)

    return (
        <ChipInput
            { ...props }
            alwaysShowPlaceholder
            value={ values }
        />
    )
}

export default ChipField
