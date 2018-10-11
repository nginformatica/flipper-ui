import { Tooltip as MuiTooltip } from '@material-ui/core'
import React, { ReactElement } from 'react'
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
    children: ReactElement<any>
}

const Tooltip: React.SFC<IProps> = ({ children, placement, title, open, ...otherProps }) =>
    <MuiTooltip
        { ...otherProps }
        title={ title }
        placement={ placement }
        open={ open }>
        { children }
    </MuiTooltip>

export default Tooltip
