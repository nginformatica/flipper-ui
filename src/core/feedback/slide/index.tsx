import { Slide as MuiSlide } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from '../../types'

export interface SlideProps extends DefaultProps {
    in: boolean
    direction: 'left' | 'right' | 'up' | 'down'
    timeout?: number | { enter?: number; exit?: number }
    children?: React.ReactElement<Record<string, unknown>>
}

const Slide = ({
    children,
    direction,
    margin,
    padding,
    style = {},
    ...otherProps
}: SlideProps) => (
    <MuiSlide
        direction={direction}
        style={{ padding, margin, ...style }}
        {...otherProps}>
        {children}
    </MuiSlide>
)

export default Slide
