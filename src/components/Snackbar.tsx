import {
    IconButton as MuiIconButton,
    Snackbar as MuiSnackbar,
    SnackbarContent as MuiSnackbarContent
} from '@material-ui/core'
import { amber, green } from '@material-ui/core/colors'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import {
    CheckCircle as CheckCircleIcon,
    Close as CloseIcon,
    Error as ErrorIcon,
    Info as InfoIcon,
    Warning as WarningIcon
} from '@material-ui/icons'
import React from 'react'

interface IProps extends WithStyles<typeof styles> {
    open: boolean
    message: React.ReactNode
    variant?: 'success' | 'warning' | 'error' | 'info'
    anchorOrigin?: {
        horizontal: 'left' | 'center' | 'right',
        vertical: 'top' | 'center' | 'bottom'
   }
    onClose?: (value) => void
}

const variantIcon = {
    error: ErrorIcon,
    info: InfoIcon,
    success: CheckCircleIcon,
    warning: WarningIcon,
}

const styles = theme => ({
    error: {
        backgroundColor: theme.palette.error.dark
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        marginRight: theme.spacing.unit,
        opacity: 0.9
    },
    info: {
        backgroundColor: theme.palette.primary.dark
    },
    message: {
        alignItems: 'center',
        display: 'flex'
    },
    success: {
        backgroundColor: green[600]
    },
    warning: {
        backgroundColor: amber[700]
    }
})

const SnackBar = (props: IProps) => {
    const {
        classes,
        message,
        onClose,
        variant = 'success',
        open,
        anchorOrigin,
        ...other
    } = props
    const Icon = variantIcon[variant]

    return (
        <MuiSnackbar
            anchorOrigin={ anchorOrigin }
            open={ open }
            autoHideDuration={ 6000 }
            onClose={ onClose }>
            <MuiSnackbarContent
                className={ classes[variant] }
                aria-describedby='client-snackbar'
                message={
                    <span id='client-snackbar' className={ classes.message }>
                        <Icon className={
                            classes.iconVariant
                                ? classes.iconVariant
                                : classes.icon
                            } />
                        { message }
                    </span>
                }
                action={ [
                    <MuiIconButton
                        key='close'
                        aria-label='Close'
                        color='inherit'
                        onClick={ onClose }>
                        <CloseIcon className={ classes.icon } />
                    </MuiIconButton>,
                ] }
                { ...other }
            />
        </MuiSnackbar>
    )
}

export default withStyles(styles)(SnackBar)
