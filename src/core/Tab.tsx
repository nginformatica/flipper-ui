import { Tab as MuiTab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    disabled?: boolean
    icon?: string | React.ReactElement<any>
    label?: string
    value?: any
    classes: {
        root: string
        selected: string
    }
}

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[4],
        color: theme.palette.primary.contrastText,
        margin: '0 4px'
    },
    selected: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary
    }
})

class Tab extends Component<IProps> {
    public static defaultProsp = {
        disabled: false,
        margin: '2px 0'
    }

    public render() {
        const {
            classes,
            style,
            margin,
            padding,
            ...otherProps
        } = this.props

        return (
            <MuiTab
                classes={ {
                    root: classes.root,
                    selected: classes.selected
                } }
                style={ { margin, padding, ...style } }
                { ...otherProps }
            />
        )
    }
}

export default withStyles(styles)(Tab)
