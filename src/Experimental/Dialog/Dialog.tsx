import DialogFlipper from '@core/Dialog'
import React, { MouseEvent, ReactNode } from 'react'
import { theme as Theme } from 'nginformatica-styleguide'
import Button from '@core/Button'
import ThemeProvider from '@core/ThemeProvider'

const ACTION_REMOVE = Theme.colors.action.cancel
const PRIMARY_DARK = Theme.colors.primary.main

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

const theme = {
    palette: {
        primary: {
            main: PRIMARY_DARK
        },
        secondary: {
            main: ACTION_REMOVE
        },
        typography: {
            useNextVariants: true
        }
    }
}

const DialogV2 = (props: IProps) => {
    // extract all itens from props
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
        <ThemeProvider options={theme}>
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
        </ThemeProvider>
    )
}

export default DialogV2
