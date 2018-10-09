import { Divider as MuiDivider } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
  absolute?: boolean
  inset?: boolean
  light?: boolean
}

const Divider: React.SFC<IProps> = ({ margin, padding, style = {}, ...otherProps })  =>
    <MuiDivider
        {...otherProps}
        style={ { margin, padding, ...style } }>
    </MuiDivider>

export default Divider
