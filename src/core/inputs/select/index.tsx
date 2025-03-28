import React from 'react'
import type { ChangeEvent, ReactNode } from 'react'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import MuiSelect from '@mui/material/Select'
import type { DefaultProps } from '../../types'
import type { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { IconClose } from '@/icons/mui'

export interface ISelectProps
    extends DefaultProps,
        Omit<SelectProps, 'margin' | 'value' | 'event' | 'onChange'> {
    autoWidth?: boolean
    value?: string | number
    multiple?: boolean
    variant?: 'standard' | 'outlined' | 'filled'
    hasClear?: boolean
    children: ReactNode
    onClear?: () => void
    onClose?: () => void
    onChange: (
        event:
            | ChangeEvent<HTMLSelectElement | HTMLInputElement>
            | SelectChangeEvent<unknown>,
        child?: ReactNode
    ) => void
}

const renderEndAdornment = (onClear?: () => void) => (
    <InputAdornment position='end' style={{ paddingRight: '12px' }}>
        <IconButton
            role='end-adornment-component'
            size='small'
            onClick={onClear}>
            <IconClose sx={{ fontSize: '15px' }} />
        </IconButton>
    </InputAdornment>
)

const Select = ({
    children,
    style = {},
    margin,
    padding,
    hasClear,
    onClear,
    onChange,
    variant = 'outlined',
    ...otherProps
}: ISelectProps) => {
    const handleChange = (
        event:
            | ChangeEvent<HTMLSelectElement | HTMLInputElement>
            | SelectChangeEvent<unknown | string>,
        child?: ReactNode
    ) => {
        onChange(event, child)
    }

    const hasValue = !!otherProps.value

    const endAdornment =
        hasValue && hasClear
            ? { endAdornment: renderEndAdornment(onClear) }
            : {}

    return (
        <MuiSelect
            size='small'
            variant={variant}
            inputProps={{ 'data-testid': 'select-input' }}
            style={{ margin, padding, ...style }}
            onChange={handleChange}
            {...endAdornment}
            {...otherProps}>
            {children}
        </MuiSelect>
    )
}

export default Select
