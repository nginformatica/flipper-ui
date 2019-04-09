import { Tab as MuiTab } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import React, { Component, ReactElement } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    disabled?: boolean
    icon?: string | ReactElement<unknown>
    label?: string
    value?: unknown
    selectedClass?: string
    classes: {
        root: string
        selected: string
    }
}

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: theme.shadows[4],
        color: theme.palette.primary.contrastText
    },
    selected: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary
    }
})

class Tab extends Component<IProps> {
    public static defaultProps = {
        disabled: false,
        margin: '0 4px'
    }

    public render() {
        const {
            classes,
            style,
            margin,
            padding,
            selectedClass,
            ...otherProps
        } = this.props

        return (
            <MuiTab
                classes={ {
                    root: classes.root,
                    selected: `${classes.selected} ${selectedClass}`
                } }
                style={ { margin, padding, ...style } }
                { ...otherProps }
            />
        )
    }
}

export default withStyles(styles)(Tab)
