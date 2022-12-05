import React, { FC } from 'react'
import { DefaultProps } from './types'
import MuiCard, { CardProps } from '@material-ui/core/Card'
import MuiCardActionArea, {
    CardActionAreaProps
} from '@material-ui/core/CardActionArea'
import MuiCardActions, { CardActionsProps } from '@material-ui/core/CardActions'
import MuiCardContent, { CardContentProps } from '@material-ui/core/CardContent'
import MuiCardMedia, { CardMediaProps } from '@material-ui/core/CardMedia'
import MuiCardHeader, { CardHeaderProps } from '@material-ui/core/CardHeader'

export const CardActionArea: FC<DefaultProps & CardActionAreaProps> = ({
    margin,
    padding,
    style,
    ...otherProps
}) => (
    <MuiCardActionArea {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardActionArea>
)

export const CardActions: FC<DefaultProps & CardActionsProps> = ({
    margin,
    padding,
    style,
    ...otherProps
}) => (
    <MuiCardActions {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardActions>
)

export const CardContent: FC<DefaultProps & CardContentProps> = ({
    margin,
    padding,
    style,
    ...otherProps
}) => (
    <MuiCardContent {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardContent>
)

export const CardMedia: FC<DefaultProps & CardMediaProps> = ({
    margin,
    padding,
    style,
    ...otherProps
}) => (
    <MuiCardMedia {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardMedia>
)

export const CardHeader: FC<DefaultProps & CardHeaderProps> = ({
    margin,
    padding,
    style,
    ...otherProps
}) => (
    <MuiCardHeader {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCardHeader>
)

const Card: FC<DefaultProps & CardProps> = ({
    margin,
    padding,
    style,
    ...otherProps
}) => (
    <MuiCard {...otherProps} style={{ padding, margin, ...style }}>
        {otherProps.children}
    </MuiCard>
)

export default Card
