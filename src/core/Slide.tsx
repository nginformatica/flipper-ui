import { Slide as MuiSlide } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from './types'

interface SlideProps extends DefaultProps {
    in: boolean
    direction: 'left' | 'right' | 'up' | 'down'
    timeout?: number | { enter?: number; exit?: number }
    children?: React.ReactElement<{}>
}

const Slide = ({
    children,
    direction = 'down',
    margin,
    padding,
    style = {},
    ...otherProps
}: SlideProps) => (
    <MuiSlide
        direction={direction as 'down'}
        style={{ padding, margin, ...style }}
        {...otherProps}>
        {children}
    </MuiSlide>
)

export default Slide
