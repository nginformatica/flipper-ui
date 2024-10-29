import React from 'react'
import type { ReactNode, FunctionComponent, MouseEvent } from 'react'
import {
    CheckCircle as IconCheck,
    Close as IconClose,
    Error as IconError,
    Info as IconInfo,
    Warning as IconWarning
} from '@mui/icons-material'
import MuiSnackbar from '@mui/material/Snackbar'
import MuiSnackbarContent from '@mui/material/SnackbarContent'
import type { DefaultProps } from '../../types'
import type { TransitionProps } from '@mui/material/transitions'
import IconButton from '@/core/inputs/icon-button'
import { Message } from './styles'
import { theme } from '@/theme'

const { blue, green, orange, red } = theme.colors

export interface SnackBarProps extends DefaultProps {
    autoHide?: number
    message: ReactNode
    open: boolean
    action?: ReactNode
    icon?: ReactNode
    variant?: 'success' | 'warning' | 'error' | 'info'
    transitionDuration?:
        | number
        | {
              enter: number
              exit: number
          }
    anchorOrigin?: {
        horizontal: 'left' | 'center' | 'right'
        vertical: 'top' | 'bottom'
    }
    TransitionProps?: TransitionProps
    TransitionComponent?: FunctionComponent<TransitionProps>
    onClose?(): void
    onClick?(): void
}

const variants = {
    error: {
        color: red[500],
        icon: IconError
    },
    info: {
        color: blue[600],
        icon: IconInfo
    },
    success: {
        color: green[400],
        icon: IconCheck
    },
    warning: {
        color: orange[600],
        icon: IconWarning
    }
}

const SnackBar = (props: SnackBarProps) => {
    const {
        id,
        action,
        anchorOrigin,
        autoHide = 6000,
        icon,
        message,
        onClose,
        open,
        padding,
        margin,
        style,
        variant = 'info',
        className,
        TransitionComponent,
        TransitionProps,
        onClick,
        ...otherProps
    } = props
    const Icon = variants[variant].icon

    const cursor = onClick ? 'pointer' : undefined

    const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        event.stopPropagation()

        if (props.onClose) {
            props.onClose()
        }
    }

    return (
        <MuiSnackbar
            id={id}
            open={open}
            className={className}
            anchorOrigin={
                anchorOrigin ?? { horizontal: 'center', vertical: 'bottom' }
            }
            autoHideDuration={autoHide}
            TransitionProps={TransitionProps}
            TransitionComponent={TransitionComponent}
            style={{ cursor, padding, margin, ...style }}
            onClick={onClick}
            onClose={onClose}>
            <MuiSnackbarContent
                aria-describedby='client-snackbar'
                style={{
                    backgroundColor: variants[variant].color,
                    flexWrap: 'nowrap',
                    cursor
                }}
                message={
                    <Message id='client-snackbar'>
                        {icon || <Icon style={{ opacity: 0.9 }} />}
                        <div>{message}</div>
                    </Message>
                }
                action={
                    action || (
                        <IconButton
                            key='close'
                            role='close-icon-button'
                            aria-label='Close'
                            color='inherit'
                            onClick={handleClose}>
                            <IconClose />
                        </IconButton>
                    )
                }
                {...otherProps}
            />
        </MuiSnackbar>
    )
}

export default SnackBar
