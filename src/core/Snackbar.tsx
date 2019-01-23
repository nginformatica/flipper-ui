import {
    IconButton as MuiIconButton,
    Snackbar as MuiSnackbar,
    SnackbarContent as MuiSnackbarContent
} from '@material-ui/core'
import { amber, blue, green, red } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'
import {
    CheckCircle as IconCheck,
    Close as IconClose,
    Error as IconError,
    Info as IconInfo,
    Warning as IconWarning
} from '@material-ui/icons'
import React, { ReactNode, SFC } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    autoHide?: number,
    message: ReactNode
    open: boolean
    variant?: 'success' | 'warning' | 'error' | 'info'
    classes: {
        icon: string
        message: string
    }
    anchorOrigin?: {
        horizontal: 'left' | 'center' | 'right',
        vertical: 'top' | 'bottom'
   }
    onClose?: (value) => void
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

const SnackBar: SFC<IProps> = props => {
    const {
        id,
        anchorOrigin,
        autoHide = 6000,
        classes,
        message,
        onClose,
        open,
        padding,
        margin,
        style,
        variant = 'info',
        className,
        ...other
    } = props
    const Icon = variants[variant].icon

    return (
        <MuiSnackbar
            anchorOrigin={ anchorOrigin }
            open={ open }
            id={ id }
            autoHideDuration={ 6000 }
            style={ { padding, margin, ...style } }
            className={ className }
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
