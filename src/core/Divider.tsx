import { Divider as MuiDivider } from '@material-ui/core'
import React, { FC } from 'react'
import { DefaultProps } from './types'

interface DividerProps extends DefaultProps {
    inset?: boolean
    light?: boolean
}

const Divider: FC<DividerProps> = ({
    margin,
    padding,
    style = {},
    ...otherProps
}) => <MuiDivider {...otherProps} style={{ margin, padding, ...style }} />

export default Divider
