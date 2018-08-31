import { List as MuiList, ListSubheader } from '@material-ui/core'
import React from 'react'
import ListItem, { IProps as IListItem } from './ListItem'

interface IProps {
    title?: string
    onlyIcons?: boolean
    options?: IListItem[]
    style?: object
    onClick?: (name: string) => {}
}

const List = ({ title, options = [], style, onlyIcons, onClick }: IProps) =>
    <MuiList
        subheader={ title && <ListSubheader>{ title }</ListSubheader> }
        style={ style }>
        {
            options.map((option, index) =>
                <ListItem
                    { ...option }
                    key={ index }
                    onlyIcon={ onlyIcons }
                    onClick={ onClick }
                />
            )
        }
    </MuiList>

export default List
