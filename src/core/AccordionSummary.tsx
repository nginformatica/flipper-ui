import { ExpansionPanelSummary } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    expandIcon?: boolean
    children?: React.ReactNode
}

const AccortionSummary: React.SFC<IProps> = ({
    children,
    margin,
    padding,
    style,
    ...otherProps
}) =>
    <ExpansionPanelSummary
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </ExpansionPanelSummary>

export default AccortionSummary
