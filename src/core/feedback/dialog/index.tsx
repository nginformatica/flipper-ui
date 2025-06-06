import React from 'react'
import type { CSSProperties, ReactNode } from 'react'
import MuiDialog from '@mui/material/Dialog'
import MuiDialogActions from '@mui/material/DialogActions'
import MuiDialogContent from '@mui/material/DialogContent'
import MuiDialogContentText from '@mui/material/DialogContentText'
import MuiDialogTitle from '@mui/material/DialogTitle'
import type { DefaultProps } from '../../types'
import type { DialogProps } from '@mui/material/Dialog'
import {
    PaperContent,
    Snippet,
    SnippetContent,
    TitleAction,
    TitleWrapper
} from './styles'

export interface IDialogProps
    extends DefaultProps,
        Omit<DialogProps, 'title' | 'content'> {
    open: boolean
    fullScreen?: boolean
    fullWidth?: boolean
    title?: string | ReactNode
    titleAction?: string | ReactNode
    actions?: ReactNode
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    content?: ReactNode | string
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
    'aria-title'?: string
    onClose?: (event: Event) => void
}

const Dialog = ({
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
}: IDialogProps) => {
    const renderTitle = (title: IDialogProps['title']) => {
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
                style={{
                    ...contentStyle,
                    paddingTop: '8px'
                }}>
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
            <>
                <Snippet style={snippetStyle}>
                    <PaperContent>{renderPaperContent()}</PaperContent>
                    <SnippetContent style={snippetContentStyle}>
                        {snippet}
                    </SnippetContent>
                </Snippet>
            </>
        )
    }

    return (
        <MuiDialog
            {...otherProps}
            open={open}
            scroll={scroll}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            fullScreen={fullScreen}
            style={{ padding, margin, ...style }}
            PaperProps={{
                sx: {
                    overflowY: 'unset'
                },
                ...(ariaTitle ? { title: ariaTitle } : {}),
                ...PaperProps
            }}
            onClose={onClose}>
            {snippet ? renderSnippet() : renderPaperContent()}
        </MuiDialog>
    )
}

export default Dialog
