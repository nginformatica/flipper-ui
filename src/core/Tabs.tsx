import { Tabs as MuiTabs } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import React, { FC, ReactNode } from 'react'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    centered?: boolean
    value: string | number
    color?: 'default' | 'inherit' | 'primary' | 'secondary'
    variant?: 'standard' | 'scrollable' | 'fullWidth'
    children?: ReactNode
    onChange?: (event: object, value: number) => void
}

interface IClasses {
    classes?: {
        default: string
        inherit: string
        primary: string
        secondary: string
        indicator: string
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        default: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary
        },
        indicator: {
            height: 0,
            opacity: 0,
            width: 0
        },
        inherit: {
            backgroundColor: 'inherit',
            color: 'inherit'
        },
        primary: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText
        },
        secondary: {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.secondary.contrastText
        }
    })
)

const Tabs: FC<IProps & IClasses> = ({
    children,
    color = 'primary',
    className,
    centered = true,
    padding = '6px 0 0',
    style,
    margin,
    variant = 'standard',
    ...otherProps
}) => {
    const classes = useStyles()

    return (
        <MuiTabs
            centered={ centered }
            { ...otherProps }
            variant={ variant }
            style={ { padding, margin, ...style } }
            className={ classes ? `${classes[color]} ${className}` : '' }
            classes={ classes ? { indicator: classes.indicator } : {} }>
            { children }
        </MuiTabs>
    )
}

export default Tabs
