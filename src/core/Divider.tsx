import { Divider as MuiDivider } from '@material-ui/core'
import React, { SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    inset?: boolean
    light?: boolean
}

const Divider: SFC<IProps> = ({ margin, padding, style = {}, ...otherProps }) =>
    <MuiDivider
        { ...otherProps }
        style={ { margin, padding, ...style } }
    />

export default Divider
