import React from 'react'
import MuiDivider from '@mui/material/Divider'
import type { DefaultProps } from '../../types'
import type { DividerProps } from '@mui/material/Divider'

export interface IDividerProps extends DefaultProps, DividerProps {
    'data-testid'?: string
}

const Divider = ({
    margin,
    padding,
    style = {},
    ...otherProps
}: IDividerProps) => (
    <MuiDivider {...otherProps} style={{ margin, padding, ...style }} />
)

export default Divider
