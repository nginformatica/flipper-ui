import {
    Divider as MuiDivider,
    DividerProps as MuiDividerProps
} from '@material-ui/core'
import React from 'react'
import { DefaultProps } from '../../types'

export interface DividerProps extends DefaultProps, MuiDividerProps {
    'data-testid'?: string
}

export const Divider = ({
    margin,
    padding,
    style = {},
    ...otherProps
}: DividerProps) => (
    <MuiDivider {...otherProps} style={{ margin, padding, ...style }} />
)

export default Divider
