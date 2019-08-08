import { FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    primary?: boolean;
    width?: string;
}
declare const Line: FC<IProps>;
export default Line;
