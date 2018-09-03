import {
    IconButton as MuiIconButton,
    Snackbar as MuiSnackbar,
    SnackbarContent as MuiSnackbarContent
} from '@material-ui/core'
import { amber, blue, green, red } from '@material-ui/core/colors'
import { withStyles, WithStyles } from '@material-ui/core/styles'
import {
    CheckCircle as IconCheck,
    Close as IconClose,
    Error as IconError,
    Info as IconInfo,
    Warning as IconWarning
} from '@material-ui/icons'
import React from 'react'

interface IProps extends WithStyles<typeof styles> {
    autoHide?: number,
    message: React.ReactNode
    open: boolean
    style?: object
    variant?: 'success' | 'warning' | 'error' | 'info'
    anchorOrigin?: {
        horizontal: 'left' | 'center' | 'right',
        vertical: 'top' | 'center' | 'bottom'
   }
    onClose?: (value) => {}
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

const styles = theme => ({
    icon: {
        fontSize: 20,
        marginRight: theme.spacing.unit,
        opacity: 0.9
    },
    message: {
        alignItems: 'center',
        display: 'flex'
    }
})

const SnackBar = (props: IProps) => {
    const {
        anchorOrigin,
        autoHide = 6000,
        classes,
        message,
        onClose,
        open,
        style,
        variant = 'info',
        ...other
    } = props
    const Icon = variants[variant].icon

    return (
        <MuiSnackbar
            anchorOrigin={ anchorOrigin }
            open={ open }
            autoHideDuration={ 6000 }
            style={ style }
            onClose={ onClose }>
            <MuiSnackbarContent
                style={ { backgroundColor: variants[variant].color } }
                aria-describedby='client-snackbar'
                message={
                    <span id='client-snackbar' className={ classes.message }>
                        <Icon className={ classes.icon } />
                        { message }
                    </span>
                }
                action={ [
                    <MuiIconButton
                        key='close'
                        aria-label='Close'
                        color='inherit'
                        onClick={ onClose }>
                        <IconClose />
                    </MuiIconButton>,
                ] }
                { ...other }
            />
        </MuiSnackbar>
    )
}

export default withStyles(styles)(SnackBar)
