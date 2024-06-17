import React from 'react'
import type { ReactElement } from 'react'
import MuiFade from '@mui/material/Fade'
import type { DefaultProps } from '../../types'
import type { FadeProps } from '@mui/material/Fade'

export interface IFadeProps extends DefaultProps, FadeProps {
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
}: IFadeProps) => (
    <MuiFade style={{ padding, margin, ...style }} {...otherProps}>
        <div>{children}</div>
    </MuiFade>
)

export default Fade
