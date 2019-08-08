import { FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    in: boolean;
    direction: 'left' | 'right' | 'up' | 'down';
    timeout?: number | {
        enter?: number;
        exit?: number;
    };
}
declare const Slide: FC<IProps>;
export default Slide;
