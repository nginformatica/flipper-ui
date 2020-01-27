import { Select as MuiSelect } from '@material-ui/core'
import React, { ChangeEvent, FC } from 'react'
import { IDefault } from './Advertise'
import { makeStyles } from '@material-ui/core/styles'

interface IProps extends IDefault {
    autoWidth?: boolean
    value?: string | number
    multiple?: boolean
    variant?: 'standard' | 'outlined' | 'filled'
    onClose?: () => void
    onChange?: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

const useStyles = makeStyles(() => ({
    root: {
        padding: '10px 24px 10px 12px'
    },
    iconOutlined: {
        right: '2px'
    }
}))

const Select: FC<IProps> = ({
    children,
    style = {},
    margin,
    padding,
    variant = 'outlined',
    ...otherProps
}) => {
    const classes = useStyles()

    return (
        <MuiSelect
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
