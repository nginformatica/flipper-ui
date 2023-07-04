import {
    IconButton,
    InputAdornment,
    Select as MuiSelect,
    SelectProps as MuiSelectProps
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Clear } from '@material-ui/icons'
import React, { ChangeEvent } from 'react'
import { DefaultProps } from '../../types'

export interface SelectProps
    extends DefaultProps,
        Omit<MuiSelectProps, 'margin' | 'value' | 'event' | 'onChange'> {
    autoWidth?: boolean
    value?: string | number
    multiple?: boolean
    variant?: 'standard' | 'outlined' | 'filled'
    hasClear?: boolean
    children: React.ReactNode
    onClear?: () => void
    onClose?: () => void
    onChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

const iconStyle = {
    right: '2px'
}

const renderEndAdornment = (onClear?: () => void) => (
    <InputAdornment position='end'>
        <IconButton
            role='end-adornment-component'
            onClick={onClear}
            size='small'>
            <Clear style={{ fontSize: '15px' }} />
        </IconButton>
    </InputAdornment>
)

export const Select = ({
    children,
    style = {},
    margin,
    padding,
    hasClear,
    onClear,
    onChange,
    variant = 'outlined',
    ...otherProps
}: SelectProps) => {
    const useStyles = makeStyles(() => ({
        root: {
            padding: `10px 24px 10px ${hasClear ? '20' : '12'}px`
        },
        iconOutlined: hasClear
            ? { ...iconStyle, position: 'relative', marginLeft: '-20px' }
            : iconStyle
    }))
    const classes = useStyles()

    const handleChange = (
        event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
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
            {...endAdornment}
            onChange={handleChange}
            inputProps={{ 'data-testid': 'select-input' }}
            variant={variant as 'outlined'}
            classes={{
                root: classes.root,
                icon: classes.iconOutlined
            }}
            style={{ margin, padding, ...style }}
            {...otherProps}>
            {children}
        </MuiSelect>
    )
}

export default Select