import React from 'react'
import type { MouseEvent, ReactElement } from 'react'
import MuiFab from '@mui/material/Fab'
import { makeStyles } from '@mui/styles'
import type { DefaultProps } from '../../types'
import type { FabProps } from '@mui/material/Fab'

export interface IFabProps extends DefaultProps, FabProps {
    onClick?: (event?: MouseEvent<HTMLElement>) => void
    children: ReactElement<Record<string, unknown>>
}

const useStyles = makeStyles(() => ({
    root: {
        '&:hover': {
            backgroundColor: '#d5d5d5'
        }
    }
}))

const Fab = ({
    children,
    margin,
    padding,
    style = {},
    ...otherProps
}: IFabProps) => {
    const classes = useStyles()

    return (
        <MuiFab
            {...otherProps}
            color='inherit'
            classes={classes}
            style={{
                margin,
                padding,
                ...style
            }}>
            {children}
        </MuiFab>
    )
}

export default Fab
