import React from 'react'
import { Divider as MuiDivider } from '@material-ui/core'
import type { DefaultProps } from '../../types'
import type { DividerProps as MuiDividerProps } from '@material-ui/core'

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
