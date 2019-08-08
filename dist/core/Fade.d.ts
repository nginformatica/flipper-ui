import { FC } from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    in: boolean;
    timeout?: number | {
        enter?: number;
        exit?: number;
    };
}
declare const Fade: FC<IProps>;
export default Fade;
