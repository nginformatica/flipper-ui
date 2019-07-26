import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import styled from 'styled-components'
import {
    KeyboardArrowLeft as IconArrowLeft,
    KeyboardArrowRight as IconArrowRight
} from '../icons'
import { IDefault } from './Advertise'
import Button, { IProps as IButtonProps } from './Button'

interface IProps extends IDefault {
    open: boolean
    expanded?: boolean
    showButton?: boolean
    anchor?: 'top' | 'left' | 'bottom' | 'right'
    variant?: 'persistent' | 'temporary' | 'permanent'
    color?: 'primary' | 'secondary' | 'default' | 'inherit'
    docked?: boolean
    maxWidth?: number | string
    minWidth?: number | string
    top?: number | string
    paperClasses?: object
    name?: string
    ButtonProps?: IButtonProps
    classes: {
        button: string
        default: string
        icon: string
        inherit: string
        primary: string
        secondary: string
        sidebar: string
    }
    onToggle: () => void
}

interface IAction {
    anchor?: 'top' | 'left' | 'bottom' | 'right'
    minWidth?: IProps['minWidth']
}

const styles = theme => ({
    button: {
        '&:active': {
            boxShadow: 'none'
        },
        'alignSelf': 'right',
        'backgroundColor': 'transparent',
        'boxShadow': 'none',
        'maxWidth': 'inherit',
        'minWidth': 'auto',
        'width': '100%'
    },
    default: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.background.contrastText
    },
    icon: {
        fontSize: '24px'
    },
    inherit: {
        backgroundColor: 'inherit',
        color: 'inherit'
    },
    primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText
    },
    secondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    sidebar: {
        bottom: '0px',
        left: '0px',
        position: 'fixed' as 'fixed',
        top: 'inherit',
        width: 'inherit'
    }
})

const Action = styled.div<IAction>`
    flex-direction: ${props => props.anchor === 'left'
        ? 'row-reverse'
        : 'row'
};
    display: flex;
    padding: 4px;
`

class Sidebar extends Component<IProps, {}> {
    public renderAction() {
        const {
            expanded = true,
            anchor = 'left',
            color = 'default',
            minWidth = 72,
            ButtonProps,
            classes
        } = this.props
        const iconToLeft =
            (anchor === 'left' && expanded)
            || (anchor === 'right' && !expanded)

        return (
            <Action anchor={ anchor }>
                <Button
                    name={ `button-${name || 'sidebar'}` }
                    color={ color }
                    variant='contained'
                    className={ classes.button }
                    style={ { maxWidth: minWidth } }
                    onClick={ this.props.onToggle }
                    { ...ButtonProps }>
                    {
                        iconToLeft
                            ? <IconArrowLeft className={ classes.icon } />
                            : <IconArrowRight className={ classes.icon } />
                    }
                </Button>
            </Action>
        )
    }

    public render() {
        const {
            id,
            anchor = 'left',
            className,
            classes,
            color = 'default',
            docked = false,
            expanded = true,
            margin,
            maxWidth = 220,
            minWidth = 72,
            top = 64,
            open,
            padding,
            paperClasses,
            showButton = true,
            style,
            variant = 'permanent'
        } = this.props
        const width = expanded ? maxWidth : minWidth

        return (
            <Drawer
                id={ id }
                open={ open }
                anchor={ anchor }
                variant={ variant }
                className={ className }
                style={ { width, padding, margin, top, ...style } }
                PaperProps={ {
                    className: `${docked ? classes.sidebar : '' } ${classes[color]}`,
                    classes: paperClasses
                } }>
                { showButton && this.renderAction() }
                { this.props.children }
            </Drawer>
        )
    }
}

export default withStyles(styles)(Sidebar)
