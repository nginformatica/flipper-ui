import { ExpansionPanelDetails } from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: React.ReactNode
}

const AccordionDetails: React.SFC<IProps> = ({
    children,
    margin,
    padding,
    style,
    ...otherProps
}) =>
    <ExpansionPanelDetails
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </ExpansionPanelDetails>

export default AccordionDetails
