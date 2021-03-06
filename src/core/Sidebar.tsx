import Drawer from '@material-ui/core/Drawer'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React, { FC } from 'react'
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
    onToggle: () => void
}

interface IAction {
    anchor?: 'top' | 'left' | 'bottom' | 'right'
    minWidth?: IProps['minWidth']
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            color: theme.palette.text.primary
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
)

const Action = styled.div<IAction>`
    flex-direction: ${props => props.anchor === 'left'
        ? 'row-reverse'
        : 'row'
};
    display: flex;
    padding: 4px;
`

const Sidebar: FC<IProps> = ({
    id,
    anchor = 'left',
    className,
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
    variant = 'permanent',
    ButtonProps,
    onToggle,
    children
}) => {
    const classes = useStyles()

    const renderAction = () => {
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
                    onClick={ onToggle }
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
            { showButton && renderAction() }
            { children }
        </Drawer>
    )
}

export default Sidebar
