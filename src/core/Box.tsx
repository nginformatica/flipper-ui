import React, { ReactNode, SFC } from 'react'
import { IDefault } from './Advertise'
import Paper from './Paper'

interface IProps extends IDefault {
    minHeight?: number
    children?: ReactNode
}

const Box: SFC<IProps> = ({
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
