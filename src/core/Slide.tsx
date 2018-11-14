import { Slide as MuiSlide } from '@material-ui/core'
import React, { SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: React.ReactElement<{}>
    in: boolean
    direction: 'left' | 'right' | 'up' | 'down'
    timeout?: number | { enter?: number, exit?: number }
}

const Slide: SFC<IProps> = ({
    children,
    direction = 'down',
    margin,
    padding,
    style = {},
    ...otherProps
}) =>
    <MuiSlide
        direction={ direction }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiSlide>

export default Slide
