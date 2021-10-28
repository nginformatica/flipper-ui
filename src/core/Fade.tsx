import { Fade as MuiFade } from '@material-ui/core'
import React from 'react'
import { DefaultProps } from './types'

interface FadeProps extends DefaultProps {
    in: boolean
    timeout?: number | { enter?: number, exit?: number }
    children?: React.ReactElement<{}>
}

const Fade = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: FadeProps) =>
    <MuiFade
        style={ { padding, margin, ...style } }
        { ...otherProps }>
        { children }
    </MuiFade>

export default Fade
