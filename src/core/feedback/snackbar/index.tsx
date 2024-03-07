import type { ReactNode, FunctionComponent, MouseEvent } from 'react'
import React from 'react'
import {
    IconButton as MuiIconButton,
    Snackbar as MuiSnackbar,
    SnackbarContent as MuiSnackbarContent
} from '@material-ui/core'
import { amber, blue, green, red } from '@material-ui/core/colors'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import type { DefaultProps } from '../../types'
import type { Theme } from '@material-ui/core/styles'
import type { TransitionProps } from '@material-ui/core/transitions/transition'
import {
    CheckCircle as IconCheck,
    Close as IconClose,
    Error as IconError,
    Info as IconInfo,
    Warning as IconWarning
} from '@/icons'

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
        color: red[700],
        icon: IconError
    },
    info: {
        color: blue[500],
        icon: IconInfo
    },
    success: {
        color: green[700],
        icon: IconCheck
    },
    warning: {
        color: amber[700],
        icon: IconWarning
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            fontSize: 20,
            marginRight: theme.spacing(1),
            opacity: 0.9
        },
        message: {
            alignItems: 'center',
            display: 'flex'
        }
    })
)

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
        ...other
    } = props
    const Icon = variants[variant].icon
    const classes = useStyles()

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
            anchorOrigin={anchorOrigin}
            open={open}
            id={id}
            autoHideDuration={autoHide}
            style={{ cursor, padding, margin, ...style }}
            className={className}
            TransitionComponent={TransitionComponent}
            TransitionProps={TransitionProps}
            onClick={onClick}
            onClose={onClose}>
            <MuiSnackbarContent
                style={{
                    backgroundColor: variants[variant].color,
                    flexWrap: 'nowrap',
                    cursor
                }}
                aria-describedby='client-snackbar'
                message={
                    <span id='client-snackbar' className={classes.message}>
                        {icon || <Icon className={classes.icon} />}
                        <div style={{ marginLeft: '10px' }}>{message}</div>
                    </span>
                }
                action={
                    action || (
                        <MuiIconButton
                            key='close'
                            role='close-icon-button'
                            aria-label='Close'
                            color='inherit'
                            onClick={handleClose}>
                            <IconClose />
                        </MuiIconButton>
                    )
                }
                {...other}
            />
        </MuiSnackbar>
    )
}

export default SnackBar
