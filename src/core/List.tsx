import {
    List as MuiList,
    ListSubheader as MuiListHeader
} from '@material-ui/core'
import React from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    title?: string
    children?: React.ReactNode
}

const List: React.SFC<IProps> = ({ title, padding, margin, style = {}, children, className }) =>
    <MuiList
        subheader={
            title
                ? <MuiListHeader>{ title }</MuiListHeader>
                : undefined
        }
        className={ className }
        style={ { padding, margin, ...style } }>
        { children }
    </MuiList>

export default List
