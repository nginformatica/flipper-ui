import React, { FC } from 'react'
import { IDefault } from './Advertise'
import Paper from './Paper'

interface IProps extends IDefault {
    minHeight?: number
}

const Box: FC<IProps> = ({
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
