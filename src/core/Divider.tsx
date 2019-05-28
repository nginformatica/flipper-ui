import { Divider as MuiDivider } from '@material-ui/core'
import React, { FC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    inset?: boolean
    light?: boolean
}

const Divider: FC<IProps> = ({ margin, padding, style = {}, ...otherProps }) =>
    <MuiDivider
        { ...otherProps }
        style={ { margin, padding, ...style } }
    />

export default Divider
