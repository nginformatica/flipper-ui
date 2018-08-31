import { List as MuiList, ListSubheader } from '@material-ui/core'
import React from 'react'

interface IProps {
    title?: string
    children?: React.ReactNode
    style?: object
}

const List = ({ title, style, children }: IProps) =>
    <MuiList
        subheader={ title && <ListSubheader>{ title }</ListSubheader> }
        style={ style }>
        { children }
    </MuiList>

export default List
