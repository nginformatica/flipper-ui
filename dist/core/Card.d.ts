import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    xs?: number;
    name?: string;
    id?: string;
    title?: string;
    children?: ReactNode;
}
declare const Card: SFC<IProps>;
export default Card;
