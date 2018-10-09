import { Divider as MuiDivider } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
  absolute: boolean
}

const Divider: React.SFC<IProps> = ({  })  =>
    <MuiDivider>
    </MuiDivider>

export default Divider
