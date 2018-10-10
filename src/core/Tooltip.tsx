import { Tooltip as  MuiTooltip } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    leaveDelay?: number
}

const Tooltip: React.SFC<IProps> = ({ children, margin, padding, style = {}, ...otherProps })  =>
    <MuiTooltip title='hello'>
        <h1>context, aqui é neto</h1>
    </MuiTooltip>

export default Tooltip
