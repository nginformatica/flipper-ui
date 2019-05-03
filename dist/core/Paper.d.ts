import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
export interface IProps extends IDefault {
    children?: ReactNode;
    square?: boolean;
    elevation?: number;
}
declare const Paper: SFC<IProps>;
export default Paper;
