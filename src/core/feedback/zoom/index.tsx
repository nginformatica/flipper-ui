import React from 'react'
import type { ReactElement } from 'react'
import { Zoom as MuiZoom } from '@material-ui/core'
import type { DefaultProps } from '../../types'

export interface ZoomProps extends DefaultProps {
    in: boolean
    timeout?: number | { enter?: number; exit?: number }
    children?: ReactElement<Record<string, unknown>>
}

export const Zoom = ({
    children,
    padding,
    margin,
    style = {},
    ...otherProps
}: ZoomProps) => (
    <MuiZoom style={{ padding, margin, ...style }} {...otherProps}>
        {children}
    </MuiZoom>
)

export default Zoom
