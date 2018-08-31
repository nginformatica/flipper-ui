import {
    ListItem as MuiListItem,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText
} from '@material-ui/core'
import React from 'react'

export interface IProps {
    style?: object
    icon?: React.ReactElement<any>
    action?: React.ReactElement<any>
    name?: string
    title?: string
    subtitle?: string
    onlyIcon?: boolean
    onClick?: (name) => {}
}

const ListItem = ({ action, icon, title, subtitle, name, onClick, onlyIcon, style }: IProps) =>
    <MuiListItem
        button
        style={ style }
        onClick={ () => onClick!(name) }>
        {
            icon && (
                <MuiListItemIcon>
                    { icon }
                </MuiListItemIcon>
            )
        }
        {
            !onlyIcon && (
                <MuiListItemText
                    primary={ title }
                    secondary={ subtitle }
                />
            )
        }
        {
            !onlyIcon && action && (
                <MuiListItemSecondaryAction>
                    { icon }
                </MuiListItemSecondaryAction>
            )
        }
    </MuiListItem>

export default ListItem
