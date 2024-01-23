import React from 'react'
import MuiCard from '@material-ui/core/Card'
import MuiCardActionArea from '@material-ui/core/CardActionArea'
import MuiCardActions from '@material-ui/core/CardActions'
import MuiCardContent from '@material-ui/core/CardContent'
import MuiCardHeader from '@material-ui/core/CardHeader'
import MuiCardMedia from '@material-ui/core/CardMedia'
import type { DefaultProps } from '@/core/types'
import type { CardProps } from '@material-ui/core/Card'
import type { CardActionAreaProps } from '@material-ui/core/CardActionArea'
import type { CardActionsProps } from '@material-ui/core/CardActions'
import type { CardContentProps } from '@material-ui/core/CardContent'
import type { CardHeaderProps } from '@material-ui/core/CardHeader'
import type { CardMediaProps } from '@material-ui/core/CardMedia'

export const CardActionArea = ({
    margin,
    padding,
    style,
    ...otherProps
}: DefaultProps & CardActionAreaProps) => (
    <MuiCardActionArea {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardActionArea>
)

export const CardActions = ({
    margin,
    padding,
    style,
    ...otherProps
}: DefaultProps & CardActionsProps) => (
    <MuiCardActions {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardActions>
)

export const CardContent = ({
    margin,
    padding,
    style,
    ...otherProps
}: DefaultProps & CardContentProps) => (
    <MuiCardContent {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardContent>
)

export const CardMedia = ({
    margin,
    padding,
    style,
    ...otherProps
}: DefaultProps & CardMediaProps) => (
    <MuiCardMedia {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardMedia>
)

export const CardHeader = ({
    margin,
    padding,
    style,
    ...otherProps
}: DefaultProps & CardHeaderProps) => (
    <MuiCardHeader {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardHeader>
)

export const Card = ({
    margin,
    padding,
    style,
    ...otherProps
}: DefaultProps & CardProps) => (
    <MuiCard {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCard>
)

export default Card
