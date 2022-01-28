import {
    IconButton,
    InputAdornment,
    Select as MuiSelect
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Clear } from '@material-ui/icons'
import React, { ChangeEvent, FC } from 'react'
import { DefaultProps } from './types'

interface SelectProps extends DefaultProps {
    autoWidth?: boolean
    value?: string | number
    multiple?: boolean
    variant?: 'standard' | 'outlined' | 'filled'
    hasClear?: boolean
    onClear?: () => void
    onClose?: () => void
    onChange?: (
        event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => void
}

const iconStyle = {
    right: '2px'
}

const renderEndAdornment = (onClear?: () => void) => {
    return (
        <InputAdornment position='end'>
            <IconButton onClick={ onClear } size='small'>
                <Clear style={ { fontSize: '15px' } } />
            </IconButton>
        </InputAdornment>
    )
}

const Select: FC<SelectProps> = ({
    children,
    style = {},
    margin,
    padding,
    hasClear,
    onClear,
    variant = 'outlined',
    ...otherProps
}) => {
    const useStyles = makeStyles(() => ({
        root: {
            padding: `10px 24px 10px ${hasClear ? '20' : '12'}px`
        },
        iconOutlined: hasClear
            ? { ...iconStyle, position: 'relative', marginLeft: '-20px' }
            : iconStyle
    }))
    const classes = useStyles()

    const hasValue = !!otherProps.value

    return (
        <MuiSelect
            { ...hasValue &&
                hasClear && { endAdornment: renderEndAdornment(onClear) } }
            variant={ variant as 'outlined' }
            classes={ {
                root: classes.root,
                icon: classes.iconOutlined
            } }
            style={ { margin, padding, ...style } }
            { ...otherProps }>
            { children }
        </MuiSelect>
    )
}

export default Select
