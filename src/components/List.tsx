import {
    List as MuiList,
    ListSubheader as MuiListHeader
} from '@material-ui/core'
import React from 'react'

interface IProps {
    title?: string
    children?: React.ReactNode
    style?: object
}

const List = ({ title, style, children }: IProps) =>
    <MuiList
        subheader={ title && <MuiListHeader>{ title }</MuiListHeader> }
        style={ style }>
        { children }
    </MuiList>

export default List
