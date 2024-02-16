import React from 'react'
import type { ReactElement } from 'react'
import { Fade as MuiFade } from '@material-ui/core'
import type { DefaultProps } from '../../types'

export interface FadeProps extends DefaultProps {
    in: boolean
    timeout?: number | { enter?: number; exit?: number }
    children: ReactElement<Record<string, unknown>>
}

const Fade = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: FadeProps) => (
    <MuiFade style={{ padding, margin, ...style }} {...otherProps}>
        {children}
    </MuiFade>
)

export default Fade
