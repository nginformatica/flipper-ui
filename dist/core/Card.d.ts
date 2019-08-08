import { FC } from 'react';
import { IDefault } from './Advertise';
import { CardProps } from '@material-ui/core/Card';
import { CardActionAreaProps } from '@material-ui/core/CardActionArea';
import { CardActionsProps } from '@material-ui/core/CardActions';
import { CardContentProps } from '@material-ui/core/CardContent';
import { CardMediaProps } from '@material-ui/core/CardMedia';
import { CardHeaderProps } from '@material-ui/core/CardHeader';
export declare const CardActionArea: FC<IDefault & CardActionAreaProps>;
export declare const CardActions: FC<IDefault & CardActionsProps>;
export declare const CardContent: FC<IDefault & CardContentProps>;
export declare const CardMedia: FC<IDefault & CardMediaProps>;
export declare const CardHeader: FC<IDefault & CardHeaderProps>;
declare const Card: FC<IDefault & CardProps>;
export default Card;
