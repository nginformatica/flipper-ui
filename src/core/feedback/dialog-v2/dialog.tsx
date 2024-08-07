import React from 'react'
import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import type { IDialogProps } from '@/core/feedback/dialog'
import Dialog from '@/core/feedback/dialog'
import Button from '@/core/inputs/button'
import { ThemeProviderFlipper, theme } from '@/theme'

const { action, primary } = theme.colors

export interface IProps extends IDialogProps {
    open: boolean
    title: string
    titleAction?: string | ReactNode
    text?: string
    fullWidth?: boolean
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg'
    primaryButtonColor?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
    primaryButtonStyle?: CSSProperties
    primaryButtonName?: string
    primaryButtonText: string
    secondaryButtonText?: string
    secondaryButtonName?: string
    snippet?: JSX.Element | ReactNode
    content?: JSX.Element | ReactNode
    PaperProps?: Record<string, unknown>
    omitActionButtons?: boolean
    primaryButtonAction(event: MouseEvent<HTMLButtonElement>): void
    secondaryButtonAction?(event: MouseEvent<HTMLButtonElement>): void
    onClose?(): void
}

const themeDialog = {
    palette: {
        primary: {
            main: primary.main
        },
        secondary: {
            main: action.cancel
        },
        typography: {
            useNextVariants: true
        }
    }
}

const DialogV2 = (props: IProps) => {
    const {
        open,
        title,
        titleAction,
        text,
        primaryButtonColor,
        primaryButtonStyle,
        primaryButtonName,
        primaryButtonText,
        secondaryButtonText,
        secondaryButtonName,
        snippet,
        content,
        PaperProps,
        fullWidth,
        maxWidth,
        omitActionButtons,
        primaryButtonAction,
        secondaryButtonAction,
        onClose,
        ...otherProps
    } = props

    const haveSecondaryButton = secondaryButtonText && secondaryButtonAction

    return (
        <ThemeProviderFlipper options={themeDialog}>
            <Dialog
                {...otherProps}
                open={open}
                titleAction={titleAction}
                title={title}
                text={text}
                content={content}
                snippet={snippet}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                PaperProps={PaperProps}
                actions={
                    !omitActionButtons && (
                        <>
                            {haveSecondaryButton && (
                                <Button
                                    name={
                                        secondaryButtonName ||
                                        'secondary-button'
                                    }
                                    margin='12px 6px'
                                    onClick={secondaryButtonAction}>
                                    {secondaryButtonText}
                                </Button>
                            )}

                            <Button
                                name={primaryButtonName || 'primary-button'}
                                color={primaryButtonColor}
                                style={primaryButtonStyle}
                                variant='contained'
                                margin='12px 6px'
                                onClick={primaryButtonAction}>
                                {primaryButtonText}
                            </Button>
                        </>
                    )
                }
                onClose={onClose}
            />
        </ThemeProviderFlipper>
    )
}

export default DialogV2
