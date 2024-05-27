import React from 'react'
import type { MouseEvent, ReactNode } from 'react'
import { Dialog as DialogFlipper, Button } from '@/index'
import { ThemeProviderFlipper, theme } from '@/theme'

const { action, primary } = theme.colors

export interface IProps {
    open: boolean
    title: string
    titleAction?: string | ReactNode
    text?: string
    primaryButtonColor?: 'default' | 'primary' | 'inherit' | 'secondary'
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
        primaryButtonName,
        primaryButtonText,
        secondaryButtonText,
        secondaryButtonName,
        snippet,
        content,
        PaperProps,
        omitActionButtons,
        primaryButtonAction,
        secondaryButtonAction,
        onClose,
        ...otherProps
    } = props

    const haveSecondaryButton = secondaryButtonText && secondaryButtonAction

    return (
        <ThemeProviderFlipper options={themeDialog}>
            <DialogFlipper
                {...otherProps}
                open={open}
                titleAction={titleAction}
                title={title}
                text={text}
                content={content}
                snippet={snippet}
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
                                    onClick={secondaryButtonAction}>
                                    {secondaryButtonText}
                                </Button>
                            )}

                            <Button
                                name={primaryButtonName || 'primary-button'}
                                color={primaryButtonColor}
                                variant='contained'
                                margin='6px 12px'
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
