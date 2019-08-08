import { FC } from 'react';
import { IDefault } from './Advertise';
export interface IProps extends IDefault {
    square?: boolean;
    elevation?: number;
}
declare const Paper: FC<IProps>;
export default Paper;
