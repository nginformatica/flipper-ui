import MuiDialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogContentText from '@material-ui/core/DialogContentText'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import React, { Component, CSSProperties, ReactNode } from 'react'
import { IDefault } from './Advertise'
import { withStyles } from '@material-ui/core'

interface IProps extends IDefault {
    open: boolean
    fullScreen?: boolean
    fullWidth?: boolean
    title?: string | ReactNode
    actions?: ReactNode
    maxWidth?: 'xs'| 'sm'| 'md'| 'lg'
    content?: ReactNode
    text?: string
    PaperProps?: object
    titleStyle?: CSSProperties
    actionsStyle?: CSSProperties
    contentStyle?: CSSProperties
    contentTextStyle?: CSSProperties
    scroll?: 'body' | 'paper' | 'unset'
    onClose?: () => void
}

interface IStyles {
    classes: {
        root: string
    }
}

const styles = () => ({
    root: {
        overflowY: 'unset' as 'unset'
    }
})

class Dialog extends Component<IProps & IStyles> {
    public renderTitle(title: IProps['title']) {
        return (
            <MuiDialogTitle style={ this.props.titleStyle }>
                { title }
            </MuiDialogTitle>
        )
    }

    public renderContent(content: ReactNode) {
        return (
            <MuiDialogContent
                classes={
                    this.props.scroll === 'unset'
                        ? { root: this.props.classes.root }
                        : undefined
                }
                style={ this.props.contentStyle }>
                { content }
            </MuiDialogContent>
        )
    }

    public renderText(text: string) {
        const content = (
            <MuiDialogContentText
                style={ this.props.contentTextStyle }>
                { text }
            </MuiDialogContentText>
        )

        return this.renderContent(content)
    }

    public renderActions(actions: ReactNode) {
        return (
            <MuiDialogActions style={ this.props.actionsStyle }>
                { actions }
            </MuiDialogActions>
        )
    }

    public render() {
        const {
            actions,
            content,
            text,
            title,
            style,
            padding,
            margin,
            ...otherProps
        } = this.props

        const scroll = this.props.scroll === 'unset'
            ? undefined
            : this.props.scroll

        return (
            <MuiDialog
                { ...otherProps }
                scroll={ scroll }
                style={ { padding, margin, ...style } }>
                { title && this.renderTitle(title) }
                { text ? this.renderText(text) : this.renderContent(content) }
                { actions && this.renderActions(actions) }
            </MuiDialog>
        )
    }
}

export default withStyles(styles)(Dialog)
