import { Tab as MuiTab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    icon?: React.ReactElement<any>
    action?: React.ReactElement<any>
    name?: string
    title?: string
    subtitle?: string
    value?: string | number
    children?: React.ReactNode
    classes: { default: string }
    onClick?: (name?: string) => {}
}

const styles = () => ({
    default: {
        color: 'inherit'
    }
})

class ListItem extends Component<IProps, {}> {
    public static defaultProps = {
        onClick: () => null
    }

    public render() {
        const { className, children, value, style = {}, padding, margin, onClick } = this.props

        return (
            <MuiTab
                button
                value={ value }
                style={ { padding, margin, ...style } }
                className={ className }
                onClick={ () => onClick!(name) }
            />
        )
    }
}

export default withStyles(styles)(ListItem)
