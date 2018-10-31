import MuiDialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogContentText from '@material-ui/core/DialogContentText'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import React, { Component, ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    open: boolean
    fullScreen?: boolean
    fullWidth?: boolean
    title?: string | React.ReactNode
    actions?: ReactNode
    content?: ReactNode
    text?: string
    PaperProps?: object
    scroll?: 'body' | 'paper'
    onClose?: () => void
}

class Dialog extends Component<IProps> {
    public renderTitle(title: IProps['title']) {
        return (
            <MuiDialogTitle>
                { title }
            </MuiDialogTitle>
        )
    }

    public renderContent(content: ReactNode) {
        return (
            <MuiDialogContent>
                { content }
            </MuiDialogContent>
        )
    }

    public renderText(text: string) {
        const content = (
            <MuiDialogContentText>
                { text }
            </MuiDialogContentText>
        )

        return this.renderContent(content)
    }

    public renderActions(actions: ReactNode) {
        return (
            <MuiDialogActions>
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

        return (
            <MuiDialog
                { ...otherProps }
                style={ { padding, margin, ...style } }>
                { title && this.renderTitle(title) }
                { text ? this.renderText(text) : this.renderContent(content) }
                { actions && this.renderActions(actions) }
            </MuiDialog>
        )
    }
}

export default Dialog
