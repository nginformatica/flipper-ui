import React from 'react'
import type { ReactElement, CSSProperties, ReactNode } from 'react'
import { Tooltip as MuiTooltip } from '@material-ui/core'
import type { DefaultProps } from '../../types'

export interface TooltipProps extends DefaultProps {
    placement?:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top'
    title: ReactNode
    withWrapper?: boolean
    wrapperStyle?: CSSProperties
    onClose?: () => void
    onOpen?: () => void
    open?: boolean
    children: ReactElement<Record<string, unknown>>
    enterDelay?: number
}

const Tooltip = ({
    children,
    withWrapper,
    wrapperStyle,
    enterDelay = 1000,
    title,
    ...otherProps
}: TooltipProps) => (
    <MuiTooltip title={title || ''} enterDelay={enterDelay} {...otherProps}>
        {withWrapper ? (
            <div
                style={{
                    display: 'inherit',
                    ...wrapperStyle
                }}>
                {children}
            </div>
        ) : (
            children
        )}
    </MuiTooltip>
)

export default Tooltip
