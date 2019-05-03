import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    minHeight?: number;
    children?: ReactNode;
}
declare const Box: SFC<IProps>;
export default Box;
