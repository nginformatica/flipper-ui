import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import React, { Component } from 'react'
import styled from 'styled-components'
import {
    KeyboardArrowLeft as IconArrowLeft,
    KeyboardArrowRight as IconArrowRight
} from '../icons'
import { IDefault } from './Advertise'
import Button from './Button'

interface IProps extends IDefault {
    open: boolean
    expanded?: boolean
    showButton?: boolean
    anchor?: 'top' | 'left' | 'bottom' | 'right'
    variant?: 'persistent' | 'temporary' | 'permanent'
    color?: 'primary' | 'secondary' | 'default' | 'inherit'
    docked?: boolean
    maxWidth?: number | string
    classes: {
        button: string
        default: string
        icon: string
        inherit: string
        primary: string
        secondary: string
        sidebar: string
    }
    children: React.ReactNode
    onToggle: () => void
}

interface IAction {
    anchor?: string
}

const styles = theme => ({
    button: {
        '&:active': {
            boxShadow: 'none'
        },
        'alignSelf': 'right',
        'backgroundColor': 'transparent',
        'boxShadow': 'none',
        'margin': 4,
        'padding': '0 0.25em',
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
        top: '64px',
        width: 'inherit'
    }
})

const Action = styled.div<IAction>`
    flex-direction: ${props => props.anchor === 'left'
        ? 'row-reverse'
        : 'row'
    };
    display: flex;
`

class Sidebar extends Component<IProps, {}> {
    public static defaultProps = {
        anchor: 'left',
        color: 'default',
        docked: false,
        expanded: true,
        maxWidth: 220,
        onToggle: () => null,
        showButton: true,
        variant: 'permanent'
    }

    public renderAction() {
        const { expanded, anchor, color, classes } = this.props
        const iconToLeft = (anchor === 'left' && expanded) || (anchor === 'right' && !expanded)

        return (
            <Action anchor={ anchor }>
                <Button
                    color={ color }
                    variant='contained'
                    className={ classes.button }
                    onClick={ this.props.onToggle }>
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
            anchor,
            className,
            classes,
            color = 'default',
            docked,
            expanded,
            margin,
            maxWidth,
            open,
            padding,
            showButton,
            style,
            variant
        } = this.props
        const width = expanded ? maxWidth : 72

        return (
            <Drawer
                open={ open }
                anchor={ anchor }
                variant={ variant }
                className={ className }
                style={ { width, padding, margin, ...style  } }
                PaperProps={ {
                    className: `${docked ? classes.sidebar : '' } ${classes[color]}`
                } }>
                { showButton && this.renderAction() }
                { this.props.children }
            </Drawer>
        )
    }
}

export default withStyles(styles)(Sidebar)
