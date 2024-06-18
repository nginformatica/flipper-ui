import React from 'react'
import type { ChangeEvent, ReactNode } from 'react'
import { Clear } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import MuiSelect from '@mui/material/Select'
import { makeStyles } from '@mui/styles'
import type { DefaultProps } from '../../types'
import type { SelectChangeEvent, SelectProps } from '@mui/material/Select'

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
            | SelectChangeEvent<unknown>
    ) => void
}

const renderEndAdornment = (onClear?: () => void) => (
    <InputAdornment position='end'>
        <IconButton
            role='end-adornment-component'
            size='small'
            onClick={onClear}>
            <Clear style={{ fontSize: '15px' }} />
        </IconButton>
    </InputAdornment>
)

const useStyles = makeStyles((hasClear?: boolean) => ({
    select: {
        padding: `8px 24px 8px ${hasClear ? '18' : '10'}px`
    },
    iconOutlined: hasClear
        ? {
              right: '2px',
              position: 'relative',
              marginLeft: '-22px'
          }
        : { right: '2px' }
}))

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
    const classes = useStyles({ hasClear })

    const handleChange = (
        event:
            | ChangeEvent<HTMLSelectElement | HTMLInputElement>
            | SelectChangeEvent<unknown>
    ) => {
        onChange(event)
    }

    const hasValue = !!otherProps.value

    const endAdornment =
        hasValue && hasClear
            ? { endAdornment: renderEndAdornment(onClear) }
            : {}

    return (
        <MuiSelect
            inputProps={{ 'data-testid': 'select-input' }}
            variant={variant}
            classes={{
                select: classes.select,
                icon: classes.iconOutlined
            }}
            style={{ margin, padding, ...style }}
            onChange={handleChange}
            {...endAdornment}
            {...otherProps}>
            {children}
        </MuiSelect>
    )
}

export default Select
