import { Tooltip as MuiTooltip } from '@material-ui/core'
import React, { FC, ReactElement } from 'react'
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
    children: ReactElement<{}>
    enterDelay?: number
}

const Tooltip: FC<IProps> = ({ children, ...otherProps }) =>
    <MuiTooltip
        { ...otherProps }>
        <div>
            { children }
        </div>
    </MuiTooltip>

export default Tooltip
