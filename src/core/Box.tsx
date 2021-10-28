import React, { FC } from 'react'
import type { DefaultProps } from './types'
import Paper from './Paper'

interface BoxProps extends DefaultProps {
    minHeight?: number
}

const Box: FC<BoxProps> = ({
    children,
    margin,
    padding = 18,
    style = {},
    minHeight = 400,
    ...otherProps
}) =>
    <Paper
        padding={ padding }
        margin={ margin }
        style={ { minHeight, ...style } }
        { ...otherProps }>
        { children }
    </Paper>

export default Box
