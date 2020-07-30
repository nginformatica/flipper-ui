import { Slide as MuiSlide } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    in: boolean
    direction: 'left' | 'right' | 'up' | 'down'
    timeout?: number | { enter?: number, exit?: number }
    children?: React.ReactElement<{}>
}

const Slide = ({
    children,
    direction = 'down',
    margin,
    padding,
    style = {},
    ...otherProps
}: IProps) =>
    <MuiSlide
        direction={ direction as 'down' }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiSlide>

export default Slide
