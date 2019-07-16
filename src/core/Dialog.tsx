import MuiDialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogContentText from '@material-ui/core/DialogContentText'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import React, { Component, CSSProperties, ReactNode } from 'react'
import { IDefault } from './Advertise'
import { withStyles } from '@material-ui/core'
import styled from 'styled-components'

interface IProps extends IDefault {
    open: boolean
    fullScreen?: boolean
    fullWidth?: boolean
    title?: string | ReactNode
    titleAction?: string | ReactNode
    actions?: ReactNode
    maxWidth?: 'xs'| 'sm'| 'md'| 'lg'
    content?: ReactNode
    text?: string
    snippet?: ReactNode | JSX.Element
    PaperProps?: object
    titleStyle?: CSSProperties
    snippetStyle?: CSSProperties
    titleWrapperStyle?: CSSProperties
    titleActionStyle?: CSSProperties
    actionsStyle?: CSSProperties
    contentStyle?: CSSProperties
    snippetContentStyle?: CSSProperties
    contentTextStyle?: CSSProperties
    scroll?: 'body' | 'paper' | 'unset-paper' | 'unset-body'
    onClose?: () => void
}

interface IStyles {
    classes: {
        root: string
    }
}

const TitleWrapper = styled.div`
    display: flex;
`

const TitleAction = styled.div`
    padding: 16px 24px;
    align-items: center;
    display: flex;
`

const Snippet = styled.div`
    display: flex;
`

const SnippetContent = styled.div`
    position: relative;
    height: inherit;
    display: flex;
`

const styles = () => ({
    root: {
        overflowY: 'unset' as 'unset'
    }
})

class Dialog extends Component<IProps & IStyles> {
    private renderTitle(title: IProps['title']) {
        return this.props.titleAction
            ? (
                <TitleWrapper style={ this.props.titleWrapperStyle }>
                    <MuiDialogTitle
                        style={ {
                            flex: 1,
                            ...this.props.titleStyle
                        } }>
                        { title }
                    </MuiDialogTitle>
                    <TitleAction
                        style={ this.props.titleActionStyle }>
                        { this.props.titleAction }
                    </TitleAction>
                </TitleWrapper>
            )
            : (
                <MuiDialogTitle style={ this.props.titleStyle }>
                    { title }
                </MuiDialogTitle>
            )
    }

    private renderContent(content: ReactNode) {
        const { scroll } = this.props

        return (
            <MuiDialogContent
                classes={
                    scroll === 'unset-paper' || scroll === 'unset-body'
                        ? { root: this.props.classes.root }
                        : undefined
                }
                style={ this.props.contentStyle }>
                { content }
            </MuiDialogContent>
        )
    }

    private renderText(text: string) {
        const content = (
            <MuiDialogContentText
                style={ this.props.contentTextStyle }>
                { text }
            </MuiDialogContentText>
        )

        return this.renderContent(content)
    }

    private renderActions(actions: ReactNode) {
        return (
            <MuiDialogActions style={ this.props.actionsStyle }>
                { actions }
            </MuiDialogActions>
        )
    }

    private renderPaperContent() {
        const { actions, content, text, title } = this.props

        return (
            <>
                { title && this.renderTitle(title) }
                { text ? this.renderText(text) : this.renderContent(content) }
                { actions && this.renderActions(actions) }
            </>
        )
    }

    private renderSnippet() {
        return (
            <Snippet style={ this.props.snippetStyle }>
                <div>{ this.renderPaperContent() }</div>
                <SnippetContent style={ this.props.snippetContentStyle }>
                    { this.props.snippet }
                </SnippetContent>
            </Snippet>
        )
    }

    public render() {
        const {
            snippet,
            style,
            padding,
            margin,
            scroll,
            PaperProps,
            open,
            fullScreen,
            fullWidth,
            maxWidth,
            classes,
            onClose
        } = this.props

        const scrollMode = scroll === 'unset-body'
            ? 'body'
            : scroll === 'unset-paper'
                ? 'paper'
                : scroll

        return (
            <MuiDialog
                open={ open }
                fullScreen={ fullScreen }
                fullWidth={ fullWidth }
                maxWidth={ maxWidth }
                scroll={ scrollMode }
                PaperProps={ {
                    classes: scroll === 'unset-body' || scroll === 'unset-paper'
                        ? { root: classes.root }
                        : undefined,
                    ...PaperProps
                } }
                style={ { padding, margin, ...style } }
                onClose={ onClose }>
                { snippet ? this.renderSnippet() : this.renderPaperContent() }
            </MuiDialog>
        )
    }
}

export default withStyles(styles)(Dialog)
