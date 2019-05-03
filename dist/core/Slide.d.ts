import { ReactElement, SFC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    children: ReactElement<{}>;
    in: boolean;
    direction: 'left' | 'right' | 'up' | 'down';
    timeout?: number | {
        enter?: number;
        exit?: number;
    };
}
declare const Slide: SFC<IProps>;
export default Slide;
