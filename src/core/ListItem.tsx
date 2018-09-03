import {
    ListItem as MuiListItem,
    ListItemIcon as MuiListItemIcon,
    ListItemSecondaryAction as MuiListItemSecondaryAction,
    ListItemText as MuiListItemText
} from '@material-ui/core'
import React, { Component, Fragment } from 'react'

interface IProps {
    style?: object
    icon?: React.ReactElement<any>
    action?: React.ReactElement<any>
    name?: string
    title?: string
    subtitle?: string
    iconOnly?: boolean
    value?: string | number
    children?: React.ReactNode
    onClick?: (name) => {}
}

class ListItem extends Component<IProps> {
    public renderCustomItem() {
        const { action, icon, title, subtitle, iconOnly } = this.props

        return (
            <Fragment>
                {
                    icon && (
                        <MuiListItemIcon>
                            { icon }
                        </MuiListItemIcon>
                    )
                }
                {
                    !iconOnly && (
                        <MuiListItemText
                            primary={ title }
                            secondary={ subtitle }
                        />
                    )
                }
                {
                    !iconOnly && action && (
                        <MuiListItemSecondaryAction>
                            { action }
                        </MuiListItemSecondaryAction>
                    )
                }
            </Fragment>
        )
    }

    public render() {
        const { children, value, style, onClick } = this.props

        return (
            <MuiListItem
                button
                value={ value }
                style={ style }
                onClick={ () => onClick!(name) }>
                { children ? children : this.renderCustomItem() }
            </MuiListItem>
        )
    }
}

export default ListItem
