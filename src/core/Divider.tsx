import { Divider as MuiDivider } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from './types'

interface DividerProps extends DefaultProps {
    inset?: boolean
    light?: boolean
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
