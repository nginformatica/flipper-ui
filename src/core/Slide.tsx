import { Slide as MuiSlide } from '@material-ui/core'
import React, { ReactElement, FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: ReactElement<{}>
    in: boolean
    direction: 'left' | 'right' | 'up' | 'down'
    timeout?: number | { enter?: number, exit?: number }
}

const Slide: FC<IProps> = ({
    children,
    direction = 'down',
    margin,
    padding,
    style = {},
    ...otherProps
}) =>
    <MuiSlide
        direction={ direction as 'down' }
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiSlide>

export default Slide
