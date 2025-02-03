import React from 'react'
import type { ReactElement, CSSProperties, ReactNode } from 'react'
import MuiTooltip from '@mui/material/Tooltip'
import type { DefaultProps } from '../../types'
import type { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip'

export interface TooltipProps extends DefaultProps, MuiTooltipProps {
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
    zIndex?: number
}

const Tooltip = ({
    title,
    zIndex,
    children,
    withWrapper,
    wrapperStyle,
    enterDelay = 1000,
    ...otherProps
}: TooltipProps) => (
    <MuiTooltip
        title={title || ''}
        enterDelay={enterDelay}
        slotProps={{
            popper: {
                sx: {
                    zIndex: zIndex || 9999
                }
            }
        }}
        {...otherProps}>
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
