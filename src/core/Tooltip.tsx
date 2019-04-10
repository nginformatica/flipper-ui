import { Tooltip as MuiTooltip } from '@material-ui/core'
import React, { ReactElement, SFC } from 'react'
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
    title: string
    onClose?: () => void
    onOpen?: () => void
    open?: boolean
    children: JSX.Element
    enterDelay?: number
}

const Tooltip: SFC<IProps> = ({ children, ...otherProps }) =>
    <MuiTooltip
        { ...otherProps }>
        { children }
    </MuiTooltip>

export default Tooltip
