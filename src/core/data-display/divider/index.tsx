import { Divider as MuiDivider } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from '../../types'

export interface DividerProps extends DefaultProps {
    inset?: boolean
    light?: boolean
    'data-testid'?: string
}

const Divider = ({
    margin,
    padding,
    style = {},
    ...otherProps
}: DividerProps) => (
    <MuiDivider {...otherProps} style={{ margin, padding, ...style }} />
)

export default Divider
