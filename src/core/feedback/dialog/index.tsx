import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import MuiDialog from '@material-ui/core/Dialog'
import MuiDialogActions from '@material-ui/core/DialogActions'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogContentText from '@material-ui/core/DialogContentText'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'
import type { DialogProps as MuiDialogProps } from '@material-ui/core'
import {
    PaperContent,
    Snippet,
    SnippetContent,
    TitleAction,
    TitleWrapper
} from './styles'

export interface DialogProps
    extends DefaultProps,
        Omit<MuiDialogProps, 'scroll' | 'title' | 'content'> {
    open: boolean
    fullScreen?: boolean
    fullWidth?: boolean
    title?: string | ReactNode
    titleAction?: string | ReactNode
    actions?: ReactNode
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg'
    content?: ReactNode | string
    text?: string
    snippet?: ReactNode | JSX.Element
    PaperProps?: Record<string, unknown>
    titleStyle?: CSSProperties
    snippetStyle?: CSSProperties
    titleWrapperStyle?: CSSProperties
    titleActionStyle?: CSSProperties
    actionsStyle?: CSSProperties
    contentStyle?: CSSProperties
    snippetContentStyle?: CSSProperties
    contentTextStyle?: CSSProperties
    scroll?: 'body' | 'paper' | 'unset-paper' | 'unset-body'
    'aria-title'?: string
    onClose?: (event: Event) => void
}

const useStyles = makeStyles({
    root: {
        overflowY: 'unset' as const
    }
})

export const Dialog = ({
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
    onClose,
    titleAction,
    titleWrapperStyle,
    titleStyle,
    titleActionStyle,
    contentStyle,
    contentTextStyle,
    actionsStyle,
    actions,
    content,
    text,
    title,
    snippetStyle,
    snippetContentStyle,
    'aria-title': ariaTitle,
    ...otherProps
}: DialogProps) => {
    const classes = useStyles()

    const renderTitle = (title: DialogProps['title']) => {
        return titleAction ? (
            <TitleWrapper style={titleWrapperStyle}>
                <MuiDialogTitle
                    style={{
                        flex: 1,
                        ...titleStyle
                    }}>
                    {title}
                </MuiDialogTitle>
                <TitleAction style={titleActionStyle}>
                    {titleAction}
                </TitleAction>
            </TitleWrapper>
        ) : (
            <MuiDialogTitle style={titleStyle}>{title}</MuiDialogTitle>
        )
    }

    const renderContent = (content: ReactNode) => {
        return (
            <MuiDialogContent
                classes={
                    scroll === 'unset-paper' || scroll === 'unset-body'
                        ? { root: classes.root }
                        : undefined
                }
                style={contentStyle}>
                {content}
            </MuiDialogContent>
        )
    }

    const renderText = (text: string) => {
        const content = (
            <MuiDialogContentText style={contentTextStyle}>
                {text}
            </MuiDialogContentText>
        )

        return renderContent(content)
    }

    const renderActions = (actions: ReactNode) => {
        return (
            <MuiDialogActions style={actionsStyle}>{actions}</MuiDialogActions>
        )
    }

    const renderPaperContent = () => {
        return (
            <>
                {title && renderTitle(title)}
                {text ? renderText(text) : renderContent(content)}
                {actions && renderActions(actions)}
            </>
        )
    }

    const renderSnippet = () => {
        return (
            <Snippet style={snippetStyle}>
                <PaperContent>{renderPaperContent()}</PaperContent>
                <SnippetContent style={snippetContentStyle}>
                    {snippet}
                </SnippetContent>
            </Snippet>
        )
    }

    const scrollMode = () => {
        if (scroll === 'unset-body') {
            return 'body'
        }

        if (scroll === 'unset-paper') {
            return 'paper'
        }

        return scroll
    }

    return (
        <MuiDialog
            {...otherProps}
            open={open}
            fullScreen={fullScreen}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            scroll={scrollMode()}
            PaperProps={{
                ...(ariaTitle ? { title: ariaTitle } : {}),
                classes:
                    scroll === 'unset-body' || scroll === 'unset-paper'
                        ? { root: classes.root }
                        : undefined,
                ...PaperProps
            }}
            style={{ padding, margin, ...style }}
            onClose={onClose}>
            {snippet ? renderSnippet() : renderPaperContent()}
        </MuiDialog>
    )
}

export default Dialog
