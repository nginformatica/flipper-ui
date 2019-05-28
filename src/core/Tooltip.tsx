import { Tooltip as MuiTooltip } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'
import { Omit } from 'ramda'

interface IProps extends Omit<IDefault, 'ref'> {
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

const Tooltip: FC<IProps> = ({ children, ...otherProps }) =>
    <MuiTooltip
        { ...otherProps }>
        { children }
    </MuiTooltip>

export default Tooltip
