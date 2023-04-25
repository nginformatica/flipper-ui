import React from 'react'
import { DefaultProps } from '../../types'
import MuiCard, { CardProps } from '@material-ui/core/Card'
import MuiCardActionArea, {
    CardActionAreaProps
} from '@material-ui/core/CardActionArea'
import MuiCardActions, { CardActionsProps } from '@material-ui/core/CardActions'
import MuiCardContent, { CardContentProps } from '@material-ui/core/CardContent'
import MuiCardMedia, { CardMediaProps } from '@material-ui/core/CardMedia'
import MuiCardHeader, { CardHeaderProps } from '@material-ui/core/CardHeader'

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

const Card = ({
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
