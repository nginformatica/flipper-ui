import { ReactNode, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children?: ReactNode;
}
declare const Container: SFC<IProps>;
export default Container;
