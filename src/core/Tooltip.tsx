import { Tooltip as MuiTooltip } from '@material-ui/core'
import React, { ReactElement, CSSProperties } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
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
    title: React.ReactNode
    withWrapper?: boolean
    wrapperStyle?: CSSProperties
    onClose?: () => void
    onOpen?: () => void
    open?: boolean
    children: ReactElement<{}>
    enterDelay?: number
}

const Tooltip = ({
    children,
    withWrapper,
    wrapperStyle,
    enterDelay = 1000,
    title,
    ...otherProps
}: IProps) =>
    <MuiTooltip title={ title || '' } enterDelay={ enterDelay } { ...otherProps }>
        {
            withWrapper
                ? (
                    <div
                        style={ {
                            display: 'inherit',
                            ...wrapperStyle
                        } }>
                        { children }
                    </div>
                )
                : children
        }
    </MuiTooltip>

export default Tooltip
